import { styled, connect } from "frontity";
import Loading from "./loading";

// The 404 page component
const Page404 = ({ state }) => {
  const data = state.source.get(state.router.link);
  const isEnglish = !state.router.link.includes('/es/') ? true : false;

  const isDesacataEn = state.router.link === '/desacata/'
  console.log(isDesacataEn)


  const title = isEnglish ? "Oops! Something went wrong" : '¡Ups! Ocurrió un error';
  const title404 = isEnglish ? "Oops! Something went wrong" : '¡Ups! 404';

  const description404Title = isEnglish ? 'That page can’t be found' : 'No hemos podido encontrar la página que buscas.';
  const descriptionTitle = isEnglish ? ' Don&apos;t panic! Seems like you encountered an error. If this persists,let us know or try refreshing your browser.' : 'Parece que hubo un error al intentar cargar la página. Si persiste, comunicate a contact@collectivebean.com'

  const description404 = (
    <>
      {description404Title}{" "}
      <span role="img" aria-label="confused face">
        😕
      </span>
    </>
  );
  
  const description = (
    <>
      {descriptionTitle}
    </>
  );

  return (
    <Container>

      {
        !isDesacataEn 
        ?
          <>
            <Title>{data.is404 ? title404 : title}</Title>
            <Description>{data.is404 ? description404 : description}</Description>
          </>
        : 
        <Loading />
      }
    </Container>
  );
};

export default connect(Page404);

const Container = styled.div`
  width: 85%;
  margin: 48px auto;
  padding: 24px;
  text-align: center;
  min-height: 35vh;
`;

const Title = styled.h1`
  margin: 0;
  margin-top: 24px;
  margin-bottom: 8px;
  color: rgba(12, 17, 43);
  font-size: 2em;
  font-family: 'Abel', sans-serif;
`;

const Description = styled.div`
  line-height: 1.6em;
  color: rgba(12, 17, 43, 0.8);
  margin: 24px 0;
`;
