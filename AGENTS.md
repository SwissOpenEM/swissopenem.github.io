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

Config is in `.markdownlint.yaml`. There are no other automated tests in this repo.

## Architecture

This is a Jekyll static site built on the remote `daattali/beautiful-jekyll` theme
(see `_config.yml`). Site-wide CSS/JS additions go through `site-css`/`site-js` in
`_config.yml`, which the theme auto-injects into every page's `<head>`/footer —
don't hand-write `<link>`/`<script>` tags for site-wide assets.

**Data-driven content (`_data/*.yml`)**: much of the site's content lives in YAML
data files rather than hardcoded in pages/includes, and is looped over with Liquid.
Notably `_data/facilities.yml` is the source of truth for participating facility
info (contacts, URLs, `ingestor_urls.production`/`ingestor_urls.qa`, `network`
VPN requirement) — it's consumed by `_includes/facility_table.md` (via
`documentation/user/facilities.md`) and by the facility-connect table in
`documentation/user/workshop-2026.md`.

**Documentation navigation**: pages under `documentation/{user,admin,dev}/` are
ordered and described by `_data/documentation-{user,op,dev}.yml` (each entry has
`id`, `title`, `description`, `path`). Every documentation page includes
`documentationStepper/stepper.html` (dropdown nav) and
`documentationStepper/forwardBackward.html` (prev/next buttons), both of which
read these data files to build navigation. Adding a new documentation page means
adding a corresponding entry to the right `documentation-*.yml` file, not just
creating the markdown file.

**Button includes** — three variants, not interchangeable:

- `button.html` — big centered button, meant to be used inside `button_row.html`
  (which wraps one or more buttons in a flex `.button-container`).
- `inline_button.html` — small button for use inline within text/table cells
  (minimal padding, `display: inline-block`).
- `copyButton.html` — icon button that copies text to the clipboard via the
  site-wide `assets/js/copyToClipboard.js` (loaded through `site-js`).

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
