import { Quotes } from './quotes'

class Store {
  quotes: Quotes

  constructor() {
    this.quotes = new Quotes()
  }
}
export const store = new Store()
