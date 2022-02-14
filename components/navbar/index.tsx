import Link from "next/link";
import { useTheme } from "../../context/themeProvider";
import { Container, LogoContainer } from "./styles";
import { BsFillSunFill, BsMoonFill, BsDoorClosed } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import useBreakpoint from "use-breakpoint";
import { useState } from "react";

type Props = {
  onClick?: () => void;
};

const Logo = ({ onClick }: Props) => {
  return (
    <Link href="/">
      <LogoContainer onClick={onClick}>
        <h2>{"<Si/>"}</h2>
      </LogoContainer>
    </Link>
  );
};

const Switch = () => {
  const { theme, switchTheme } = useTheme();
  if (theme === "dark") {
    return (
      <BsFillSunFill
        onClick={switchTheme}
        className="theme-switch-icon"
        size={24}
      />
    );
  }
  return (
    <BsMoonFill onClick={switchTheme} className="theme-switch-icon" size={24} />
  );
};

export const BREAKPOINTS = { mobile: 0, tablet: 768, desktop: 1280 };

const Navbar = () => {
  const { breakpoint } = useBreakpoint(BREAKPOINTS, "tablet");
  const [showMobileNav, toggleMobileNav] = useState(false);

  const isMobile = breakpoint === "mobile";

  const renderLinks = () => {
    return (
      <>
        <Link href="/#about">
          <a className="link" onClick={() => toggleMobileNav(false)}>
            About
          </a>
        </Link>
        <Link href="/#portfolio">
          <a className="link" onClick={() => toggleMobileNav(false)}>
            Portfolio
          </a>
        </Link>
        <Link href="/#testimony">
          <a className="link" onClick={() => toggleMobileNav(false)}>
            Testimonies
          </a>
        </Link>
        <Link href="/blog">
          <a className="link" onClick={() => toggleMobileNav(false)}>
            Blog
          </a>
        </Link>
        <Link href="/say-hello">
          <a className="link" onClick={() => toggleMobileNav(false)}>
            Contact
          </a>
        </Link>
      </>
    );
  };

  return (
    <Container>
      {isMobile && !showMobileNav && (
        <div className="nav-header">
          <Logo />
          <div>
            <span className="link">
              <Switch />
            </span>
            <GiHamburgerMenu
              onClick={() => toggleMobileNav(true)}
              className="burger-menu"
            />
          </div>
        </div>
      )}
      {isMobile && showMobileNav && (
        <div className="mobile-nav-container">
          <div className="top">
            <Logo onClick={() => toggleMobileNav(false)} />
            <div>
              <Switch />
              <AiOutlineClose
                onClick={() => toggleMobileNav(false)}
                className="close-icon"
              />
            </div>
          </div>
          <div className="mobile-nav-links">{renderLinks()}</div>
        </div>
      )}
      {!isMobile && (
        <div className="nav-items">
          <Logo />
          <div className="nav-links">
            <span className="link">
              <Switch />
            </span>
            {renderLinks()}
          </div>
        </div>
      )}
    </Container>
  );
};

export default Navbar;
