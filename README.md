# SwissOpenEM website

## Building locally

The website is based on jekyll.

For local compilation, you will first need to install ruby and bundler. Next install the
required gems:

    bundler install

And serve the website:

    bundle exec jekyll serve

Access the website at [http://localhost:4000](http://localhost:4000).

## Building with docker

You can also run jekyll in a docker container

    docker compose up -d

This is equivalent running `jekyll serve`.

## Theme

This site uses the [Beautiful Jekyll](https://github.com/daattali/beautiful-jekyll) theme
by [Dean Attali](https://deanattali.com/).
