import axios from 'axios'
import { makeAutoObservable, runInAction } from 'mobx'

import { Quote, QuoteData } from 'src/types'

export class Quotes {
  quotes: Quote[] = []
  isFistLoad = true
  isLoading = false
  isError = false
  constructor() {
    makeAutoObservable(this)
  }
  private formattedQuotes(data: QuoteData) {
    return Object.entries(data).reduce((acc, [name, value]) => {
      acc.push({ name, ...value })

      return acc
    }, [] as Quote[])
  }

  getQuotes = async () => {
    try {
      if (this.isFistLoad) {
        this.isLoading = true
      }
      const { data } = await axios.get<QuoteData>(
        'https://poloniex.com/public?command=returnTicker',
      )
      runInAction(() => {
        this.quotes = this.formattedQuotes(data)
        this.isError = false
      })
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error('@getQuotes - Error:', e)
      runInAction(() => {
        this.isError = true
      })
    } finally {
      runInAction(() => {
        this.isLoading = false
        this.isFistLoad = false
      })
    }
  }
}
