import { connect, styled } from "frontity";
import Link from "./link";
import arrowDown from "../images/icon-arrow-down.svg"

/**
 * Navigation Component
 *
 * It renders the navigation links
 */
const Nav = ({ state }) => {

  console.log(state.router.link.includes('/es/'));
  const isEnglish = !state.router.link.includes('/es/') ? true : false;
  const menu = isEnglish ? state.theme.menuUrl : state.theme.menuUrlEs
  const items = state.source.get(`/menu/${menu}/`).items;

  const getOffset = (el) => {
    const rect = el.getBoundingClientRect();
    return {
      left: rect.left + window.scrollX,
      top: rect.top + window.scrollY
    };
  }

  const showChildren = (e, id) => {
    const parentEl = document.getElementById(`navItemWithChild-${id}`);   
    const el = document.getElementById(`childMenu-${id}`);

    el.style.display = "block"
    el.style.left = getOffset(parentEl).left + "px";
  }

  console.log('NAV', state.source);

  const hideChildren = (id) => {
    const el = document.getElementById(`childMenu-${id}`)
    el.style.display = "none"
  }

  return (
    <NavContainer>
      {items.map((item) => {
        // Check if the link matched the current page url

        console.log('itemNAV', item);

        const data = state.source.get(state.router.link);
        const isCurrentPage = data.route === item.url;

        if (!item.child_items) {
          return (
            <NavItem key={`navItem-${item.ID}`}>
              {/* If link url is the current page, add `aria-current` for a11y */}
              <Link link={`/${(isEnglish || item.slug == 'es') ? '' : 'es/'}${item.slug == 'home' ? '' : item.slug}`} aria-current={isCurrentPage ? "page" : undefined}>
                {item.title}
              </Link>
            </NavItem>
          );
        } else {
          const childItems = item.child_items;

          return(
            <NavItemWithChild key={`navItemWithChild-${item.ID}`} id={`navItemWithChild-${item.ID}`} onMouseLeave={() => hideChildren(item.ID)}>
              <NavItem onMouseOver={(e) => showChildren(e, item.ID)}>
                {/* If link url is the current page, add `aria-current` for a11y */}
                <div className="childTitle" aria-current={isCurrentPage ? "page" : undefined}>
                  {item.title}
                  <img src={arrowDown} width={12} style={{ marginLeft: '8px'}} />
                </div>
              </NavItem>
              <ChildMenu id={`childMenu-${item.ID}`} onMouseLeave={() => hideChildren(item.ID)}>
                {childItems.map((childItem) => {
                    const slug = childItem.object ===  'category' ? `category/${childItem.slug}` : childItem.slug

                  return (
                    <NavItem key={childItem.ID}>
                      <Link link={ childItem.slug ? `/${isEnglish ? '' : 'es/'}${slug}` : childItem.url }>
                        {childItem.title}
                      </Link>
                  </NavItem>
                  )
                })}
              </ChildMenu>
            </NavItemWithChild>
          )
        }

      })}
    </NavContainer>
  )
}

export default connect(Nav);

const NavContainer = styled.nav`
  display: none;
  box-sizing: border-box;
  margin: 0;
  font-family: 'Abel', sans-serif;
  text-transform: uppercase;
  align-items: center;
  
  @media screen and (min-width: 768px) {
    display: flex;
  }
`;

const NavItem = styled.div`
  padding: 6px 16px;
  margin: 0 auto;
  color: #fff;
  font-size: 0.9em;
  box-sizing: border-box;
  text-align: center;

  & > a, .childTitle {
    display: inline-block;
    line-height: 2em;
    border-bottom: 2px solid;
    border-bottom-color: transparent;
    /* Use for semantic approach to style the current link */
    &[aria-current="page"] {
      border-bottom-color: #fff;
    }
    &:hover {
      background: #B63EB6;
    }
  }
  .childTitle {
    cursor: default;
  }
  @media screen and (min-width: 1200px) {
    margin: 0 16px;
  }
`;

const NavItemWithChild = styled.div`
`;

const ChildMenu = styled.ul`
  left: 0;
  background-color: #162216;
  z-index: 1;
  display: none;
  margin: 0;
  padding: 12px;
  position: absolute;
  width: 130px;
  ${NavItem} {
    margin: 0;
    width: auto;

    a {
      width: 100%;
      padding: 2px;
    }
  }
`;