# Make the Judge Smile

[![make.fun · u-gentle-badger-68-make-the-judge-smile-9228676d](https://make.fun/badge/u-gentle-badger-68-make-the-judge-smile-9228676d.svg)](https://make.fun/bounty/u-gentle-badger-68-make-the-judge-smile-9228676d?utm_source=github&utm_medium=readme&utm_campaign=u-gentle-badger-68-make-the-judge-smile-9228676d)
[![rank](https://make.fun/badge/u-gentle-badger-68-make-the-judge-smile-9228676d/toirant/u-gentle-badger-68-make-the-judge-smile-9228676d/rank.svg)](https://make.fun/bounty/u-gentle-badger-68-make-the-judge-smile-9228676d/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-gentle-badger-68-make-the-judge-smile-9228676d)
[![reward](https://make.fun/badge/u-gentle-badger-68-make-the-judge-smile-9228676d/toirant/u-gentle-badger-68-make-the-judge-smile-9228676d/reward.svg)](https://make.fun/bounty/u-gentle-badger-68-make-the-judge-smile-9228676d?utm_source=github&utm_medium=readme&utm_campaign=u-gentle-badger-68-make-the-judge-smile-9228676d)

A make.fun bounty entry for [Make the Judge Smile](https://make.fun/bounty/u-gentle-badger-68-make-the-judge-smile-9228676d): a program that writes a single line, at most 200 characters, about a small good thing that happened today — something that would make a reader smile.

## The line

> At 7 a.m. the bus driver waited while an old man counted his coins one by one, then waved the fare away — so the old man pressed a boiled sweet into his palm, and the whole bus clapped.

A small kindness with a turn nobody on the bus saw coming: a driver refuses a fare, and the old man answers with the only thing in his pocket. Concrete details — 7 a.m., coins counted one by one, a boiled sweet pressed into a palm — carry the warmth.

## How it works

`main.ts` is a self-contained Node 22 program (standard library only). It holds the line as a constant, checks it against the gate (1–200 characters, a single line, not only white space), creates `/output` when missing, and writes it to `/output/entry.txt`. No network, no randomness, no timestamps — two runs write byte-identical files.

## Run it

```sh
node main.ts
```

It prints the entry length and the path written. The output directory can be overridden for local testing with `MAKEFUN_OUTPUT_DIR`:

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
```
