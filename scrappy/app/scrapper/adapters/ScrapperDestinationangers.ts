import * as cheerio from 'cheerio'
/**
 * ADAPTER SCRAPPER WEBSITE "https://www.destination-angers.com/"
 */
import { IScrapper } from '../index.js'

export class ScrapperDestinationangers implements IScrapper {
  public async getDatasFromUrl<T>(url: string): Promise<void> {
    console.log('...Chargement')

    const selector = await cheerio.fromURL(url)

    /**
     * Création des Data
     */

    selector('div').attr('id', 'search')

    console.log(selector('a').first())
  }
}
