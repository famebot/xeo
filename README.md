# Benvido ao [🔥&nbsp;Lume e Xeo&nbsp;🧊](https://translate.google.com/?sl=gl&tl=en&text=Lume%20e%20Xeo&op=translate)<br>Welcome to [🔥&nbsp;Lume](https://translate.google.com/?sl=gl&tl=en&text=Lume&op=translate) + [Xeo&nbsp;🧊](https://translate.google.com/?sl=gl&tl=en&text=Xeo&op=translate)

Welcome to **Xeo**, a _deluxe_ variant of
[**Lume Simple Blog**](https://lume.land/theme/simple-blog/).

Visit [xeo.land](https://xeo.land) for the live demo.

[**Release Notes**](https://github.com/famebot/xeo/releases) (Contributions
welcome: [famebot/xeo on GitHub](https://github.com/famebot/xeo))

&copy; 2022-2025 [Óscar Otero](https://oscarotero.com/) &amp;
[Ricky de Laveaga](https://rdela.com/); [MIT License](./LICENSE.md)

## Quick start 🎬

Once you
[install Deno](https://docs.deno.com/runtime/getting_started/installation/), the
**fastest and easiest** way to configure this theme is the
[Lume init command](https://deno.land/x/lume_init), which you can also copy
easily from the [Xeo theme page](https://lume.land/theme/xeo/). Running:

```bash
deno run -A https://lume.land/init.ts --theme=xeo
```

will create a new project with Xeo configured.

## Build + dev commands&nbsp;🛠️

- `deno task serve` to start a local server

- [`deno task d`](./deno.json) also runs `deno task lume -s`, if you are into
  the whole
  [brevity thing](https://en.wikiquote.org/wiki/The_Big_Lebowski#Jeffrey_%22The_Dude%22_Lebowski).

- `deno task lup` upgrades Lume via `deno task lume upgrade`

- `deno task up` upgrades dependencies with
  [`nudd`](https://github.com/oscarotero/nudd)

## Personalize Xeo 💅

Edit the [`_data.yml`](https://github.com/famebot/xeo/blob/trunk/_data.yml) file
in your blog root folder with your data to customize the site title,
description, and metadata.

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

[**Xogo** means _play_ or _game_](https://translate.google.com/?sl=gl&tl=en&text=Xogo&op=translate)
in Galician, like
[**Xeo** means _ice_](https://translate.google.com/?sl=gl&tl=en&text=Xeo&op=translate)
and
[**Lume** means _fire_](https://translate.google.com/?sl=gl&tl=en&text=Lume&op=translate).
The source code powering the example is in the
[`xogo` branch on GitHub](https://github.com/famebot/xeo/blob/xogo/_config.ts#L6-L13).

> ℹ️ Discover how to
> [find the correct “share page link”](https://xeo.land/differences/#typography),
> or URL, for your font choices.

### Color 🎨

Like with fonts above, to **configure which colors Xeo uses**, provide an object
with options to the theme:

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

## Install as a remote theme&nbsp;🛰️

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
