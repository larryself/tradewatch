export type BaseQuote = {
  id: number
  last: string
  lowestAsk: string
  highestBid: string
  percentChange: string
  baseVolume: string
  quoteVolume: string
  isFrozen: string
  postOnly: string
  high24hr: string
  low24hr: string
}

export type QuoteData = {
  [key: string]: BaseQuote
}
export type Quote = { name: string } & BaseQuote
