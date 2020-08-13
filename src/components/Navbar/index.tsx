import React, { useState } from "react";
import { push } from "gatsby";
import { useBreakpoint } from "gatsby-plugin-breakpoints";
import { Container, NavItemContainer } from "./styles";
import Logo from "../Logo";
import { FiUser, FiMail } from "react-icons/fi";
import { RiBookReadLine, RiSlideshowLine } from "react-icons/ri";
import { AiOutlineHome } from "react-icons/ai";
import { TiThMenu } from "react-icons/ti";
import { IconType } from "react-icons/lib/cjs";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { useLocation } from "@reach/router";

type NavItemType = {
  name: string;
  icon: IconType;
  to: string;
};

const navItems: NavItemType[] = [
  {
    name: "Home",
    icon: AiOutlineHome,
    to: "/",
  },
  {
    name: "About",
    icon: FiUser,
    to: "/about",
  },
  {
    name: "Works",
    icon: RiSlideshowLine,
    to: "/my-works",
  },
  {
    name: "Blog",
    icon: RiBookReadLine,
    to: "/blog",
  },
  {
    name: "Contact",
    icon: FiMail,
    to: "/contact",
  },
];

type Props = {
  item: NavItemType;
};

const NavItem = ({ item }: Props) => {
  const { pathname } = useLocation();
  const Icon: IconType = item.icon;
  const isActiveRoute = pathname === item.to;
  return (
    <NavItemContainer
      isActive={isActiveRoute}
      name={item.name}
      onClick={() => push(item.to)}
    >
      <Icon className="icon" />
    </NavItemContainer>
  );
};

const Navbar = () => {
  const breakpoints = useBreakpoint();
  const [isMenuOpen, toggleMenu] = useState(false);

  return (
    <Container isMobile={breakpoints.sm}>
      <Logo />
      {(isMenuOpen || !breakpoints.sm) && (
        <div className="nav-items">
          {navItems.map(item => {
            return <NavItem item={item} />;
          })}
        </div>
      )}
      {breakpoints.sm && (
        <TiThMenu
          onClick={() => toggleMenu(!isMenuOpen)}
          style={{ fontSize: 28, color: "white" }}
          className="icon"
        />
      )}
      {!breakpoints.sm && (
        <div className="navbar-footer">
          <div className="footer-top">
            <p className="footer-text">Follow Me</p>
            <div className="divider" />
          </div>
          <a
            rel="noopener noreferrer"
            href={"https://twitter.com/sisay_simon"}
            target="_blank"
          >
            <FaTwitter className="social-icon" />
          </a>
          <a
            rel="noopener noreferrer"
            href={"https://github.com/simonsisay"}
            target="_blank"
          >
            <FaGithub className="social-icon" />
          </a>
          <a
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/simon-sisay-446181187/"
            target="_blank"
          >
            <FaLinkedin className="social-icon" />
          </a>
        </div>
      )}
    </Container>
  );
};

export default Navbar;
