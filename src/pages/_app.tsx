import "../styles/global.css";
import { Provider } from "react-redux";
import { AppProps } from "next/app";

import { store } from "../store";
import Sidebar from "../components/Sidebar";
import Widgets from "../components/Widgets";
import { Config } from "../config";

function App({ Component, pageProps }: AppProps) {


  return (
    <Provider store={store}>
      <main className="flex min-h-screen mx-auto">
        <Sidebar />
        <Component {...pageProps} />
        <Widgets newsResults={[]} randomUsersResults={null} />
      </main>
    </Provider>
  );
}

export default App;

