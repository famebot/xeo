---
date: "2025-12-21T15:03Z"
author: Ricky de Laveaga
---

This post only has the title in the filename, `2025-12-solstice.md`. Because the
partial date is incomplete and does not have a day value, it gets parsed as part
of the title. The `date` (as `2025-12-21T15:03Z`, the
[2025 December Solstice](https://earthsky.org/astronomy-essentials/everything-you-need-to-know-december-solstice/))
and author are in
[front matter](https://lume.land/docs/getting-started/page-data/), but there is
no need to put a `title`, thanks to
[Lume’s Extract date plugin](https://lume.land/plugins/extract_date/).

<!--more-->

## Front matter optional

> You have to prepend the date to the filename using the `yyyy-mm-dd` syntax
> followed by a hyphen `-` or an underscore `_` (or `yyyy-mm-dd-hh-ii-ss` if you
> also need the time). Note that [the date] is removed [by default] when
> generating the final url […] Dates can be defined in folders, so it's shared
> by all pages inside […]

– [Extract date, lume.land](https://lume.land/plugins/extract_date/#description)

Since the current implementation uses a
[negative lookahead](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion)
to remove hyphens that do not
[precede digits 0-9](https://github.com/famebot/xeo/blob/trunk/plugins.ts#L144),
`solstice-2025-12.md` would end up keeping the hyphen and render as
“Solstice-2025-12” compared to “2025-12 solstice” here. I consider this
inconsistency a limitation I can live with for now. There is a draft in the
example posts that tests the scenario with a date and title in the filename.

With [No title](/no-title/), the title in the built site comes from the
[`basename`](https://lume.land/docs/creating-pages/urls/#basename) of the
`no-title` folder containing the `index.md` file.
