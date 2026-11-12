# My portfolio

I am preparing my portfolio in this repository for the domain root at
https://brandonho419.github.io/. I use `../portfolio-preview` as the design and
content baseline, preserving its paper, charcoal and orange visual direction.
This checkout is release preparation; I have not enabled publishing here.
I am keeping `noindex,nofollow` until I make a separate indexing decision.

## My project selection

I separate independent redevelopment from coursework without erasing the
collaborative work that came first.

- **Personal Projects:** Savvit, Mini Search Engine and Grid-Based-Farming Game.
  I credit their university predecessors in each entry and link their history.
- **University Projects:** Parallel Merge Sort, which I developed with Jeremy
  Nguyen and Marko Bogsaveljic. I describe our shared implementation without assigning
  myself unverified individual contributions or claiming a benchmark speedup.

My expected graduation remains 2027. I will add achievements, certifications and
a resume when I have material ready to publish.

## Run locally

I use static HTML, CSS and JavaScript. Viewing the portfolio needs no package
installation, API key or backend. My generator uses Python 3.9+ and only its
standard library.

```sh
python -m http.server 8000 --bind 127.0.0.1
```

I open http://127.0.0.1:8000/ to test the page and WebAssembly demo. A `file:` URL
is not suitable for the game. Google Fonts needs internet access; system fonts
provide a fallback. Content and navigation work without JavaScript; the farming
demo requires JavaScript and WebGL.

## Edit and regenerate

- `data/projects.json`: my project descriptions, attribution, status and evidence.
- `templates/projects.html`: project categories, article layout and media/player.
- `tools/render_projects.py`: my standard-library validator and generator.
- `index.html`: the static page, including the generated project block.
- `tests/test_render_projects.py`: the generator's regression tests.
- `styles.css` and `script.js`: presentation, footer year and on-demand game loading.
- `assets/`: my Savvit fixture capture, existing search recording/poster, farming
  screenshot and static `portfolio-social.png` sharing graphic.
- `demos/grid-based-farming-game/`: the compiled game and third-party notices.

I edit project text in the JSON and layout in the template, then run:

```sh
python -B tools/render_projects.py
python -B tools/render_projects.py --check
python -B -m unittest discover -s tests -v
```

I use `python3` or `py -3` if required by my environment. I include regenerated
`index.html` with data/template changes in my manual commits. Static hosting
serves that HTML directly; it does not run the generator.

I keep exactly one `BEGIN GENERATED PROJECTS` / `END GENERATED PROJECTS` pair and
do not hand-edit inside it. Other sections remain editable directly. Each of the
four curated keys (`savvit`, `search`, `farm`, `mergesort`) maps to a template slot.
The generator checks the exact schema and placeholder set before writing, escapes
text/attributes and restricts evidence links to HTTPS without credentials.
`--check` reports stale output without changing the page.

## My source review

I checked local files, including uncommitted work, rather than treating GitHub as
newer than my checkouts. These are the sources behind the descriptions:

| Project | Local evidence I reviewed |
| --- | --- |
| Savvit | `../Savvit-Web` (remote: `Savvit-Web-Based-Development`), especially `routes/boards.js`, `controllers/boardSharingController.js`, `controllers/pinEditingController.js`, `public/js/boardstuff/pin_actions.js`, `public/js/appearance.js`, `public/js/dialog-accessibility.js`, `public/stylesheets/design-system.css` and `README.md`. |
| Search | `../ProjectSearchEngine/Index.cpp`, `PrefixSearcher.hpp`, `query_processor.hpp`, `demo/`, `README.md`; original group contribution records in `../Project-Search-Engine/README.md`. |
| Farming | `../Grid-Based-Farming-Game/src/app/Game.cpp`, `src/core/Offline.h`, `src/main.cpp`, `web/shell.html`, `README.md`, `CREDITS.md` and `docs/PORTFOLIO.md`. |
| Merge sort | `../operating-systems/comp2002-os-mergesort/mergesort.c`, `mergesort.h` and the group assignment README. |

Savvit's original academic work remains collaborative. My independent extension
covers ownership-aware sharing, pin workflows, themes and keyboard accessibility.
Public/shared discovery requires sign-in. The local Savvit report describes
fixture-backed browser checks and database-substitute tests; its real-MySQL
attempt was blocked by database permissions. I do not turn those results into a
production deployment, real-MySQL success or full accessibility-conformance claim.

The search engine began with Duy Do, Zixi Khoo and myself in Problem Solving Software Development. My original work covered
searcher prototypes, prefix searching and query processing/ranking. Duy contributed
Boolean/phrase work and integration fixes; Zixi contributed the index, positions,
normalisation, snippets and CLI work. My later browser work builds on that base.
I preserve the existing video, poster and live-demo link.

