export interface IScrapper {
  getDatasFromUrl: <T>(url: string) => Promise<void>
}

export class Scrapper {
  private scrapper: IScrapper

  constructor(newScrapper: IScrapper) {
    this.scrapper = newScrapper
  }

  public async getDatasFromUrl<T>(url: string): Promise<void> {
    await this.scrapper.getDatasFromUrl<T>(url)
  }
}
