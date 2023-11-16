import {
  cacheExchange,
  createClient,
  dedupExchange,
  fetchExchange,
  ssrExchange,
} from 'urql'

const isServerSide = typeof window === 'undefined'
const ssrCache = ssrExchange({ isClient: !isServerSide })
const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT

const client = createClient({
  url: graphqlAPI,
  exchanges: [dedupExchange, cacheExchange, ssrCache, fetchExchange],
})

export { client, ssrCache }
