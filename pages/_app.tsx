import { Seo } from "components";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 30_000,
    },
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Seo>
        <Component {...pageProps} />;
      </Seo>
    </QueryClientProvider>
  );
}

export default MyApp;
