"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import BackToTop from "../elements/BackToTop";
import DataBg from "../elements/DataBg";
import Breadcrumb from "./Breadcrumb";
import Footer from "./Footer";
import Header from "./Header";
import PageHead from "./PageHead";
import links from "../../data/nav.json";

import { denyConsent, acceptCookies, initiateCMP } from "@/utils/conversion";
import ConsentBanner from "../elements/ConsentBanner";

export default function Layout({
  headerCls,
  headerTop,
  headTitle,
  children,
  footer = true,
}) {
  const pathname = usePathname();
  useEffect(() => {
    const WOW = require("wowjs");
    window.wow = new WOW.WOW({
      live: false,
    });
    window.wow.init();
  }, []);
  // Helper function to flatten the nested links structure
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
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  const flatLinks = flattenLinks(links.navigationLinks);
  const breadcrumbTitle = flatLinks.filter(
    (link) => link.href === pathname
  )[0] || {
    href: "/404",
    text: "404",
  };

  return (
    <>
      <PageHead headTitle={headTitle} />
      <DataBg />

      <Header
        headerCls={breadcrumbTitle.href === "/" ? headerCls : ""}
        headerTop={breadcrumbTitle.href === "/" ? headerTop : ""}
      />
      <div>
        <ConsentBanner />
        {breadcrumbTitle.href === "/" ? (
          <></>
        ) : (
          <Breadcrumb
            breadcrumbTitle={capitalizeFirstLetter(breadcrumbTitle.text)}
          />
        )}
        {children}
      </div>
      {footer && <Footer />}
      <BackToTop />
    </>
  );
}
