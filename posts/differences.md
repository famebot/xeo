---
title: Differences between Xeo and Simple Blog
date: "2025-12-31T13:00Z"
author: Ricky de Laveaga
tags:
  - Date
  - Design
  - Front Matter
  - Lume
  - Title
  - Xeo
draft: false
---

Wondering how [**Xeo**](https://github.com/famebot/xeo) differs from
[**Simple Blog**](https://lume.land/theme/simple-blog/)? This post is
for&nbsp;you!

<!--more-->

To recap [How to install Xeo:](/instructions/)

> [**Xeo**](https://github.com/famebot/xeo) began as
> [Ricky de Laveaga’s](https://rdela.com/) _deluxe_ variant of
> [**Simple Blog**](https://lume.land/theme/simple-blog/) by
> [Óscar Otero](https://oscarotero.com/), a clean and minimal blog theme for
> [**Lume**](https://lume.land/) with support for tags and authors. Simple Blog
> and Xeo both provide Atom and JSON feeds for subscribers, and share the same
> design foundation. Over time, eventually Xeo diverged substantially enough
> from Simple Blog that Óscar and Ricky agreed it was time for Xeo to become a
> fully stand-alone [Lume theme](https://lume.land/theme/xeo/).
>
> As of Xeo version 7.0, the successor to v6.3.8, Xeo no longer depends on
> Simple Blog as its parent theme. Because Xeo is no longer a child theme, using
> Xeo as a parent theme to make your own child theme just got easier. Another
> bonus of the split is that Simple Blog can now freely implement features that
> landed in Xeo first (like custom fonts and colors) without having to worry
> about compatibility issues with Xeo or downstream themes and sites that depend
> on&nbsp;Xeo.

Where do they diverge?

## Typography

> [!tip]
>
> Lume’s Google Fonts plugin needs the **share page link**, or share URL, not
> the embed&nbsp;code.

- Xeo uses [Lume’s Google Fonts plugin](https://lume.land/plugins/google_fonts/)
  in [`plugins.ts`](https://github.com/famebot/xeo/blob/trunk/plugins.ts) to set
  display (for larger sized headings and titles) and text (normal body and
  smaller sizes) typefaces from the
  [Google Font&nbsp;Library](https://fonts.google.com/).

- By default, Xeo sets
  [Bebas Neue](https://fonts.google.com/specimen/Bebas+Neue) for display and
  [Lexend](https://fonts.google.com/specimen/Lexend) for text. Preview Bebas
  Neue + Lexend at **[xeo.land](https://xeo.land/).** You can customize this
  when you **[personalize your copy of&nbsp;Xeo](/instructions/#typography).**

- To get the correct URL for your `display` and `text` font choices, I recommend
  selecting the “Get font” button at the top right on the specimen page, which
  will take you the [selection](https://fonts.google.com/selection) page where
  you can select the “Share” button and then the “Copy share page link” button,
  which shows a copy icon that looks like one rectangle stacked on top of
  another rectangle. The share button should be underneath the text “1 font
  family selected.” Use the “Remove all” button to clear each choice before
  selecting another, so the share page links stay&nbsp;separate.

- If you are looking for more options,
  [Poppins](https://fonts.google.com/specimen/Poppins) is an alternative to
  Lexend we considered for Xeo. The example custom font site,
  **[xogo.xeo.land](https://xogo.xeo.land/),** showcases the fun, playful
  pairing of Poppins &
  [Playpen](https://fonts.google.com/specimen/Playpen+Sans).
  [**Xogo** means _play_ or _game_](https://translate.google.com/?sl=gl&tl=en&text=Xogo&op=translate)
  in Galician, like
  [**Xeo** means _ice_](https://translate.google.com/?sl=gl&tl=en&text=Xeo&op=translate)
  and
  [**Lume** means _fire_](https://translate.google.com/?sl=gl&tl=en&text=Lume&op=translate).
  The source code powering the example is in the
  [`xogo` branch on&nbsp;GitHub](https://github.com/famebot/xeo/blob/xogo/_config.ts#L6-L18).
  We chose Lexend over Poppins because
  [variable fonts](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_fonts/Variable_fonts_guide)
  have performance benefits since they combine many different variations of a
  typeface into a single file, reducing&nbsp;requests.

- You can [browse variable Google fonts](https://fonts.google.com/variablefonts)
  or learn about
  [Pairing](https://fonts.google.com/knowledge/choosing_type/pairing_typefaces)
  and
  [Combining Typefaces](https://blog.typekit.com/2016/04/29/combining-typefaces-free-guide-to-great-typography/)
  for inspiration and wisdom. Learn more about Xeo’s typography in
  [How to install&nbsp;Xeo](/instructions/#typography).

## Design

- **Spacing:** Xeo adjusts spacing around various elements, particularly page
  headers and the [search box](/archive/), which is relocated to the bottom of
  pages to reduce layout shift when search results&nbsp;appear.

- **Color:** Xeo has a
  [foundation](https://github.com/famebot/xeo/blob/trunk/styles.css) that will
  lead to eventual support of
  [Rainbow Mode](https://eleventeen.blog/about/#rainbow-mode) powered by
  [Chromagen](https://chromagen.io/), like Xeo’s predecessor
  [eleventeen](https://eleventeen.blog/about/). Chromagen generated Xeo’s
  current color schemes, but has not yet been wired up to Xeo to the degree it
  has been integrated into&nbsp;eleventeen.

## [Front matter optional](/2025-12-solstice/)

Xeo uses [Lume’s Extract date plugin](https://lume.land/plugins/extract_date/)
to parse dates and titles from filenames.

> You have to prepend the date to the filename using the `yyyy-mm-dd` syntax
> followed by a hyphen `-` or an underscore `_` (or `yyyy-mm-dd-hh-ii-ss` if you
> also need the time). Note that [the date] is removed [by default] when
> generating the final url […] Dates can be defined in folders, so it's shared
> by all pages inside […]

– [Extract date, lume.land](https://lume.land/plugins/extract_date/#description)

The date must be at the beginning and complete. The trailing hyphen or
underscore following the date and preceding the title is required by Extract
date. Providing the time is optional. There is a draft in the example posts that
tests the scenario with a date and title in the filename and supplies 13:00, as
`-13-00-00` at the end. This gets around most
[time offsets from UTC](https://en.wikipedia.org/wiki/List_of_UTC_offsets) that
cause the date to shift in certain time zones, most often in New Zealand,
Kiribati, Samoa, Tonga, and USA Minor Outlying&nbsp;Islands.

The [No title](/no-title/) and [2025-12 solstice](/2025-12-solstice/) example
posts both have `date` and `author` in the
[front matter](https://lume.land/docs/getting-started/page-data/). With
[No title](/no-title/), the title in the built site comes from the
[`basename`](https://lume.land/docs/creating-pages/urls/#basename) of the
`no-title` folder containing the `index.md` file. Because the partial,
incomplete date in the `2025-12-solstice.md` source filename does not have a day
value, it gets parsed as part of the title,
[2025-12&nbsp;solstice](/2025-12-solstice/).
