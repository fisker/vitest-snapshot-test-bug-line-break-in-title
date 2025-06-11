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

Turns out jest also can't pass the test.

```
>yarn jest
yarn run v1.22.19
$ node --experimental-vm-modules node_modules/jest/bin/jest.js jest.test.js
(node:18968) ExperimentalWarning: VM Modules is an experimental feature and might change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
 PASS  ./jest.test.js
 (4 ms)
  √ CRLF
 (1 ms)

 › 2 snapshots written.
 › 2 snapshots obsolete.
   • CR
 1
   • CRLF
 1
Snapshot Summary
 › 2 snapshots written from 1 test suite.
 › 2 snapshots obsolete from 1 test suite. To remove them all, run `yarn run jest -u`.
   ↳ ./jest.test.js
       • CR
 1
       • CRLF
 1

Test Suites: 1 passed, 1 total
Tests:       2 passed, 2 total
Snapshots:   2 obsolete, 2 written, 2 total
Time:        0.371 s, estimated 1 s
Ran all test suites matching jest.test.js.
error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```
