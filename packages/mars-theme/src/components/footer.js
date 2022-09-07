import { connect } from "frontity";
import { useState } from "react"
import { Column, Row, FooterSection } from "../styles/styles";

import Link from "./link";
import CBlogo from "../images/cb_logo_white.png"
import fb from "../images/fb.svg"
import ig from "../images/ig.svg"
import arrowDown from "../images/icon-arrow-down.svg"
import arrowUp from "../images/icon-arrow-up.svg"

const Footer = ({ state }) => {
    const isEnglish = !state.router.link.includes('/es/') ? true : false;
    const menu = isEnglish ? state.theme.menuUrl : state.theme.menuUrlEs;
    const items = state.source.get(`/menu/${menu}/`).items;

    const [isToggle, setIsToggle] = useState(false)

    const clickToggle = (param, id) => {
        const el = document.getElementById(`childMenuFooter-${id}`);
        const imgArrow = document.getElementById(`imgArrowFooter-${id}`);

        setIsToggle(!param)

        if (!isToggle) {
            el.style.display = "block";
            imgArrow.src = arrowUp;

        } else {
            el.style.display = "none";
            imgArrow.src = arrowDown;
        }
    }

    return (
        <FooterSection>
            <Column key={1}>
                <Link link={isEnglish ? '' : '/es/inicio'}>
                    <img className="logo" src={CBlogo} alt="Logotipo Collective Bean" />
                </Link>
            </Column>
            <Column as={"ul"} key={2}>
                {items.map((item, i) => {
                    if (!item.child_items) {
                        return (
                            <li key={i}>
                                <Link link={`/${isEnglish ? '' : 'es/'}${item.slug == 'home' ? '' : item.slug}`}>
                                    {item.title}
                                </Link>
                            </li>
                        )
                    } else {
                        const childItems = item.child_items;
                        return (
                            <>
                                <li key={item.ID} className="menu-children">
                                    <div onClick={() => clickToggle(isToggle, item.ID)}>
                                        {item.title}
                                        <img src={arrowDown} id={`imgArrowFooter-${item.ID}`} width={12} style={{ marginLeft: '8px' }} />
                                    </div>
                                </li>
                                <div key={2} id={`childMenuFooter-${item.ID}`} style={{ display: 'none' }}>
                                    {childItems.map((childItem, i) =>{
                                        
                                        const slug = childItem.object ===  'category' ? `category/${childItem.slug}` : childItem.slug

                                        return (
                                            <li key={i} className="menu-child">
                                                <Link link={ childItem.slug ? `/${isEnglish ? '' : 'es/'}${slug}` : childItem.url }>
                                                    {childItem.title}
                                                </Link>
                                            </li>
                                        )}
                                    )}
                                </div>
                            </>
                        )
                    }

                })}

            </Column>
            <Column key={3} className="social">
                <Row>
                    <Link link={"https://www.facebook.com/CollectiveBean"} target="_blank" rel="noopener noreferrer">
                        <img src={fb} />
                    </Link>
                    <Link link={"https://www.instagram.com/collectivebean.peru"} target="_blank" rel="noopener noreferrer">
                        <img src={ig} />
                    </Link>
                </Row>
            </Column >
        </FooterSection>
    )
}

export default connect(Footer);
