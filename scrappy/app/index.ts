import { select } from '@inquirer/prompts'
import { ScrapperDestinationangers } from './scrapper/adapters/ScrapperDestinationangers.js'
import { Scrapper } from './scrapper/index.js'

const choice: string = await select({
  choices: ['Riviere Ouest', 'test2'],
  message: 'Choisir un site à scrapper',
})

switch (choice) {
  case 'Riviere Ouest':
    const scrapper = new Scrapper(new ScrapperDestinationangers())
    await scrapper.getDatasFromUrl(
      'https://www.google.com/search?q=marche+artisanal+angers&sca_esv=c041460d2f1f94b3&biw=1512&bih=823&tbm=nws&sxsrf=AE3TifM-N9twwDyo8ChGxDiUbcbRCcvUNw%3A1762436808080&ei=yKYMae3aBLWGkdUP-dnleA&oq=marche+artisanal+Angers+&gs_lp=Egxnd3Mtd2l6LW5ld3MiGG1hcmNoZSBhcnRpc2FuYWwgQW5nZXJzICoCCAAyBBAAGB4yBRAAGO8FMgUQABjvBTIFEAAY7wVIyUJQ4ApY8TVwAHgAkAEAmAFIoAGMBaoBAjExuAEByAEA-AEBmAILoAKuBcICBhAAGBYYHsICCBAAGIAEGKIEwgIGEAAYBxgewgIIEAAYBxgKGB7CAggQABgHGAgYHsICChAAGAcYCBgKGB7CAggQABiiBBiJBZgDAIgGAZIHAjExoAeJMbIHAjExuAeuBcIHBjAuMTAuMcgHFQ&sclient=gws-wiz-news',
    )
    break
}

if (choice === 'Riviere Ouest') {
}
