import Head from "next/head";
import SEO from "../components/SEO";
import Header from "../components/Header";
import Main from "../components/Main";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Services from "../components/Services";
import AboutUs from "../components/AboutUs";
export default function Home() {
  return (
    <>
      {/* <SEO /> */}
      <Header />
      <Banner />
      <Services />
      <AboutUs />
      {/* <Main />*/}
      <Footer />
      <div className="main-container"></div>
      {/* <link
        rel="stylesheet"
        id="owl-carousel-css"
        href="https://codeless.co/handel/transport/wp-content/themes/handel/css/owl.carousel.min.css?ver=4.8.15"
        type="text/css"
        media="all"
      />
      <link
        rel="stylesheet"
        id="ilightbox-css"
        href="https://codeless.co/handel/transport/wp-content/themes/handel/css/ilightbox/css/ilightbox.css?ver=4.8.15"
        type="text/css"
        media="all"
      />
      <script type="text/javascript"></script>
      <script
        type="text/javascript"
        src="https://codeless.co/handel/transport/wp-content/plugins/contact-form-7/includes/js/scripts.js?ver=4.8.1"
      ></script>
      <script
        type="text/javascript"
        src="https://codeless.co/handel/transport/wp-includes/js/jquery/jquery.form.min.js?ver=3.37.0"
      ></script>
      <script type="text/javascript"></script>
      <script
        type="text/javascript"
        src="//codeless.co/handel/transport/wp-content/plugins/woocommerce/assets/js/frontend/add-to-cart.min.js?ver=3.1.2"
      ></script>
      <script
        type="text/javascript"
        src="//codeless.co/handel/transport/wp-content/plugins/woocommerce/assets/js/jquery-blockui/jquery.blockUI.min.js?ver=2.70"
      ></script>
      <script
        type="text/javascript"
        src="//codeless.co/handel/transport/wp-content/plugins/woocommerce/assets/js/js-cookie/js.cookie.min.js?ver=2.1.4"
      ></script>
      <script type="text/javascript"></script>
      <script
        type="text/javascript"
        src="//codeless.co/handel/transport/wp-content/plugins/woocommerce/assets/js/frontend/woocommerce.min.js?ver=3.1.2"
      ></script>
      <script type="text/javascript"></script>
      <script
        type="text/javascript"
        src="//codeless.co/handel/transport/wp-content/plugins/woocommerce/assets/js/frontend/cart-fragments.min.js?ver=3.1.2"
      ></script>
      <script
        type="text/javascript"
        src="https://codeless.co/handel/transport/wp-includes/js/wp-embed.min.js?ver=4.8.15"
      ></script>
      <script type="text/javascript"></script>
      <script
        type="text/javascript"
        src="https://codeless.co/handel/transport/wp-content/plugins/sitepress-multilingual-cms/res/js/sitepress.js?ver=4.8.15"
      ></script>
      <script
        type="text/javascript"
        src="//maps.googleapis.com/maps/api/js?key=AIzaSyDNS4R2BxpPspB31mZPnGvelSPSXvggI4I&#038;ver=4.8.15#038;callback=initGMAP"
      ></script> */}
    </>
  );
}
