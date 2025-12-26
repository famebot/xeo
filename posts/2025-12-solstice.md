---
date: "2025-12-21T15:03Z"
author: Ricky de Laveaga
---

A post with the title but no date in the filename, `2025-12-solstice.md`, with
`date` (as `2025-12-21T15:03Z`, the
[2025 December Solstice](https://earthsky.org/astronomy-essentials/everything-you-need-to-know-december-solstice/))
and author but no `title` in frontmatter.

<!--more-->

## Frontmatter optional

This makes sure our title parsing and usage of
[Lume’s Extract date plugin](https://lume.land/plugins/extract_date/) behaves in
this scenario with a title in the filename but no date.

> You have to prepend the date to the filename using the `yyyy-mm-dd` syntax
> followed by a hyphen `-` or an underscore `_` (or `yyyy-mm-dd-hh-ii-ss` if you
> also need the time). Note that [the date] is removed [by default] when
> generating the final url […] Dates can be defined in folders, so it's shared
> by all pages inside […]

– [Extract date, lume.land](https://lume.land/plugins/extract_date/#description)

The date at the beginning should not be parsed and is assumed here to be part of
the title since it is incomplete. With the current implementation,
`solstice-2025-12.md` would end up keeping the hyphen and render as
“Solstice-2025-12” with “Solstice 2025-12” here. I consider this inconsistency a
limitation I can live with for now. There is a draft in the example posts that
tests the scenario with a date and title in the filename.
