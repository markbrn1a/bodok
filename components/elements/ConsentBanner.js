import { useState, useEffect } from "react";
import { denyConsent, acceptCookies, initiateCMP } from "@/utils/conversion";

export default function ConsentBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = getCookie("consent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    setCookie("consent", "true", 365);
    acceptCookies();
    setIsVisible(false);
  };

  const setCookie = (name, value, days) => {
    const expires = new Date();
    expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
  };

  const getCookie = (name) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(";").shift();
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 m-4 p-6 bg-white border border-gray-200 shadow-lg rounded-lg w-80 z-50">
      <h2 className="text-lg font-semibold mb-3">
        Ez a weboldal sütiket használ.
      </h2>
      <p className="text-sm text-gray-600 mb-5">Ez a weboldal</p>
      <div className="flex justify-between items-center space-x-4">
        <button
          onClick={handleAccept}
          className="btn text-white text-sm font-semibold py-2 px-4 rounded hover:bg-blue-600 focus:outline-none"
        >
          Elfogadom
        </button>
        <a
          href="/gdpr"
          className="text-sm text-blue-500 hover:text-blue-700 focus:outline-none"
        >
          Adatkezelés
        </a>
      </div>
    </div>
  );
}
