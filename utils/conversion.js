"use client";
import { gtag, install } from "ga-gtag";

export function initializeGtag() {
  console.log("Initializing GA");

  const ga = install(process.env.ADS_TRACKING_NO);
  console.log("GA installed", ga);
  install(process.env.ANALYTICS_TRACING_NO);
  gtag("config", process.env.ANALYTICS_TRACING_NO, { debug_mode: true });
}

export function acceptCookies() {
  initializeGtag();
  gtag("consent", "update", {
    ad_storage: "granted",
    analytics_storage: "granted",
  });
}

export function initiateCMP() {
  // Integrate with CMP to check for consent
  window.__tcfapi("getTCData", 2, (tcData, success) => {
    if (success && tcData.gdprApplies) {
      const consentStatus = {
        ad_storage: tcData.purpose.consents[1] ? "granted" : "denied",
        analytics_storage: tcData.purpose.consents[1] ? "granted" : "denied",
      };
      handleConsentUpdate(consentStatus);
    }
  });
}

export function denyConsent() {
  gtag("consent", "default", {
    ad_storage: "denied",
    analytics_storage: "denied",
  });
}

export function handleConsentUpdate(consentStatus) {
  gtag("consent", "update", {
    ad_storage: consentStatus.ad_storage,
    analytics_storage: consentStatus.analytics_storage,
  });
}

export function phoneCall(phoneNumber) {
  initializeGtag();
  function gtag_report_conversion(url) {
    const callback = function () {
      if (typeof url != "undefined") {
        window.location = url;
      }
    };
    gtag("event", "conversion", {
      send_to: "AW-10798536299/jnioCPjploEDEOuskp0o",
      event_callback: callback,
    });
    return false;
  }
  gtag_report_conversion();
}

export function emailClick(email) {
  initializeGtag();
  function gtag_report_conversion(url) {
    var callback = function () {
      if (typeof url != "undefined") {
        window.location = url;
      }
    };
    gtag("event", "conversion", {
      send_to: "AW-10798536299/U3HsCMLlrsoZEOuskp0o",
      event_callback: callback,
    });
    return false;
  }
  gtag_report_conversion();
}

export function formSubmit(formName) {
  initializeGtag();
  function gtag_report_conversion(url) {
    const callback = function () {
      if (typeof url != "undefined") {
        window.location = url;
      }
    };
    gtag("event", "conversion", {
      send_to: "AW-10798536299/O_bTCLGamLoYEOuskp0o",
      event_callback: callback,
    });
    return false;
  }
  gtag_report_conversion();
}

export function requestCallBack(formName) {
  initializeGtag();
  function gtag_report_conversion(url) {
    var callback = function () {
      if (typeof url != "undefined") {
        window.location = url;
      }
    };
    gtag("event", "conversion", {
      send_to: "AW-10798536299/GeBACPSr_P8CEOuskp0o",
      event_callback: callback,
    });
    return false;
  }
  gtag_report_conversion();
}
