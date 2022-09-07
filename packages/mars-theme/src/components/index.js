import { Global, css, connect, styled, Head } from "frontity";
import { useEffect } from 'react';
import Switch from "@frontity/components/switch";
import Header from "./header";
import List from "./list";
import Post from "./pages/post";
import Loading from "./loading";
import Title from "./title";
import PageError from "./page-error";
import Home from "./pages/home";
import Beans from "./pages/beans";
import Footer from "./footer";
import BeanPlace from "./pages/bean-place";
import ComingSoon from "./pages/coming-soon";
import ModelPage from "./pages/model";
import Desacata from "./pages/desacata";
import Resources from "./pages/resources";
import Contact from "./pages/contact";


/**
 * Theme is the root React component of our theme. The one we will export
 * in roots.
 *
 * @param props - The props injected by Frontity's {@link connect} HOC.
 *
 * @returns The top-level react component representing the theme.
 */
const Theme = ({ state, actions }) => {
  // Get information about the current URL.
  const data = state.source.get(state.router.link);

  useEffect(() => {

    const timer = setTimeout(() => {
      if(!data.isReady) {
        window.location.reload(false);
      }
    }, 1000);

    return () => {
      clearTimeout(timer)
    };
  }, [data]);

  const isEnglish = !state.router.link.includes('/es/') ? true : false;

  return (
    <>
      {/* Add some metatags to the <head> of the HTML. */}
      <Title />
      <Head>
        <meta name="description" content={state.frontity.description} />
        <meta name="robots" content="index,follow" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Abel&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Courier+Prime:wght@400;700&display=swap" rel="stylesheet" />
        <meta name="google" content="notranslate"></meta>
        <html lang="en" />

      </Head>

      {/* Add some global styles for the whole site, like body or a's. 
      Not classes here because we use CSS-in-JS. Only global HTML tags. */}
      <Global styles={globalStyles} />

      {/* Add the header of the site. */}
      {
        data.link !== "/es/desacata/" &&     
        
        <HeadContainer className={ isEnglish ? data.link.substring(1, data.link.length -1): data.link.substring(4, data.link.length -1) }>
          <Header />
        </HeadContainer>

      }

      {/* Add the main section. It renders a different component depending
      on the type of URL we are in. */}
      <Main>
        <Switch>
          <Loading when={data.isFetching} />
          {/* <ComingSoon when={data.isPostType}/> */}
          {/* <ComingSoon when={data.link == "/" || data.link == "/es/"}/> */}
          <Home when={data.isHome || data.link == '/es/inicio/'}/>
          <ModelPage when={data.link == "/our-model/" || data.link == "/es/nuestro-modelo/"} />
          <Resources when={data.link == "/resources/" || data.link == "/es/recursos/"} />
          <Desacata when={ data.link == "/es/desacata/"} />
          <Beans when={data.link == "/category/cacao-beans/" || data.link == "/category/coffee-beans/" || data.link == "/es/category/cacaos/" || data.link == "/es/category/cafes/"} data={data} />
          <Contact when={data.link == "/contact/" || data.link == "/es/contacto/"} />
          <BeanPlace when={data.isPostType} />
          <PageError when={data.isError} />
        </Switch>
      </Main>
      {
        data.link !== "/es/desacata/" && <Footer></Footer>
      }

    </>
  );
};

export default connect(Theme);

const globalStyles = css`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      "Droid Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  }
  a,
  a:visited {
    color: inherit;
    text-decoration: none;
  }
`;

const HeadContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background: rgb(18,52,15);
  background: linear-gradient(180deg, #162216 6.77%, rgba(22, 34, 22, 0) 100%);
  background-blend-mode: hard-light;
  &.contact, &.our-model, &.resources,
  &.contacto, &.nuestro-modelo, &.recursos {
    background: #162216;
  }
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: -1px;
`;
