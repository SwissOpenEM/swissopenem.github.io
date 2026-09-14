FROM ruby:4.0.6-alpine3.24

WORKDIR /tmp
ADD Gemfile /tmp/
ADD Gemfile.lock /tmp/

RUN apk update && \
    apk add --no-cache --virtual build-deps build-base openssl-dev pkgconf zlib-dev && \
    apk list -I
RUN gem install bundler --no-document
RUN bundle install

VOLUME /src
EXPOSE 4000

WORKDIR /src
ENTRYPOINT ["bundler", "exec", "jekyll"]
CMD ["serve", "--livereload", "-H", "0.0.0.0"]
