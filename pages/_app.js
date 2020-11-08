// import "../styles/globals.css";
// import "../styles/style.css";
import "../styles/main.scss";
import "swiper/swiper.scss";
import "swiper/components/effect-fade/effect-fade.scss";
import "swiper/components/navigation/navigation.scss";
import React from "react";
// import { Provider } from "react-redux";
// import { useStore } from "../redux/store";
// import { PersistGate } from "redux-persist/integration/react";
// import { persistStore } from "redux-persist";
import PropTypes from "prop-types";
import StickyHeader from "../components/StickyHeader";
// import CssBaseline from "@material-ui/core/CssBaseline";
// import SEO from "../components/SEO";
// import { appWithTranslation } from "../i18n";
// import NProgress from "nprogress";
// import Router from "next/router";

function MyApp({ Component, pageProps }) {
  // const store = useStore(pageProps.initialReduxState);
  // const persistor = persistStore(store);

  return (
    <>
      {/* <StickyHeader /> */}
      <Component {...pageProps} />
    </>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};

export default MyApp;
