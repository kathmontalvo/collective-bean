import { styled, connect, useConnect } from "frontity";
import { useState } from "react"
import Link from "./link";
import arrowDown from "../images/icon-arrow-down.svg"
/**
 * The modal containing the mobile menu items.
 *
 * @param props - The props passed to the component from parent.
 * @returns A React component.
 */
const MenuModal = ({ ...props }) => {
  const { state } = useConnect();
  const [isToggle, setIsToggle] = useState(false);

  const isEnglish = !state.router.link.includes('/es/') ? true : false;
  const menu = isEnglish ? state.theme.menuUrl : state.theme.menuUrlEs;
  const items = state.source.get(`/menu/${menu}/`).items;

  const isThereLinks = items?.length > 0;

  const clickToggle = (param, id) => {
    const el = document.getElementById(`childMenuModal-${id}`);
    setIsToggle(!param)
    if (!isToggle) {
      el.style.display = "block"
    } else {
      el.style.display = "none"
    }
  }

  
  return (
    <div {...props}>
      {state.frontity.mode !== "amp" && <MenuOverlay />}
      <MenuContent as="nav">
        {isThereLinks &&
          Object.values(items).map((item, i) => {
          if (!item.child_items) {
            return  (
              <MenuLink
                as={Link}
                key={i}
                link={`/${isEnglish ? '' : 'es/'}${item.slug == 'home' ? '' : item.slug}`}
                aria-current={state.router.link === item.url ? "page" : undefined}
              >
                {item.title}
              </MenuLink>
            )
          } else {
            const childItems = item.child_items;

            return(
              <MenuLinkWithChildren key={`navItemWithChild-${item.ID}`} id={`navItemWithChild-${item.ID}`}>
                <MenuLink onClick={() => clickToggle(isToggle, item.ID)}>
                  {item.title}
                  <img src={arrowDown} width={14} style={{ marginLeft: '8px'}} />
                </MenuLink>
                <ChildMenu id={`childMenuModal-${item.ID}`}>
                  {childItems.map((childItem, i) => {
                    
                    const slug = childItem.object ===  'category' ? `category/${childItem.slug}` : childItem.slug

                    return (
                      <>
                        <MenuLink
                          as={Link}
                          key={i}
                          link={ childItem.slug ? `/${isEnglish ? '' : 'es/'}${slug}` : childItem.url }
                          aria-current={state.router.link === childItem.url ? "page" : undefined}
                        >
                          {childItem.title}
                        </MenuLink>
                      </>
                    )})}
                </ChildMenu>
                
              </MenuLinkWithChildren>
            )
          }

          })}
      </MenuContent>
    </div>
  );
};

const MenuOverlay = styled.div`
  background-color: #162216;
  width: 100vw;
  height: 100vh;
  overflow: hidden auto;
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
`;

const MenuContent = styled.div`
  font-family: 'Abel', sans-serif;
  z-index: 3;
  position: relative;
  position: absolute;
  width: 100vw;
  left: 0;
  padding: 48px 0;
  max-height: 80vh;
  overflow: scroll;
`;

const MenuLinkWithChildren = styled.div`

`


const MenuLink = styled.div`
  width: 100%;
  display: inline-block;
  outline: 0;
  font-size: 20px;
  text-align: center;
  padding: 1.2rem 0;

  &:hover,
  &:focus {
    background-color: rgba(0, 0, 0, 0.05);
  }
  /* styles for active link */
  &[aria-current="page"] {
    color: yellow;
    font-weight: bold;
  }
`;

const ChildMenu = styled.div`
  display: none;
  ${MenuLink} {
    background-color: rgba(0, 0, 0, 0.05);
  }
`

export default connect(MenuModal, { injectProps: false });
