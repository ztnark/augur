import { updateOrderBook } from 'modules/bids-asks/actions/update-order-book'
import clearOrderBookOnFirstChunk from 'modules/bids-asks/actions/clear-order-book-on-first-chunk'

const insertOrderBookChunkToOrderBook = options => (dispatch) => {
  const {
    marketId,
    outcome,
    orderTypeLabel,
    orderBookChunk
  } = options
  dispatch(clearOrderBookOnFirstChunk(marketId, outcome, orderTypeLabel))
  dispatch(updateOrderBook({
    marketId,
    outcome,
    orderTypeLabel,
    orderBook: orderBookChunk
  }))
}

export default insertOrderBookChunkToOrderBook
