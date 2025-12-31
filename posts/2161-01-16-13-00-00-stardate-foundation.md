---
author: Ricky de Laveaga
draft: true
---

A draft post with the title and date in the filename,
`2161-01-16-13-00-00-stardate-foundation.md`, without a `date` or `title` in the
frontmatter, but with `draft` set to true and the `author`.

<!--more-->

## Frontmatter optional

This tests our title parsing and usage of
[Lume’s Extract date plugin](https://lume.land/plugins/extract_date/) in this
scenario with a date and title in the filename.

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
parsed as part of the title, [2025-12 solstice](/2025-12-solstice/).

When Lume processes the `index.md` file contained in the `no-title` folder, the
[`basename`](https://lume.land/docs/creating-pages/urls/#basename) gets
transformed to “[No title](/no-title/)” in the built site because the `index.md`
file works like an `index.html` file and assumes the name of its directory.

## [Stardate](https://en.wikipedia.org/wiki/Stardate) 2161

Feeling great about the founding of
[The United Federation of Planets](https://en.wikipedia.org/wiki/United_Federation_of_Planets)
by Earth, Tellar, Andoria, and Vulcan 🖖
