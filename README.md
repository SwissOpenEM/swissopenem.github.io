# SwissOpenEM website

## Building locally

The website is based on jekyll.

For local compilation, you will first need to install ruby and bundler. Next install the
required gems:

    bundler install

And serve the website:

    bundle exec jekyll serve

## Building with docker

You can also run jekyll in a docker container

    docker-compose up -d

This is equivalent running `jekyll serve`.

## Theme

This site uses the [Hydejack](https://hydejack.com/) theme
([Source code](https://github.com/hydecorp/hydejack)).
