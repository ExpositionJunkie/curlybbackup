import React, { useEffect } from "react";
import CookieConsent, {
  getCookieConsentValue,
  Cookies,
} from "react-cookie-consent";

import "./CookieInner.css";

//https://dev.to/ramonak/react-enable-google-analytics-after-a-user-grants-consent-5bg3
export default function CookieInner() {
  useEffect(() => {
    const isConsent = getCookieConsentValue();
    if (isConsent === "true") {
      handleAcceptCookie();
    }
  }, []);

  const handleAcceptCookie = () => {
    //allows google analytics to update and allow consent.
    window.consentGranted();
    window.gtag("set", process.env.GA, { allow_google_signals: true });
    window.gtag("set", process.env.GA, { send_page_view: true });
    document.getElementById("cookie-consent").className = "disappear";
  };

  const handleDeclineCookie = () => {
    //remove google analytics cookies
    window.consentRevoked();
    Cookies.remove("_ga");
    Cookies.remove("_gat");
    Cookies.remove("_gid");
    document.getElementById("cookie-consent").className = "disappear";
  };

  return (
    <CookieConsent
      visible={true}
      disableStyles={true}
      disableButtonStyles={true}
      enableDeclineButton
      expires={365}
      overlay
      hideOnAccept={false}
      cookieSecurity={true}
      onAccept={handleAcceptCookie}
      onDecline={handleDeclineCookie}
      sameSite="strict"
      containerClasses="cookie-inner-dialog"
      contentClasses="cookie-inner-text"
      buttonWrapperClasses="inner-button-wrap"
      buttonClasses="inner-accept-button shadow-box"
      declineButtonClasses="inner-decline-button shadow-box"
    >
      <p>
        This website uses third party cookies from Google Analytics to enhance
        user experience. You may opt in or out below:{" "}
      </p>
    </CookieConsent>
  );
}
