import { connect, styled } from "frontity";
import Link from "./link";

/**
 * Navigation Component
 *
 * It renders the navigation links
 */
const Nav = ({ state }) => {
  const items = state.source.get(`/menu/${state.theme.menuUrl}/`).items;

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

  const hideChildren = (id) => {
    const el = document.getElementById(`childMenu-${id}`)
    el.style.display = "none"
  }

  return (
    <NavContainer>
      {items.map((item) => {
        // Check if the link matched the current page url

        const data = state.source.get(state.router.link);
        const isCurrentPage = data.route === item.url;

        if (!item.child_items) {
          return (
            <NavItem key={`navItem-${item.ID}`}>
              {/* If link url is the current page, add `aria-current` for a11y */}
              <Link link={item.url} aria-current={isCurrentPage ? "page" : undefined}>
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
                <div className="childTitle" link={item.url} aria-current={isCurrentPage ? "page" : undefined}>
                  {item.title}
                </div>
              </NavItem>
              <ChildMenu id={`childMenu-${item.ID}`} onMouseLeave={() => hideChildren(item.ID)}>
                {childItems.map((childItem) => {
                  return (
                    <NavItem key={childItem.ID}>
                      <Link link={childItem.url}>
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
  display: flex;
  box-sizing: border-box;
  margin: 0;
  font-family: 'Abel', sans-serif;
  text-transform: uppercase;

  @media screen and (max-width: 767px) {
    display: none;
  }
`;

const NavItem = styled.div`
  padding: 6px 0;
  margin: 0 16px;
  color: #fff;
  font-size: 0.9em;
  box-sizing: border-box;
  text-align: center;
  width: 110px; 

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
`;

const NavItemWithChild = styled.div`
  width: 140px; 
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