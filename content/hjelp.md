---
layout: meta
title: Hjelp
permalink: /hjelp/
---

## Om about:blank

Tanken er at denne siden til enhver tid skal reflektere rutiner og ordninger vi har i Blank. Vi har ofte diskusjoner som ender med at vi blir enig om en praksis, og i de tilfellene er det fint å ha et sted å dokumentere. Alle som jobber i Blank er velkommen til å foreslå endringer.

## Endre innhold

Dersom du ønsker å bidra ved å endre eller legge til innhold, kan du gjøre dette direkte ved å redigere eller legge til markdown-filer her på [Github](https://github.com/blankoslo/about-blank/tree/master/content).

Hver fil følger en mal, og ender opp som et eget menypunkt på siden.

Dersom du gjør endringer av innholdet som du tenker andre bør vurdere, lager du en "pull request" med endringene dine.

## Markdown

Dersom du ikke har brukt Markdown tidligere kan det være greit å ta en titt på [Markdown Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)

## Utvikling

### Kjør lokalt

Dersom du ønsker å gjøre noe utover det å endre innhold, kan det være kjekt å kjøre opp løsningen lokalt. Siden kjøres på [Jekyll](http://jekyllrb.com/), og det er ikke spesielt vanskelig å få den til å kjøre, så lenge du har [Ruby](https://www.ruby-lang.org/) installert, og ```gem``` ([RubyGems](https://rubygems.org/)) på kommandolinjen.

- Installer jekyll og bundler: ```gem install jekyll bundler```
- Klon blankoslo/about-blank: ```git clone https://github.com/blankoslo/about-blank```
- Installer avhengigheter: ```bundle install```
- Kjør utviklingsserver: ```jekyll serve```

Siden bygges nå på nytt hver gang du gjør endringer, og kjører på localhost:4000

### Bygg og deploy

Ved oppdatering av master-branchen på Github kjøres ```jekyll build``` på [Travis](https://travis-ci.org/blankoslo/about-blank). Dersom bygget er vellykket deployes innholdet i "_site"-mappen til S3, og er live på about.blankoslo.no. Oppsettet av dette finner du i .travis.yml i roten av prosjektet.
