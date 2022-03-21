---
layout: meta
title: 13 Hjelp
path: hjelp
---

## Endre innhold

Dersom du ønsker å bidra ved å endre eller legge til innhold, kan du gjøre dette direkte ved å redigere eller legge til markdown-filer her på [Github](https://github.com/blankoslo/about-blank/tree/master/src/content). Hver fil følger en mal, og ender opp som et eget menypunkt på siden.

Dersom du gjør endringer av innholdet som du tenker andre bør vurdere, lager du en "pull request" med endringene dine.

Det er uansett god skikk å skrive en commit-melding om hva endringen er for noe, og eventuelt hvorfor man har gjort endringen.

## Markdown

Dersom du ikke har brukt Markdown tidligere kan det være greit å ta en titt på [Markdown Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)

## Utvikling

### Kjør lokalt

Dersom du ønsker å gjøre noe utover det å endre innhold, kan det være kjekt å kjøre opp løsningen lokalt. Siden kjøres på [Gatsby.js](http://www.gatsbyjs.org/), og det er ikke spesielt vanskelig å få den til å kjøre, så lenge du har [Node](https://nodejs.org/) installert, og ```npm``` på kommandolinjen.

- Installer gatsby-cli: ```npm install -g gatsby-cli```
- Klon blankoslo/about-blank-ny: ```git clone https://github.com/blankoslo/about-blank```
- Installer avhengigheter: ```npm install```
- Kjør utviklingsserver: ```gatsby develop```

Siden bygges nå på nytt hver gang du gjør endringer, og kjører på localhost:8000

### Bygg og deploy

Ved oppdatering av master-branchen på Github kjøres ```gatsby build``` på [Travis](https://travis-ci.org/blankoslo/about-blank). Dersom bygget er vellykket deployes innholdet i `_site`-mappen til S3, og er live på about.blankoslo.no. Oppsettet av dette finner du i .travis.yml i roten av prosjektet.

## Stravabot

Hver mandag kl 8 sender Stravaboten en melding til #random i Slack med sist ukes treningstopplister. For å dukke opp i lista må du melde deg inn i tilhørende klubb på Strava:
- [Løping](https://www.strava.com/clubs/blank)
- [Sykling](https://www.strava.com/clubs/blank-pedal)
- [Ski](https://www.strava.com/clubs/blanke-ski)
- [Gåing](https://www.strava.com/clubs/blankwalking)

Hvis du likevel ikke dukker opp i lista til tross for at du er medlem av den respektive klubben er nok årsaken at du har en ikke-offentlig profil. Da må Stravabotens medhjelper, [Speed Freak](https://www.strava.com/athletes/37800142), følge deg på Strava. Si ifra til Lars Skjelbek, så fikser han det. Eventuelt logg inn på Strava med Speed Freak-kontoen og følg deg selv (brukernavn og passord ligger i Blanks 1password).

Kildekoden til Stravaboten [ligger på Github](https://github.com/blankoslo/blank-strava/).