The farming game is my independent raylib rebuild inspired by our collaborative
[GridFarmGame](https://github.com/BrandonHo419/GridFarmGame). The rebuild's credits
state that I copied no code, sprites or audio from the original. I retain the
original team's history rather than claiming its work as solely mine.

## Farming demo and persistence

I load the compiled game only when the visitor opens its player. I provide a
keyboard exit from the canvas: Tab reaches Close game; Shift+Tab returns to the
summary. Closing with the button restores focus to that summary. Closing the
player unloads it and stops its audio. Reopening starts a fresh farm. Refreshing
or closing a separate game tab also resets it: the browser build has no saves or
closed-tab earnings.

The desktop game saves locally and counts up to eight hours of offline progress.
Automated plots earn income; manual crops only mature. These desktop features do
not apply to the embedded browser demo. Keyboard and mouse are recommended.

I rebuild using the game's `docs/PORTFOLIO.md`. From that repository I can package
to this checkout with:

```sh
python tools/package_web.py ../BrandonHo419.github.io/demos/grid-based-farming-game --raylib build/desktop/_deps/raylib-src
```

I keep `grid_farm.html`, `grid_farm.js`, `grid_farm.wasm`, `CREDITS.md`,
`raylib-license.txt` and the complete `third-party/` notices together. I preserve
upstream licence-bearing files when refreshing the build.

## Savvit media and capture list

I captured `assets/savvit-collections-fixture.png` from the current local Savvit
UI with its existing `scripts/browser-ui.cjs --screenshots` runner on 12 November
2026. It is an unmodified 1440 x 900 screenshot of `home.html` with the runner's
two sample boards. The caption explicitly identifies fixture data and unverified
database persistence. The runner's eleven-page layout and keyboard/theme checks
passed at 1440, 768 and 320 pixels. I did not run real-MySQL integration tests.

I still need the following media to show the full workflow. Item 1 below is
partially covered by the fixture capture; I will refresh it after verification:

1. **Collections, 1440 x 900:** a signed-in account with several sample boards,
   visible board search/sort and Create Board, using light theme.
2. **Board and pin details, 1440 x 900:** original/reference labels, title,
   destination link, Save Reference and Move Original controls; a second view
   showing an edited pin and a threaded reply.
3. **Sharing/discovery, 1440 x 900:** owner visibility/viewer settings, then a
   second signed-in account's Shared with Me and Public Boards views. I show
   view-only access without suggesting anonymous discovery.
4. **Themes and narrow layout:** the same collection in dark theme at 1440 x 900,
   plus the board and an open pin dialog at 320 x 900. I include visible keyboard
   focus and the appearance settings for system theme, text size and motion.
5. **A 45-60 second walkthrough:** create a board, upload/edit a pin, save a
   reference, move an owned original, grant/revoke viewing access, then use Tab,
   Shift+Tab and Escape to show dialog focus and return. I provide captions or a
   written equivalent for any spoken explanation.

I use sample accounts and images I have permission to publish. If I capture the
existing fixture runner before real-MySQL verification, I label those images
"Fixture data; database persistence not verified." I do not present fixture
responses as a successful end-to-end database demonstration.

## Release review

I run the generator check, Python tests and `git diff --check`, then review the
page at 1440, 768 and 320 pixels. I check navigation, visible keyboard focus,
video controls, the game canvas and focus return, no-JavaScript content,
reduced-motion behaviour and local paths from the domain root.

I keep Python caches ignored and test source eligible for my manual commit.
I make no dependency, metadata automation or deployment-workflow additions.
I will commit manually and decide separately when to publish and change indexing.


### Verification on 12 November 2026

I completed the following checks against this local checkout:

- Generator output is current; all eight Python regression tests pass.
- Chrome at 1440, 768 and 320 pixels: no page overflow with the game closed or
  open. The search video is about 626 pixels wide beside its description on
  desktop and stacks below it at tablet/mobile widths. I fixed its 16:9 frame
  so switching from the poster to playback does not change the layout.
- I inspected screenshots of the introduction/navigation, search project,
  university section, Savvit capture and game. All main navigation links remain
  visible on mobile. The game retains its 360-pixel minimum inside a horizontally
  scrollable viewport at 320 pixels; keyboard and mouse remain recommended.
- The actual WebAssembly game loaded only after opening. I planted a crop and
  hired a worker, then verified Tab/Shift+Tab exit, close-button focus return,
  iframe removal and a fresh $1000 farm with no plots after reopening.
- Native video controls and playback work. The existing recording is about
  66.5 seconds long; its decoded audio track is silent. I inspected sample-query,
  local-file and validation scenes and retained the written project explanation.
- The skip link focuses the main content; category and main navigation targets
  exist. Reduced motion, system-font fallback and no-JavaScript content checks
  pass. I checked for duplicate IDs and missing local assets.
- All seven project evidence links returned HTTP 200. The live search demo loaded
  its engine and returned two matches for `fox`.
- All original media, compiled game files, credits and third-party notices match
  the starting checkout byte-for-byte. I added no dependencies or workflows.
- I prepared a static 1200 x 630 social graphic using my portfolio typography and
  palette, with root-domain Open Graph/Twitter image URLs and descriptive alt
  text. It is a designed title card, not an application screenshot. I left the
  robots directive unchanged and added no metadata automation.

I ran `git diff --check`. Since the portfolio started as untracked files, I also
checked edited text against a saved starting snapshot with
`git diff --no-index --check`; the normal command alone cannot inspect untracked
content. My test source is no longer ignored, and Python caches remain ignored.
I leave files unstaged for my manual commits.

### Remaining release decisions and limits

I found no blocking defect in the static portfolio checks above. Publication
still awaits my manual commit/push and hosting decision; social-image fetching
at the final URL can only be checked after publication. I deliberately retain
`noindex,nofollow` until I decide to change it.

Savvit's live deployment and real-MySQL verification remain outstanding, so I
publish it as a development project with a fixture-labelled screenshot. The
capture list above records the remaining demonstration media. Those limitations
do not prevent the static portfolio from linking to its source honestly.

I have not verified Firefox, Safari, screen-reader use, touch-only game play or
perceived game audio quality. The canvas game is not a fully accessible alternative
to a textual interface; the project description and source links remain available
without opening it. I do not claim full accessibility conformance or rerun the
source projects' native/database suites as part of this portfolio review.

