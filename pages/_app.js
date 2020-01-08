import App from "next/app";
import Layout from "../components/_App/Layout.js";

class MyApp extends App {
  static async getInitialProps({ Component }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps()
    }

    return { pageProps }
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
    );
  }
}

export default MyApp;
