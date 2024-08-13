"use client";
import { useEffect } from "react";
import BackToTop from "../elements/BackToTop";
import Breadcrumb from "./Breadcrumb";
import Footer from "./Footer";
import PageHead from "./PageHead";
import { usePathname } from "next/navigation";
import links from "@/data/nav.json";

import ConsentBanner from "../elements/ConsentBanner";

export default function Layout({
  headerCls,
  headerTop,
  headTitle,
  children,
  footer = true,
}) {
  const path = usePathname();
  useEffect(() => {
    const WOW = require("wowjs");
    window.wow = new WOW.WOW({
      live: false,
    });
    window.wow.init();
  }, []);
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
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

  const flatLinks = flattenLinks(links.navigationLinks);

  const breadcrumbTitle = flatLinks.filter((link) => link.href === path)[0] || {
    href: "/404",
    text: "404",
  };

  return (
    <>
      <PageHead headTitle={headTitle} />
      {/* <DataBg /> */}

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
      {/* {footer && <Footer />} */}
      <BackToTop />
    </>
  );
}
