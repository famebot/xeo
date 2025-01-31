---
title: How to install Xeo
date: '2025-01-13T16:00:00.000Z'
author: Ricky de Laveaga
tags:
  - Instructions
  - Lume
  - Xeo
draft: false
---

[**Xeo**](https://github.com/famebot/xeo) is
[Ricky de Laveaga’s](https://rdela.com/) variant of
[**Simple Blog**](https://lume.land/theme/simple-blog/) by
[Óscar Otero](https://oscarotero.com/), a clean and minimal blog theme for
[**Lume**](https://lume.land/) with support for tags and authors. Simple Blog
and Xeo both provide Atom and JSON feeds for&nbsp;subscribers.

<!--more-->

The **fastest and easiest** way to configure this theme is the
[Lume init command](https://deno.land/x/lume_init), which you can also copy
easily from the [Xeo theme page](https://lume.land/theme/xeo/). Running:

```bash
deno run -A https://lume.land/init.ts --theme=xeo
```

will create a new project with Xeo configured.

## Personalize Xeo

Edit the [`_data.yml`](https://github.com/famebot/xeo/blob/trunk/_data.yml) file
in your blog root folder with your data to customize the site title,
description, and&nbsp;metadata.

To configure which Google [**fonts**](/differences/#typography) your site uses,
provide an object with options to the&nbsp;theme:

```ts
import lume from "lume/mod.ts";
import xeo from "xeo/mod.ts";

const site = lume();

site.use(xeo({
  fonts: {
    display:
      "https://fonts.google.com/share?selection.family=Playpen+Sans:wght@100..800",
    text:
      "https://fonts.google.com/share?selection.family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900",
  },
}));

export default site;
```

> [!note]
>
> Discover how to
> [find the correct “share page link”](/differences/#typography), or URL, for
> your font&nbsp;choices.

Posts must be saved in the `posts` folder (for example,
`posts/my-first-post.md`). Unlike Simple Blog, Xeo serves them from the root
directory, by setting
[`basename`](https://lume.land/docs/creating-pages/urls/#basename) to `/` in
`posts/_data.yml`.

> [!tip]
>
> You can use [LumeCMS](#cms-%26-customization) to customize the blog and add
> content&nbsp;easily.

The [`location`](https://lume.land/docs/configuration/config-file/#location)
(aka domain, web address, “the public URL of the site”) depends on the
environment (development, production) and can be changed dynamically from CLI
(`deno task serve --location=https://example.com`). We currently encourage you
to either configure it dynamically, as Xeo currently does for
[xeo.land](https://xeo.land) (in
[`deno.json`](https://github.com/famebot/xeo/blob/trunk/deno.json#L9) and
[`netlify.toml`](https://github.com/famebot/xeo/blob/trunk/netlify.toml#L5)), or
set in
[`_config.ts`](https://github.com/lumeland/lume.land/blob/2f6da036fb0be93d9689ca29bb87c57c08b7f560/_config.ts#L34)
as [lume.land](https://lume.land/) currently does. The default value is
[`https://localhost:3000`](https://github.com/lumeland/lume.land/blob/2f6da036fb0be93d9689ca29bb87c57c08b7f560/docs/advanced/cheatsheet.md#L27).

## Install as a remote theme

To add the theme to an existing Lume project, import it in your `_config.ts`
file as a remote module. Update it by changing the version number in the import
URL:

```ts
import lume from "lume/mod.ts";
import xeo from "https://deno.land/x/xeo@v5.0.0/mod.ts";

const site = lume();

site.use(xeo());

export default site;
```

Copy the [`_data.yml`](https://github.com/famebot/xeo/blob/trunk/_data.yml) file
to your blog root folder and edit it with your data.

## Use Xeo as a base template

To use this theme as a base template for a more customized blog, clone
[famebot/xeo](https://github.com/famebot/xeo) on GitHub and edit the
[`_data.yml`](https://github.com/famebot/xeo/blob/trunk/_data.yml) file.

## CMS &amp; Customization

Like Simple Blog, Xeo includes [LumeCMS](https://lume.land/cms) to edit your
site easily in a web browser. You can
[run LumeCMS locally](https://lume.land/cms/#run-in-localhost) or publish it
alongside your built site, ideally
[deployed to a VPS](https://lume.land/cms/deployment/vps/).
