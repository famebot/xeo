---
author: Ricky de Laveaga
tags:
  - Date
  - Front Matter
  - Lume
  - Star Trek
  - Title
draft: true
---

A post where all we have is the `author`, the `tags`, and `draft` set to true in
the [front matter](https://lume.land/docs/getting-started/page-data/). The
`date` and `title` get set by
[Lume’s Extract date plugin](https://lume.land/plugins/extract_date/) from the
filename, (`2161-01-16-13-00-00-stardate-foundation.md`).

<!--more-->

## Front matter optional

> You have to prepend the date to the filename using the `yyyy-mm-dd` syntax
> followed by a hyphen `-` or an underscore `_` (or `yyyy-mm-dd-hh-ii-ss` if you
> also need the time). Note that [the date] is removed [by default] when
> generating the final url […] Dates can be defined in folders, so it's shared
> by all pages inside […]

– [Extract date, lume.land](https://lume.land/plugins/extract_date/#description)

`2161-01-16_stardate-foundation.md` would also work nearly the same except the
time would default to 00:00 UTC instead of 13:00. The trailing hyphen or
underscore is required by Extract date. Providing the time is optional, here
13:00, as `-13-00-00` at the end, gets around most
[time offsets from UTC](https://en.wikipedia.org/wiki/List_of_UTC_offsets) that
cause the date to shift in certain time zones, most often in New Zealand,
Kiribati, Samoa, Tonga, and USA Minor Outlying Islands. Because the partial,
incomplete date in (`2025-12-solstice.md`) does not have a day value, it gets
parsed as part of the title, [2025-12&nbsp;solstice](/2025-12-solstice/).

When Lume processes the `index.md` file contained in the `no-title` folder, the
[`basename`](https://lume.land/docs/creating-pages/urls/#basename) gets
transformed to “[No title](/no-title/)” in the built site because the `index.md`
file works like an `index.html` file and assumes the name of its&nbsp;directory.

## [Stardate](https://en.wikipedia.org/wiki/Stardate) 2161

Feeling great about the founding of
[The United Federation of Planets](https://en.wikipedia.org/wiki/United_Federation_of_Planets)
by Earth, Tellar, Andoria, and&nbsp;Vulcan&nbsp;🖖
