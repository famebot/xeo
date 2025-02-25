# Benvido ao [🔥&nbsp;Lume e Xeo&nbsp;🧊](https://translate.google.com/?sl=gl&tl=en&text=Lume%20e%20Xeo&op=translate)<br>Welcome to [🔥&nbsp;Lume](https://translate.google.com/?sl=gl&tl=en&text=Lume&op=translate) + [Xeo&nbsp;🧊](https://translate.google.com/?sl=gl&tl=en&text=Xeo&op=translate)

Welcome to **Xeo**, a _deluxe_ variant of
[**Lume&nbsp;Simple&nbsp;Blog**](https://lume.land/theme/simple-blog/).

Visit [xeo.land](https://xeo.land) for the live demo.

[**Release Notes**](https://github.com/famebot/xeo/releases) (Contributions
welcome: [famebot/xeo on GitHub](https://github.com/famebot/xeo))

&copy; 2022-2025 [Óscar&nbsp;Otero](https://oscarotero.com/) &amp;
[Ricky&nbsp;de&nbsp;Laveaga](https://rdela.com/);
[MIT&nbsp;License](./LICENSE.md)

## Personalize Xeo

Edit the [`_data.yml`](https://github.com/famebot/xeo/blob/trunk/_data.yml) file
in your blog root folder with your data to customize the site title,
description, and metadata.

Xeo uses [Lume’s Google Fonts plugin](https://lume.land/plugins/google_fonts/)
in [`plugins.ts`](https://github.com/famebot/xeo/blob/trunk/plugins.ts) to set
display (for larger sized headings and titles) and text (normal body and smaller
sizes) typefaces from the [Google Font&nbsp;Library](https://fonts.google.com/).

By default, Xeo sets [Bebas Neue](https://fonts.google.com/specimen/Bebas+Neue)
for display and [Lexend](https://fonts.google.com/specimen/Lexend) for text.
Preview Bebas Neue + Lexend at **[xeo.land](https://xeo.land/).**

To configure which Google [**fonts**](/differences/#typography) your site uses,
provide an object with options to the theme in your `_config.ts`:

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
```

The example custom font site, **[xogo.xeo.land](https://xogo.xeo.land/),**
showcases the results of the configuration above: a fun, playful pairing of
[Poppins](https://fonts.google.com/specimen/Poppins) &
[Playpen](https://fonts.google.com/specimen/Playpen+Sans).
[**Xogo** means _play_ or _game_](https://translate.google.com/?sl=gl&tl=en&text=Xogo&op=translate)
in Galician, like
[**Xeo** means _ice_](https://translate.google.com/?sl=gl&tl=en&text=Xeo&op=translate)
and
[**Lume** means _fire_](https://translate.google.com/?sl=gl&tl=en&text=Lume&op=translate).

The source code powering the example is in the
[`xogo` branch on&nbsp;GitHub](https://github.com/famebot/xeo/blob/xogo/_config.ts#L6-L13).

> ℹ️ Discover how to
> [find the correct “share page link”](https://xeo.land/differences/#typography),
> or URL, for your font choices.

## Quick Start 🎬

- `deno task serve` to start a local server

- [`deno task d`](./deno.json) also runs `deno task lume -s`, if you are into
  the whole
  [brevity&nbsp;thing](https://en.wikiquote.org/wiki/The_Big_Lebowski#Jeffrey_%22The_Dude%22_Lebowski).

- `deno task lup` upgrades Lume via `deno task lume upgrade`

- `deno task up` upgrades dependencies with
  [`nudd`](https://github.com/oscarotero/nudd)

- `deno task cms` to start the CMS

## Explore Lume 🔥

- Browse [Lume documentation](https://lume.land)

- Propose new ideas and get help at [Discord](https://discord.gg/YbTmpACHWB)

- View [Lume source code](https://github.com/lumeland/lume) and report issues

- View the
  [Simple Blog source code](https://github.com/lumeland/theme-simple-blog) and
  report issues

- [Support Lume](https://opencollective.com/lume) development ❤️‍🔥
