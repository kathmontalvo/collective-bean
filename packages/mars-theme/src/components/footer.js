import { connect } from "frontity";
import Link from "./link";
import { Column, Row, FooterSection } from "../styles/styles";
import CBlogo from "../images/cb_logo_white.png"
import fb from "../images/fb.svg"
import ig from "../images/ig.svg"

const Footer = ({ state }) => {
    const items = state.source.get(`/menu/${state.theme.menuUrl}/`).items;

    return (
        <FooterSection>
            <Column>
                <img className="logo" src={CBlogo} alt="Logotipo Collective Bean"/>
            </Column>
            <Column as={"ul"}>
                {items.map((item) => {
                    return (
                        <li key={item.ID}>
                            <Link link={item.url}>
                                {item.title}
                            </Link>
                        </li>
                    )
                })}

            </Column>
            <Column>
                <Row>
                    <Link link={"https://www.facebook.com/CollectiveBean"} target="_blank" rel="noopener noreferrer">
                        <img src={fb} />
                    </Link>
                    <Link link={"https://www.instagram.com/collectivebean.peru"} target="_blank" rel="noopener noreferrer">
                        <img src={ig} />
                    </Link>
                </Row>
            </Column>
        </FooterSection>
    )
} 

export default connect(Footer);
