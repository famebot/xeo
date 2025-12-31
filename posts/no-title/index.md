---
date: "2025-01-01T13:00Z"
author: Ricky de Laveaga
---

A post with `date` and `author` in the frontmatter but no title, in a file named
`index.md` inside a folder named `no-title`. Here the title in the built site,
“No title,” comes from the
[`basename`](https://lume.land/docs/creating-pages/urls/#basename) of the folder
name containing the file.

There is a draft in the example posts that tests the scenario with a date and
title in the filename. In the [2025-12 solstice](/2025-12-solstice/) filename
(`2025-12-solstice.md`) because the partial date is incomplete and does not have
a day value, it gets parsed as part of the title.
