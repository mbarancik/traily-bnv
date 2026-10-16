# Traily BNV

Website for the mountain-bike trails in Bardejovská Nová Ves, Slovakia, run by a local civic association. It lists the trails with difficulty, distance and elevation, shows the current trail status, a photo gallery, all in Slovak, Polish and English.

**Live:** https://trailybnv.sk

## Tech stack

- [Hugo](https://gohugo.io) static site generator, custom templates
- Plain HTML/CSS and vanilla JavaScript
- Hosting: Cloudflare Pages

## Project structure

```
content/      Pages and trails (Markdown, multiple languages)
data/         Editable site data
i18n/         UI strings for different languages
layouts/      Hugo templates
static/       CSS, JS, images, media
archetypes/   Templates for new content
```

## Running locally

Requires [Hugo](https://gohugo.io/installation/).

```bash
git clone https://github.com/mbarancik/traily-bnv.git
cd traily-bnv
hugo server
```
