---
title: Differences between Xeo and Simple Blog
date: '2025-01-19T16:00:00.000Z'
author: Ricky de Laveaga
tags:
  - Design
  - Xeo
draft: false
---

Wondering how [**Xeo**](https://github.com/famebot/xeo) differs from
[**Simple Blog**](https://lume.land/theme/simple-blog/)? This post is
for&nbsp;you!

<!--more-->

To recap [How to install Xeo:](/instructions/)

> [**Xeo**](https://github.com/famebot/xeo) is
> [Ricky de Laveaga’s](https://rdela.com/) variant of
> [**Simple Blog**](https://lume.land/theme/simple-blog/) by
> [Óscar Otero](https://oscarotero.com/), a clean and minimal blog theme for
> [Lume](https://lume.land/) with support for tags and authors. Simple Blog and
> Xeo both provide Atom and JSON feeds for&nbsp;subscribers.

Where do they diverge?

## Typography

- Xeo uses [Lume’s Google Fonts plugin](https://lume.land/plugins/google_fonts/)
  in [`_config.ts`](https://github.com/famebot/xeo/blob/trunk/_config.ts) to set
  display (for larger sized headings and titles) and text (normal body and
  smaller sizes) typefaces from the
  [Google Font&nbsp;Library](https://fonts.google.com/).

- By default, Xeo uses
  [Bebas Neue](https://fonts.google.com/specimen/Bebas+Neue) for display and
  [Lexend](https://fonts.google.com/specimen/Lexend) for text. You can customize
  this when you
  [set up your copy of&nbsp;Xeo](/instructions/#initialize-your-copy-of-xeo).

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
  Lexend we considered for Xeo. We chose Lexend over Poppins because
  [variable fonts](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_fonts/Variable_fonts_guide)
  have performance benefits since they combine many different variations of a
  typeface into a single file, reducing requests. You can
  [browse variable Google fonts](https://fonts.google.com/variablefonts) or
  learn about
  [Pairing](https://fonts.google.com/knowledge/choosing_type/pairing_typefaces)
  and
  [Combining Typefaces](https://blog.typekit.com/2016/04/29/combining-typefaces-free-guide-to-great-typography/)
  for inspiration and&nbsp;wisdom.

> [!tip]
>
> Lume’s Google Fonts plugin needs the **share page link**, or share URL, not
> the embed&nbsp;code.

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
  current color scheme, but has not yet been wired up to Xeo to the degree it
  has been integrated into&nbsp;eleventeen.
