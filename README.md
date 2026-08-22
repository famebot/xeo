# 🧊 Xeo for Lume 🔥

Welcome to **Xeo**, a _splendid_
[**Lume theme**](https://lume.land/theme/simple-blog/) descended from Simple
Blog.

Visit [xeo.land](https://xeo.land) for the live demo.

[**Release Notes**](https://github.com/famebot/xeo/releases) (Contributions
welcome: [famebot/xeo on GitHub](https://github.com/famebot/xeo))

&copy; 2022-present [Óscar Otero](https://oscarotero.com/) &amp;
[Ricky de Laveaga](https://rdela.com/);
[MIT License](https://github.com/famebot/xeo/blob/trunk/LICENSE.md)

[![](https://data.jsdelivr.com/v1/package/gh/famebot/xeo/badge)](https://www.jsdelivr.com/package/gh/famebot/xeo)

> [!NOTE]
> **Xeo** began as a variant of the
> [**Simple Blog**](https://lume.land/theme/simple-blog/) theme for
> [**Lume**](https://lume.land/) by [Óscar Otero](https://oscarotero.com/). Over
> time, eventually Xeo diverged substantially enough from Simple Blog that Óscar
> and Ricky agreed it was time for Xeo to become a fully stand-alone theme.
>
> Starting with version 7, Xeo no longer depends on Simple Blog as its parent
> theme. Because Xeo is no longer a child theme, using Xeo as a parent theme to
> make your own child theme just got easier. Another bonus of the split is that
> Simple Blog can now freely implement features that landed in Xeo first (like
> custom fonts and colors) without having to worry about compatibility issues
> with Xeo or downstream themes and sites that depend on Xeo.

## Migration steps for older versions

### 8.1.1+

[Version 8.1.1](https://github.com/famebot/xeo/releases/tag/v8.1.1) (re-released
as [Version 9](https://github.com/famebot/xeo/releases/tag/v9.0.0) to reflect
its unfortunate breaking change) and higher require an update to `deno.json` for
`@mdit/plugin-alert@2`:

**Change this in `deno.json`**

```diff
-    "mdit/plugin-alert": "https://cdn.jsdelivr.net/npm/@mdit/plugin-alert@0.22.3/lib/index.js",
+    "mdit/plugin-alert": "https://cdn.jsdelivr.net/npm/@mdit/plugin-alert@2.0.0/dist/index.js",
```

That is, change **`/lib/`** to **`/dist/`** at the end of the line:
`/lib/index.js",` to `/dist/index.js",`.

### 8.0.0+

[Version 8](https://github.com/famebot/xeo/releases/tag/v8.0.0) introduced more
customization options that need to be set when you upgrade.

1. Set these
   [new options](https://github.com/famebot/xeo/blob/v8.0.0/_data.yml#L5-L11) in
   `_data.yml` to configure them:

   - `home.posts` (default: `3`) - The number of recent posts shown on the home
     page.

   - `archives.posts` (default: `12`) - The number of posts shown on archive
     pages.

   - `archives.tag` (default: `10`) - The number of posts shown on tag pages.

   - `archives.author` (default: `10`) - The number of posts shown on author
     pages.

   - `archives.basename` (default: `archive`) - The path/slug of the post
     archive. (The “Archive” title is set by `i18n.nav.archive_title` in
     [`_data/i18n.yml`](https://github.com/famebot/xeo/blob/trunk/_data/i18n.yml),
     which you can create a copy of in your Xeo site to add, customize, or
     override values. The search box label, `i18n.nav.archive_search`, is also
     set there.)

2. Rename
   [logo options](https://github.com/famebot/xeo/blob/v8.0.0/_data.yml#L17-L19)
   in `_data.yml`

   - `logo` is now `logo.svg` (default is still: `/favicon.svg`)

   - `logo_height` is now `logo.height` (default is still: `48`)

## Quick start 🎬

Once you
[install Deno](https://docs.deno.com/runtime/getting_started/installation/), the
**fastest and easiest** way to configure this theme is the
[Lume init command](https://github.com/lumeland/init), which you can also copy
easily from the [Xeo theme page](https://lume.land/theme/xeo/). Running:

```bash
deno run -A https://lume.land/init.ts --theme=xeo
```

will create a new project with Xeo configured.

## Build + dev commands&nbsp;🛠️

- `deno task serve` to start a local server

- `deno task d` (short for `dev`, or `develop`) and `deno task s` also run
  `serve`, if you are into the whole
  [brevity thing](https://en.wikiquote.org/wiki/The_Big_Lebowski#Jeffrey_%22The_Dude%22_Lebowski).

- `deno task lup` upgrades Lume via `deno task lume upgrade`

- `deno task up` upgrades dependencies (including Lume) with
  [`nudd`](https://github.com/oscarotero/nudd)

- View entire
  [`deno.json` configuration file](https://github.com/famebot/xeo/blob/trunk/deno.json).

## Personalize Xeo 💅

Edit the [`_data.yml`](https://github.com/famebot/xeo/blob/trunk/_data.yml) file
in your blog root folder with your data to customize the site title,
description, and metadata.

## Personalize Xeo

Edit the [`_data.yml`](https://github.com/famebot/xeo/blob/trunk/_data.yml) file
in your blog root folder with your data to customize the site title,
description, and&nbsp;metadata.

Xeo uses [Lume’s favicon plugin](https://lume.land/plugins/favicon/), and
starting with Xeo version 8.1, Xeo allows you to control the favicon plugin’s
`input` option to provide an alternate file other than the default,
`/favicon.svg`, which had been hardcoded up through version 8.0.1. Thanks to
[pamubay on GitHub](https://github.com/pamubay) for raising
[this issue](https://github.com/famebot/xeo/issues/45) in
[Lume GitHub&nbsp;discussions](https://github.com/lumeland/lume/discussions/814).

> ℹ️
> [Accepted formats](https://github.com/lumeland/lume/blob/main/plugins/favicon.ts)
> are **SVG, PNG, JPG, GIF, BMP, TIFF,&nbsp;WEBP**

Xogo ([live site](https://xogo.xeo.land/) /
[code](https://github.com/famebot/xeo/tree/xogo)) demonstrates all the
customization options,&nbsp;including:

- using an alternate favicon file (`/favicon.png`),
- customizing the logo (`/logo.svg`),
- fonts (Playpen & Poppins, see [Typography](#typography-) below),
- and custom colors.

[**Xogo** means _play_ or _game_](https://translate.google.com/?sl=gl&tl=en&text=Xogo&op=translate)
in Galician, like
[**Xeo** means _ice_](https://translate.google.com/?sl=gl&tl=en&text=Xeo&op=translate)
and
[**Lume** means _fire_](https://translate.google.com/?sl=gl&tl=en&text=Lume&op=translate).

### Domains and URLs&nbsp;🕸️

The [`location`](https://lume.land/docs/configuration/config-file/#location)
(aka web address, “the public URL of the site”) depends on the environment
(development, production) and can be changed dynamically from the CLI
(`deno task serve --location=https://example.com`). We encourage you to either
configure `location` dynamically, as Xeo does for [xeo.land](https://xeo.land)
(in [`deno.json`](https://github.com/famebot/xeo/blob/trunk/deno.json#L9) and
[`netlify.toml`](https://github.com/famebot/xeo/blob/trunk/netlify.toml#L5)), or
to set `location` in
[`_config.ts`](https://github.com/lumeland/lume.land/blob/2f6da036fb0be93d9689ca29bb87c57c08b7f560/_config.ts#L34)
as [lume.land](https://lume.land/) does. The default value is
[`https://localhost`](https://github.com/lumeland/lume.land/blob/main/docs/advanced/cheatsheet.md?plain=1#L27).

> ℹ️ You may also want to set the local server
> [`port`](https://lume.land/docs/configuration/config-file/#port). For even
> more flexibility in local development,
> [Lume 2.5.1](https://github.com/lumeland/lume/blob/v2.5.1/CHANGELOG.md#251---2025-01-28)
> added a new `--hostname` argument to
> [`lume --serve`](https://lume.land/docs/overview/command-line/#start-a-local-server)
> and [`lume cms`](https://lume.land/cms/#run-in-localhost) to change the
> default `localhost` value there as well.

## Blogging 📝

Posts must be saved in the `posts` folder (for example,
`posts/my-first-post.md`). Unlike Simple Blog, Xeo serves them from the root
directory, by setting
[`basename`](https://lume.land/docs/creating-pages/urls/#basename) to `/` in
[`posts/_data.yml`](https://github.com/famebot/xeo/blob/trunk/posts/_data.yml#L3).

## CMS ✍️

> 💡 Use [LumeCMS](https://lume.land/cms/) to customize the blog and add content
> easily.

Like Simple Blog, Xeo includes [LumeCMS](https://lume.land/cms) to edit your
site easily in a web browser. You can
[run LumeCMS locally](https://lume.land/cms/#run-in-localhost) or publish it
alongside your built site, ideally
[deployed to a VPS](https://lume.land/cms/deployment/vps/).

### Typography 🔤

Xeo uses [Lume’s Google Fonts plugin](https://lume.land/plugins/google_fonts/)
in [`plugins.ts`](https://github.com/famebot/xeo/blob/trunk/plugins.ts) to set
display (for larger sized headings and titles) and text (normal body and smaller
sizes) typefaces from the [Google Font Library](https://fonts.google.com/).

By default, Xeo sets [Bebas Neue](https://fonts.google.com/specimen/Bebas+Neue)
for display and [Lexend](https://fonts.google.com/specimen/Lexend) for text.
Preview Bebas Neue + Lexend at **[xeo.land](https://xeo.land/).**

To
[**configure which Google fonts Xeo uses**](https://xeo.land/differences/#typography),
provide a `fonts` object with `display` and/or `text` options to `xeo` in your
`_config.ts`:

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

**Visit [xogo.xeo.land](https://xogo.xeo.land/)** to see the change resulting
from the configuration above, which pairs
[Playpen](https://fonts.google.com/specimen/Playpen+Sans) &
[Poppins](https://fonts.google.com/specimen/Poppins) for a fun, playful vibe.
Preview the defaults,
[Bebas Neue](https://fonts.google.com/specimen/Bebas+Neue) +
[Lexend](https://fonts.google.com/specimen/Lexend), at
**[xeo.land](https://xeo.land/).**

The source code powering the example is in the
[`xogo` branch on GitHub](https://github.com/famebot/xeo/blob/xogo/_config.ts#L6-L20).

> ℹ️ Discover how to
> [find the correct “share page link”](https://xeo.land/differences/#typography),
> or URL, for your font choices.

### Color 🎨

Like with fonts above, to **configure which colors Xeo uses**, provide `xeo`
with a `colors` object with the options you want to override in your
`_config.ts`:

```ts
import lume from "lume/mod.ts";
import xeo from "xeo/mod.ts";

const site = lume();

site.use(xeo({
  colors: {
    hue: 288,
    complement: 108,
    analogous: 154,
  },
}));

export default site;
```

**Visit [xogo.xeo.land](https://xogo.xeo.land/)** to see the change resulting
from the configuration above.

See the defaults in
[`plugins.ts`](https://github.com/famebot/xeo/blob/trunk/plugins.ts) for a list
of all `colors` options.

## Install as a remote theme&nbsp;🛰️

To add the theme to an existing Lume project, add Xeo to imports in `deno.json`
then import it in your `_config.ts` file as a remote module. Update it by
changing the version number in the import URL (or by using
[Nudd](https://www.jsdelivr.com/package/gh/oscarotero/nudd) by
[Óscar Otero](https://oscarotero.com/) like Xeo and Xogo both&nbsp;do):

`deno.json`:

```json
// […]
"imports": {
    "lume/": "https://cdn.jsdelivr.net/gh/lumeland/lume@3.2.6/",
    // […]
    "xeo/": "https://cdn.jsdelivr.net/gh/famebot/xeo@8.1.0/"
  },
  // […]
```

`_config.ts`:

```ts
import lume from "lume/mod.ts";
import xeo from "xeo/mod.ts";

const site = lume();

site.use(xeo());

export default site;
```

Copy the [`_data.yml`](https://github.com/famebot/xeo/blob/trunk/_data.yml) file
to your blog root folder and edit it with your&nbsp;data.

## Use Xeo as a base template&nbsp;🧱

To use this theme as a base template for a more customized blog, clone
[famebot/xeo](https://github.com/famebot/xeo) on GitHub and edit the
[`_data.yml`](https://github.com/famebot/xeo/blob/trunk/_data.yml) file.

## Explore Lume 🧭

- Browse [Lume documentation](https://lume.land)

- Propose new ideas and get help at [Discord](https://discord.gg/YbTmpACHWB)

- View [Lume source code](https://github.com/lumeland/lume) and report issues

- View the
  [Simple Blog source code](https://github.com/lumeland/theme-simple-blog) and
  report issues

- [Support Lume](https://opencollective.com/lume) development ❤️‍🔥

## 📇 Sites built with Xeo ❄️

- ### [Artist Activist](https://artact.io/artact-xeo/)

- ### [Ricky de Laveaga](https://rdela.com/credits/)
