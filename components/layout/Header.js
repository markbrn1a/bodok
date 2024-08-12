import Link from "next/link";
import { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import links from "../../data/nav.json";

export default function Header({ headerCls, headerTop }) {
  const [scroll, setScroll] = useState(0);
  const [isToggled, setToggled] = useState(false);
  const navigationLinks = links.navigationLinks;
  const headerAction = links.headerAction;
  const socialLinks = links.socialLinks;
  const handleToggled = () => {
    setToggled(!isToggled);
    document.body.classList.toggle("mobile-menu-visible", isToggled);
  };

  useEffect(() => {
    const onScroll = () => {
      setScroll(window.scrollY > 100);
    };
    document.addEventListener("scroll", onScroll);
    return () => document.removeEventListener("scroll", onScroll);
  }, [scroll]);

  return (
    <>
      {headerTop && (
        <div className="header-top-wrap">
          <div className="container">
            <div className="row">
              <div className="col-xl-8 col-lg-9">
                <div className="header-top-left">
                  <ul className="list-wrap">
                    <li>Welcome to Roofx Construction</li>
                    <li>
                      <i className="fas fa-phone-alt" />
                      <Link href="tel:0123456789">+88 ( 5548 ) 6548</Link>
                    </li>
                    <li>
                      <i className="fas fa-envelope" />
                      <Link href="mailto:infoyour@gmail.com">
                        infoyour@gmail.com
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-4 col-lg-3">
                <div className="header-top-right">
                  <div className="header-lang">
                    <div className="dropdown">
                      <button
                        className="dropdown-toggle"
                        type="button"
                        id="dropdownMenuButton1"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <img src="assets/img/icon/united-states.jpg" alt="" />{" "}
                        English
                      </button>
                      <div
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenuButton1"
                      >
                        <Link className="dropdown-item" href="/">
                          <img src="assets/img/icon/russia.jpg" alt="" />
                          Russia
                        </Link>
                        <Link className="dropdown-item" href="/">
                          <img src="assets/img/icon/india.jpg" alt="" />
                          India
                        </Link>
                        <Link className="dropdown-item" href="/">
                          <img src="assets/img/icon/bangladesh.jpg" alt="" />
                          Bangla
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="header-social">
                    <ul className="list-wrap">
                      <li>
                        <Link href="#">
                          <i className="fab fa-facebook-f" />
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <i className="fab fa-linkedin-in" />
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <i className="fab fa-twitter" />
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <i className="fab fa-youtube" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <header>
        <div
          id="sticky-header"
          className={`menu-area ${scroll ? "sticky-menu" : ""} ${
            headerCls || ""
          }`}
        >
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="mobile-nav-toggler" onClick={handleToggled}>
                  <i className="fas fa-bars" />
                </div>
                <div className="menu-wrap">
                  <nav className="menu-nav">
                    <div className="logo different-logo">
                      <Link href="/">
                        <img src="/assets/img/logo/logo.png" alt="Logo" />
                      </Link>
                    </div>
                    <div className="logo d-none">
                      <Link href="/">
                        <img src="/assets/img/logo/logo_02.png" alt="Logo" />
                      </Link>
                    </div>
                    <div className="navbar-wrap main-menu d-none d-lg-flex">
                      <ul className="navigation">
                        <li className="active menu-item-has-children">
                          <Link href={navigationLinks.home.href}>
                            {navigationLinks.home.text}
                          </Link>
                        </li>
                        <li>
                          <Link href={navigationLinks.about.href}>
                            {navigationLinks.about.text}
                          </Link>
                        </li>
                        <li className="menu-item-has-children">
                          <Link href={navigationLinks.services.href}>
                            {navigationLinks.services.text}
                          </Link>
                          <ul className="sub-menu">
                            {navigationLinks.services.subLinks.map(
                              (subLink, index) => (
                                <li
                                  key={index}
                                  className="menu-item-has-children"
                                >
                                  <Link href={subLink.href || "#"}>
                                    {subLink.text}
                                  </Link>
                                  {subLink.subLinks && (
                                    <ul className="sub-menu">
                                      {subLink.subLinks.map(
                                        (nestedSubLink, nestedIndex) => (
                                          <li key={nestedIndex}>
                                            <Link href={nestedSubLink.href}>
                                              {nestedSubLink.text}
                                            </Link>
                                          </li>
                                        )
                                      )}
                                    </ul>
                                  )}
                                </li>
                              )
                            )}
                          </ul>
                        </li>
                        <li>
                          <Link href={navigationLinks.projects.href}>
                            {navigationLinks.projects.text}
                          </Link>
                        </li>
                        <li>
                          <Link href={navigationLinks.contact.href}>
                            {navigationLinks.contact.text}
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="header-action d-none d-md-block">
                      <ul className="list-wrap">
                        <li className="header-btn">
                          <Link
                            href={headerAction.contactButton.href}
                            className="btn"
                          >
                            {headerAction.contactButton.text}
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </nav>
                </div>
                <div className="mobile-menu">
                  <nav className="menu-box">
                    <div className="close-btn" onClick={handleToggled}>
                      <i className="fas fa-times" />
                    </div>
                    <div className="nav-logo">
                      <Link
                        href={headerAction.contactButton.href}
                        className="btn"
                      >
                        {headerAction.contactButton.text}
                      </Link>
                    </div>
                    <div className="menu-outer">
                      <Sidebar handleToggled={handleToggled} />
                    </div>
                    <div className="social-links">
                      <ul className="clearfix list-wrap">
                        {socialLinks.map((link, index) => (
                          <li key={index}>
                            <Link href={link.href}>
                              <i className={link.iconClass} />
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </nav>
                </div>
                <div className="menu-backdrop" />
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
