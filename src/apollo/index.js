import {
  useQuery as useApolloQuery,
  useMutation as useApolloMutation,
  useLazyQuery as useApolloLazyQuery,
} from "@apollo/react-hooks"

import { client } from "./client"

// ApolloClient is not currently respecting defaultOptions
// so this is a workaround for now
const defaultOptions = {
  fetchPolicy: "cache-and-network",
  // pollInterval: "500",
}

export const useQuery = (query, options) => {
  const combinedOptions = { ...defaultOptions, ...options }

  return useApolloQuery(query, combinedOptions)
}

export const useLazyQuery = (query, options) => {
  const combinedOptions = { ...defaultOptions, ...options }

  return useApolloLazyQuery(query, combinedOptions)
}

export const useMutation = (query, options) => {
  const combinedOptions = { ...defaultOptions, ...options }

  return useApolloMutation(query, combinedOptions)
}

export { client }