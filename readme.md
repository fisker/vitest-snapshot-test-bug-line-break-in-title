Vitest fails when CR used in title

Step to reproduce

1. Clone this repo
2. Run

```sh
yarn
yarn vitest
```

You'll get

```
yarn test
yarn run v1.22.19
$ vitest

 RUN  v3.2.3 <CWD>

 ✓ cr.test.js (2 tests) 12ms
 6ms CR
 1msCRLF

  Snapshots  2 written
             2 obsolete
             ↳ ./cr.test.js
               · CR
 1
               · CRLF
 1

 Test Files  1 passed (1)
      Tests  2 passed (2)
   Start at  04:10:10
   Duration  1.32s (transform 76ms, setup 0ms, collect 57ms, tests 12ms, environment 1ms, prepare 365ms)

Done in 2.82s.
```