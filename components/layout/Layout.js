"use client";
import { useEffect } from "react";
import BackToTop from "../elements/BackToTop";
import Breadcrumb from "./Breadcrumb";
import PageHead from "./PageHead";
import { usePathname } from "next/navigation";
import links from "@/data/nav.json";

import ConsentBanner from "../elements/ConsentBanner";

export default function Layout({ headTitle, children }) {
  const path = usePathname();
  useEffect(() => {
    const WOW = require("wowjs");
    window.wow = new WOW.WOW({
      live: false,
    });
    window.wow.init();
    if (localStorage.getItem("gclid") === null) {
      const urlParams = new URLSearchParams(window.location.search);
      const hasGclid = urlParams.has("gclid");
      localStorage.setItem("gclid", hasGclid ? "true" : "false");
    }
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

  function shouldRenderBreadcrumb(path) {
    return path !== "/" && !/^\/landing\/.*$/.test(path);
  }

  return (
    <>
      <PageHead headTitle={headTitle} />
      {/* <DataBg /> */}

      <div>
        <ConsentBanner />
        {shouldRenderBreadcrumb(path) && (
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
