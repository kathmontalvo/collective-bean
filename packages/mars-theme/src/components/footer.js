import { connect } from "frontity";
import { useState } from "react"
import { Column, Row, FooterSection } from "../styles/styles";

import Link from "./link";
import CBlogo from "../images/cb_logo_white.png"
import fb from "../images/fb.svg"
import ig from "../images/ig.svg"
import arrowDown from "../images/icon-arrow-down.svg"

const Footer = ({ state }) => {
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

    return (
        <FooterSection>
            <Column>
                <img className="logo" src={CBlogo} alt="Logotipo Collective Bean"/>
            </Column>
            <Column as={"ul"}>
                {items.map((item, i) => {
                  if (!item.child_items) {
                      return (
                          <li key={i}>
                              <Link link={item.url}>
                                  {item.title}
                              </Link>
                          </li>
                      )
                  } else {
                      const childItems = item.child_items;
                      return(
                          <>
                            <li key={item.ID}>
                                <div onClick={() => clickToggle(isToggle, item.ID)}>
                                    {item.title}
                                    <img src={arrowDown} width={12} style={{ marginLeft: '8px'}} />
                                </div>
                            </li>
                            <div id={`childMenuFooter-${item.ID}`} style={{display: 'none'}}>
                                {childItems.map((childItem, i) => 
                                    <li key={i}>
                                        <Link link={childItem.url}>
                                            {childItem.title}
                                        </Link>
                                    </li>
                                    )}
                            </div>
                          </>
                      )
                  }

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
