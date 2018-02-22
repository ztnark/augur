export const UPDATE_ORDER_BOOK = 'UPDATE_ORDER_BOOK'
export const CLEAR_ORDER_BOOK = 'CLEAR_ORDER_BOOK'
export const UPDATE_IS_FIRST_ORDER_BOOK_CHUNK_LOADED = 'UPDATE_IS_FIRST_ORDER_BOOK_CHUNK_LOADED'

export const updateOrderBook = (options) => {
  const {
    marketId,
    outcome,
    orderTypeLabel,
    orderBook
  } = options
  return ({
    type: UPDATE_ORDER_BOOK,
    data: {
      marketId, outcome, orderTypeLabel, orderBook
    }
  })
}
export const clearOrderBook = (marketId, outcome, orderTypeLabel) => (
  {
    type: CLEAR_ORDER_BOOK,
    data: { marketId, outcome, orderTypeLabel }
  }
)
export const updateIsFirstOrderBookChunkLoaded = (options) => {
  const {
    marketId,
    outcome,
    orderTypeLabel,
    isLoaded
  } = options
  return ({
    type: UPDATE_IS_FIRST_ORDER_BOOK_CHUNK_LOADED,
    data: {
      marketId, outcome, orderTypeLabel, isLoaded
    }
  })
}
