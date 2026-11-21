# 🧊 Xeo for Lume 🔥

Welcome to [**Xeo**](https://lume.land/theme/xeo/), an image and video blogging
theme for [**Lume**](https://lume.land/).

Visit [xeo.land](https://xeo.land) for the live demo.

[**Release Notes** on GitHub](https://github.com/famebot/xeo/releases) mirror
local [**Changelog**](./CHANGELOG.md).\
Contributions welcome: [famebot/xeo on GitHub](https://github.com/famebot/xeo)

&copy; 2022-present [Óscar Otero](https://oscarotero.com/) &amp;
[Ricky de Laveaga](https://rdela.com/);
[MIT License](https://github.com/famebot/xeo/blob/trunk/LICENSE.md)

> [!NOTE]
> **Xeo** began as a variant of Lume’s default
> [**Simple Blog**](https://lume.land/theme/simple-blog/) theme by
> [Óscar Otero](https://oscarotero.com/).

## Setup

```bash
npm create lume -- --theme=@famebot/xeo
```

## Personalize Xeo 💅

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
(development, production) and can be changed dynamically from the CLI. The
default value is `https://localhost`.

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

To add the theme to an existing Lume project, add Xeo to imports in
`package.json` then import it in your `_config.ts` file as a remote module.

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
