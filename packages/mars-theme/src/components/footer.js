import { connect } from "frontity";
import { useState } from "react"
import { Column, Row, FooterSection } from "../styles/styles";

import Link from "./link";
import CBlogo from "../images/cb_logo_white.png"
import fb from "../images/fb.svg"
import ig from "../images/ig.svg"
import arrowDown from "../images/icon-arrow-down.svg"

const Footer = ({ state }) => {
    console.log(state);
    const items = state.source.get(`/menu/${state.theme.menuUrl}/`).items;
    const [isToggle, setIsToggle] = useState(false)

    const clickToggle = (param, id) => {
        const el = document.getElementById(`childMenuFooter-${id}`);
        setIsToggle(!param)

        if (!isToggle) {
            el.style.display = "block"
        } else {
            el.style.display = "none"
        }
    }

    console.log('lang', state);

    return (
        <FooterSection>
            <Column key={1}>
                <Link link={(state.theme.lang === 'en') ? '' : '/es/'}>
                    <img className="logo" src={CBlogo} alt="Logotipo Collective Bean" />
                </Link>
            </Column>
            <Column as={"ul"} key={2}>
                {items.map((item, i) => {
                    if (!item.child_items) {
                        return (
                            <li key={i}>
                                <Link link={`/${(state.theme.lang === 'en' || item.slug == 'es') ? '' : 'es/'}${item.slug == 'home' ? '' : item.slug}`}>
                                    {item.title}
                                </Link>
                            </li>
                        )
                    } else {
                        const childItems = item.child_items;
                        return (
                            <>
                                <li key={item.ID}>
                                    <div onClick={() => clickToggle(isToggle, item.ID)}>
                                        {item.title}
                                        <img src={arrowDown} width={12} style={{ marginLeft: '8px' }} />
                                    </div>
                                </li>
                                <div key={2} id={`childMenuFooter-${item.ID}`} style={{ display: 'none' }}>
                                    {childItems.map((childItem, i) =>{
                                        
                                        const slug = childItem.slug ===  'coffee-bean' || childItem.slug === 'cocoa-bean' ? `${childItem.slug}s` : childItem.slug

                                        return (
                                            <li key={i}>
                                                <Link link={ childItem.slug ? `/${state.theme.lang === 'en' ? '' : 'es/'}${slug}` : childItem.url }>
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
            <Column key={3}>
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
