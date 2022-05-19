import { connect, styled } from "frontity";
import Link from "./link";
import Nav from "./nav";
import MobileMenu from "./menu";
import cbLogoImg from "../images/cb_isotipo_white.png"

const Header = ({ state }) => {

  const isEnglish = !state.router.link.includes('/es/') ? true : false;

  return (
    <>
      <Container>
        <StyledLink link={isEnglish ? '/' : '/es/inicio' }>
          <Title src={cbLogoImg} alt="Isotipo Collective Bean" />
        </StyledLink>
        <MobileMenu />
        <Nav />
      </Container>
    </>
  );
};

// Connect the Header component to get access to the `state` in it's `props`
export default connect(Header);

const Container = styled.div`
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
  padding: 16px 36px;
  color: #fff;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media screen and (min-width: 768px) {
    padding: 12px 80px;
  }
  @media screen and (min-width: 1200px) {
    padding: 12px 120px;
  }
  @media screen and (min-width: 1600px) {
    padding: 16px 300px;
  }

`;

const Title = styled.img`
  margin: 0;
  width: 45px;
  @media screen and (min-width: 768px) {
    width: 55px;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;
