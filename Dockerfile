FROM alpine:3.18

WORKDIR /tmp
ADD Gemfile /tmp/
ADD Gemfile.lock /tmp/

RUN apk list -I && \
    apk --no-cache add libatomic readline readline-dev libxml2 libxml2-dev \
    ncurses-terminfo-base ncurses-terminfo \
    libxslt libxslt-dev zlib-dev zlib \
    ruby ruby-dev yaml yaml-dev \
    libffi-dev build-base git nodejs
RUN gem env
RUN gem install etc bundler --no-document
RUN pwd
RUN ls -l
RUN bundle install

VOLUME /src
EXPOSE 4000

WORKDIR /src
ENTRYPOINT ["jekyll", "serve", "--livereload", "-H", "0.0.0.0"]
