import "../styles/globals.scss";
import "../styles/tailwind.scss";

import { Provider } from "react-redux";
import type { AppProps } from "next/app";

import store from "../Redux/Store";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
