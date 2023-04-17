import { ApolloProvider } from "@apollo/client";
import client from "@/apollo-client";
import { Header } from "@/components/header";
export default function App({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Header />
      <Component {...pageProps} />
    </ApolloProvider>
  );
}
