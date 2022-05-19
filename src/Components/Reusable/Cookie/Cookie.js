import React, { useEffect } from "react";
import CookieConsent, {
  getCookieConsentValue,
  Cookies,
} from "react-cookie-consent";
import { NavLink } from "react-router-dom";

import "./Cookie.css";

//https://dev.to/ramonak/react-enable-google-analytics-after-a-user-grants-consent-5bg3
export default function Cookie() {
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
    <div id="cookie-consent" className="cookie-wrap">
      <div className="inner-cookie-wrap">
        <CookieConsent
          disableStyles={true}
          disableButtonStyles={true}
          enableDeclineButton
          expires={365}
          cookieSecurity={true}
          onAccept={handleAcceptCookie}
          onDecline={handleDeclineCookie}
          sameSite="strict"
          containerClasses="cookie-dialog"
          contentClasses="cookie-text"
          buttonWrapperClasses="button-wrap"
          buttonClasses="accept-button shadow-box"
          declineButtonClasses="decline-button shadow-box"
        >
          <p>
            This website uses third party cookies from Google Analytics to
            enhance user experience. For information regarding cookie usage,
            please refer to CB's{" "}
            <NavLink to="/csp">Cookie Security Policy Documentation</NavLink>
          </p>
        </CookieConsent>
      </div>
    </div>
  );
}
