import { Global, css, connect, styled, Head } from "frontity";
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


/**
 * Theme is the root React component of our theme. The one we will export
 * in roots.
 *
 * @param props - The props injected by Frontity's {@link connect} HOC.
 *
 * @returns The top-level react component representing the theme.
 */
const Theme = ({ state }) => {
  // Get information about the current URL.
  const data = state.source.get(state.router.link);
  console.log('data--', data);
  console.log(data.link === '/desacata/')
  return (
    <>
      {/* Add some metatags to the <head> of the HTML. */}
      <Title />
      <Head>
        <meta name="description" content={state.frontity.description} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Abel&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Courier+Prime:wght@400;700&display=swap" rel="stylesheet" />
        <html lang="en" />

      </Head>

      {/* Add some global styles for the whole site, like body or a's. 
      Not classes here because we use CSS-in-JS. Only global HTML tags. */}
      <Global styles={globalStyles} />

      {/* Add the header of the site. */}
      {
        (data.link !== '/' && data.link !== '/desacata/') &&     
        
        <HeadContainer>
          <Header />
        </HeadContainer>

      }

      {/* Add the main section. It renders a different component depending
      on the type of URL we are in. */}
      <Main>
        <Switch>
          <Loading when={data.isFetching} />
          <ComingSoon when={data.link == "/"}/>
          <Home when={data.id == 150} data={data} />
          <ModelPage when={data.link == "/our-model/"} />
          <Resources when={data.link == "/resources/"} />
          <Desacata when={data.link == "/desacata/"} />
          <Beans when={data.link == "/coffee-beans/" || data.link == "/cocoa-beans/"} data={data} />
          <BeanPlace when={data.isPostType} />
          <PageError when={data.isError} />
        </Switch>
      </Main>
      {
        (data.link !== '/' && data.link !== '/desacata/') && <Footer></Footer>
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
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: -1px;
`;
