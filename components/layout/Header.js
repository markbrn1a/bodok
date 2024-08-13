"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import links from "../../data/nav.json";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Header({ headerCls, headerTop }) {
  const [scroll, setScroll] = useState(0);
  const [isToggled, setToggled] = useState(false);
  const navigationLinks = links.navigationLinks;
  const headerAction = links.headerAction;
  const socialLinks = links.socialLinks;
  const pathName = usePathname();

  const handleToggled = () => {
    setToggled((prevState) => {
      const newToggledState = !prevState;
      document.body.classList.toggle("mobile-menu-visible", newToggledState);
      return newToggledState;
    });
  };

  useEffect(() => {
    const onScroll = () => {
      setScroll(window.scrollY > 100);
    };
    document.addEventListener("scroll", onScroll);
    return () => document.removeEventListener("scroll", onScroll);
  }, []);

  const flattenLinks = (obj) => {
    let flatLinks = [];
    const traverse = (node) => {
      if (node.href) {
        flatLinks.push(node);
      }
      if (node.subLinks) {
        node.subLinks.forEach(traverse);
      }
    };
    Object.values(obj).forEach(traverse);
    return flatLinks;
  };

  const flatLinks = flattenLinks(navigationLinks);

  const breadcrumbTitle = flatLinks.find((link) => link.href === pathName) || {
    href: "/404",
    text: "404",
  };

  const isRoot = breadcrumbTitle?.href === "/";
  headerCls = isRoot ? "transparent-header" : "";

  const renderMenuItems = (linksObj) => {
    return Object.values(linksObj).map((link, index) => {
      const isActive = link.href === pathName;
      const hasSubmenu = link.subLinks && link.subLinks.length > 0;
      if (link.hidden) return null;
      return (
        <li
          key={`${link.href}-${index}`}
          className={`${isActive ? "active" : ""} ${
            hasSubmenu ? "menu-item-has-children" : ""
          }`}
        >
          <Link href={link.href || "#"}>{link.text}</Link>
          {hasSubmenu && (
            <ul className="sub-menu">{renderMenuItems(link.subLinks)}</ul>
          )}
        </li>
      );
    });
  };

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
                      <Link href={`tel:${links.contactInfo.phone}`}>
                        {links.contactInfo.phoneDisplay}
                      </Link>
                    </li>
                    <li>
                      <i className="fas fa-envelope" />
                      <Link href={`mailto:${links.contactInfo.email}`}>
                        {links.contactInfo.email}
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
                        <Image
                          width={20}
                          height={20}
                          src={links.language.icon}
                          alt={links.language.name}
                        />{" "}
                        {links.language.name}
                      </button>
                      <div
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenuButton1"
                      >
                        {links.languages.map((lang, index) => (
                          <Link
                            key={index}
                            className="dropdown-item"
                            href={lang.href}
                          >
                            <Image
                              width={20}
                              height={20}
                              src={lang.icon}
                              alt={lang.name}
                            />
                            {lang.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="header-social">
                    <ul className="list-wrap">
                      {socialLinks.map((link, index) => (
                        <li key={index}>
                          <Link href={link.href}>
                            <i className={link.iconClass} />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <div>
        <div
          id="sticky-header"
          className={`menu-area ${scroll ? "sticky-menu" : ""} ${headerCls}`}
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
                        <Image
                          width={200}
                          height={200}
                          src={links.logo.main}
                          alt="Logo"
                        />
                      </Link>
                    </div>
                    <div className="logo d-none">
                      <Link href="/">
                        <Image
                          width={200}
                          height={200}
                          src={links.logo.secondary}
                          alt="Logo"
                        />
                      </Link>
                    </div>
                    <div className="navbar-wrap main-menu d-none d-lg-flex">
                      <ul className="navigation">
                        {renderMenuItems(navigationLinks)}
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
                    <div className=" logo flex pl-6 pt-4">
                      <Link href="/">
                        <Image
                          src={links.logo.main}
                          alt="Logo"
                          width={200}
                          height={200}
                        />
                      </Link>
                    </div>
                    <div className="menu-outer mt-80">
                      <Sidebar handleToggled={handleToggled} />
                    </div>
                    <div className="flex justify-center pt-4">
                      <Link
                        href={headerAction.contactButton.href}
                        className="btn"
                      >
                        {headerAction.contactButton.text}
                      </Link>
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
      </div>
    </>
  );
}
