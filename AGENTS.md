# AGENTS.md

Guidance for coding agents working in this repository.

## Commands

Local development (pick one):

```sh
docker compose up -d          # serves on http://localhost:4000, live-reloads on file changes
```

```sh
bundle install
bundle exec jekyll serve      # serves on http://localhost:4000
```

The docker image is pinned to `linux/amd64` (see `docker-compose.yml`) because Jekyll's
native gems don't build under Alpine on arm64.

`_config.yml` is **not** reloaded automatically by `jekyll serve`/docker — restart the
server after editing it.

Lint markdown (also runs in CI via `.github/workflows/md.yml`):

```sh
npx markdownlint-cli2 "**/*.md"
```

For a Markdown-only change, lint the affected files, for example
`npx markdownlint-cli2 AGENTS.md`.

Build the site (also runs in CI via `.github/workflows/build.yml`):

```sh
bundle exec jekyll build
```

Markdown lint config is in `.markdownlint.yaml`. There is no automated test suite
beyond the Markdown lint and Jekyll build checks. For layout or interactive changes,
also check the affected pages locally at desktop and mobile widths.

## Architecture

This is a Jekyll static site built on the remote `daattali/beautiful-jekyll@6.0.1` theme
(see `_config.yml`). Site-wide CSS/JS additions go through `site-css`/`site-js` in
`_config.yml`, which the theme auto-injects into every page's `<head>`/footer —
don't hand-write `<link>`/`<script>` tags for site-wide assets.

**Theme overrides and styling**: local files in `_includes/` and `_layouts/`
override theme files with the same names. In particular, the site customizes the
head, navigation, footer, sidebar, home layout, and redirect layout. Edit
`assets/css/customOpenEM.scss` for site styling; Jekyll compiles it to the
`customOpenEM.css` URL listed in `_config.yml`. Keep its YAML front matter.
Use `relative_url` for local asset URLs in Liquid templates. Page-specific scripts
live under `assets/js/{home,getting-started,explore,project}/` and are loaded by
the relevant page or include.

**Data-driven content (`_data/*.yml`)**: much of the site's content lives in YAML
data files rather than hardcoded in pages/includes, and is looped over with Liquid.
Update the source data when changing these sections:

- `_data/team.yml` and `_data/team-supporters.yml` feed `team.html`.
- `_data/partners.yml` feeds `partners.html`.
- `_data/timeline.yml` feeds the Google Charts Gantt include
  `_includes/project/gantt.html` on `timeline.md`.
- `_data/deliverables-wp/wp*.yml` feed the work-package pages through
  `_includes/project/work-package-tasks.md`.

**Page content and interactions**: `index.md` stores home-page copy under `home`
in its front matter, rendered by `_includes/home/`. `getting-started.md` stores
the interactive journey's steps, roles, labels, and links under `journey`, rendered
by `_includes/getting-started/journey.html`. `explore.md` stores catalogue settings
and UI messages under `dataset`; `_includes/explore/dataset-cards.html` and
`assets/js/explore/datasets.js` load public datasets from the PSI Data Catalog.
Keep these configurable values in front matter, and preserve the `data-*`
attributes connecting templates to JavaScript.

**Navigation and documentation redirects**: site navigation is configured by
`navbar-links` in `_config.yml`. Documentation is now hosted externally at
`https://data-catalog-services.pages.psi.ch/openem/`; the former documentation
navigation data and stepper includes are no longer in this repository. Files in
`redirects/` preserve old documentation and support URLs using `permalink`,
`redirect_to`, and `redirect_from`. Preserve these aliases when changing links
or moving pages. `_layouts/redirect.html` controls generated redirect pages.

**News**: add posts as `_posts/YYYY-MM-DD-slug.md` with YAML front matter.
The home page and `news.md` render posts through `_includes/home/news.html`
and `_includes/news/`; update the post content rather than duplicating it there.

**Button includes**:

- `inline_button.html` — small button for use inline within text/table cells
  (minimal padding, `display: inline-block`); accepts `contents` and optional `href`.
- `copyButton.html` — icon button that copies text to the clipboard via the
  site-wide `assets/js/copyToClipboard.js` (loaded through `site-js`); accepts `text`.

**Gotcha: Liquid includes used inline inside markdown tables must not emit
embedded newlines.** Jekyll renders Liquid before Kramdown converts markdown, so
if an `{% include %}` call sits inside a `| table | cell |` and its rendered
output contains a stray `\n` (e.g. from a trailing newline in the include file
itself, or from `markdownify` wrapping text in `<p>...</p>\n`), Kramdown's GFM
table parser silently fails and renders the whole table as an escaped-looking
paragraph instead of a `<table>`. The existing inline includes guard against
this with `| strip` and/or `{% capture %}...{% endcapture %}` — follow that
pattern for any new include meant to be used inline in a table cell. Relatedly,
a Liquid `{% for %}...{% endfor %}` loop generating table rows must not consume
the blank line that GFM requires after a table (avoid a trailing `-` trim on
`{% endfor %}` if something follows the table).
