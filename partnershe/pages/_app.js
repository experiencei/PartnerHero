import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";
import { RecoilRoot } from "recoil";
import { PersistGate } from "redux-persist/integration/react";
import {store , persistor} from "../redux/store"
import {Provider} from "react-redux";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
     <Provider store={store}>
     <PersistGate persistor={persistor}>
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
      </PersistGate>
      </Provider>
    </SessionProvider>
  );
}

export default MyApp;
