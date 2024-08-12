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
  gtag("event", "phone_call", {
    phone_number: phoneNumber,
  });
}

export function emailClick(email) {
  initializeGtag();
  gtag("event", "email_click", {
    email: email,
  });
}

export function formSubmit(formName) {
  initializeGtag();
  gtag("event", "form_submit", {
    form_name: formName,
  });
}

export function requestCallBack(formName) {
  initializeGtag();
  gtag("event", "call_back", {
    form_name: formName,
  });
}
