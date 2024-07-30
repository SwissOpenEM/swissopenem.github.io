FROM ruby:3.3.3-alpine3.20

WORKDIR /tmp
ADD Gemfile /tmp/
ADD Gemfile.lock /tmp/

RUN apk update && \
    apk add --no-cache --virtual build-deps build-base zlib-dev && \
    apk list -I
RUN gem install bundler --no-document
RUN bundle install

VOLUME /src
EXPOSE 4000

WORKDIR /src
ENTRYPOINT ["bundler", "exec", "jekyll"]
CMD ["serve", "--livereload", "-H", "0.0.0.0"]
