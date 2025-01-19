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
[Lume](https://lume.land/) with support for tags and authors. Simple Blog and
Xeo both provide Atom and JSON feeds for subscribers.

<!--more-->

<!--
The **fastest and easiest** way to configure this theme is the
[Lume init command](https://deno.land/x/lume_init), which you can also copy
easily from the [Simple Blog theme page](https://lume.land/theme/simple-blog/).
Running:

```bash
deno run -A https://lume.land/init.ts --theme=simple-blog
```

will create a new project with Simple Blog configured.
-->

## Initialize your copy of Xeo

Edit the [`_config.ts`](https://github.com/famebot/xeo/blob/trunk/_config.ts),
[`_data.yml`](https://github.com/famebot/xeo/blob/trunk/_data.yml) and
[`_data/i18n.yml`](https://github.com/famebot/xeo/blob/trunk/_data/i18n.yml)
files in your blog root folder with your data to customize the
[`location`](https://lume.land/docs/configuration/config-file/#location) (aka
domain, “the public URL of the site”), [fonts](/differences/#typography), site
title, description, and metadata.

Posts must be saved in the `posts` folder (for example,
`posts/my-first-post.md`). Unlike Simple Blog, Xeo serves them from the root
directory, by setting
[`basename`](https://lume.land/docs/creating-pages/urls/#basename) to `/` in
`posts/_data.yml`.

<!--
## Install as a remote theme

To add the theme to an existing Lume project, import it in your `_config.ts`
file as a remote module. Update it by changing the version number in the import
URL:

```ts
import lume from "lume/mod.ts";
import blog from "https://deno.land/x/lume_theme_simple_blog@v0.15.6/mod.ts";

const site = lume();

site.use(blog());

export default site;
```

Copy the
[`_data.yml`](https://github.com/lumeland/theme-simple-blog/blob/main/src/_data.yml)
file to your blog root folder and edit it with your data.
-->

## Use Xeo as a base template

To use this theme as a base template for a more customized blog, clone
[famebot/xeo](https://github.com/famebot/xeo) on GitHub and edit the
[`_config.ts`](https://github.com/famebot/xeo/blob/trunk/_config.ts),
[`_data.yml`](https://github.com/famebot/xeo/blob/trunk/_data.yml) and
[`_data/i18n.yml`](https://github.com/famebot/xeo/blob/trunk/_data/i18n.yml)
files.

## Customization

> [!tip]
>
> You can use [LumeCMS](https://lume.land/cms) to customize the blog and add
> content easily.
