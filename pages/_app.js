import React from 'react';
import '../styles/globals.css'
import { Hydrate, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { config } from 'lib/react-query-config';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'



function MyApp({ Component, pageProps }) {


  const [queryClient] = React.useState(() => new QueryClient(config))

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <Component {...pageProps} />
          <ReactQueryDevtools initialIsOpen={false}></ReactQueryDevtools>
      </Hydrate>
    </QueryClientProvider>
  )
}

  export default MyApp
