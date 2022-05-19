import React from "react";
import Title from "../Reusable/Title/Title";
import Line from "../Reusable/Line/Line";
import CookieInner from "../../Components/Reusable/Cookie/CookieInner";
import "./CSP.css";

export default function Csp(props) {
  return (
    <>
      <Title titleStr="Cookie Security Policy"></Title>
      <div className="inner-csp-wrap">
        <div className="intro-csp">
          <h1>Your privacy matters, choom!</h1>
          <p>
            As you probably know, there isn't a whole lot of privacy on the
            internet. Curlybrackets wants to give you complete control over how
            this is managed.
          </p>
          <p>
            You may have noticed that you had to take an extra second or two to
            read the prompt on the cookie display. That is by design.
          </p>
          <p>
            While many websites will often entice you with{" "}
            <a
              className="linkNoUnderline"
              rel="noreferrer"
              target="_blank"
              href="https://www.darkpatterns.org/"
            >
              dark patterns
            </a>
            , the choice was intentionally made to leave the button colors on
            the opt in for cookies black with white text, with the same
            shadowing over both.
          </p>
          <p>
            Why? Simply - ethics. I don't want to trick you into giving me ad
            revenue or disclosing data unneccesarily. The cost of losing your
            trust is greater than any gains I get from your browsing.
          </p>
          <p>
            By default, you are opted out of all cookies unless you explicitly
            accept.
          </p>
        </div>
        <div className="line-pad">
          <Line></Line>
        </div>
        <div className="cookie-info">
          <h2>Here are the cookies we store, should you accept.</h2>
          <div className="line-pad">
            <Line></Line>
          </div>
          <div>
            <h3>First Party Cookies</h3>
            <div className="inner-csp-explanation">
              <p>
                One cookie that defines whether you have opted in to cookies or
                not. True or false value only.
              </p>
            </div>
          </div>
          <div className="line-pad">
            <Line></Line>
          </div>
          <div>
            <h3>Third Party Cookies</h3>
            <div className="inner-csp-explanation">
              <p>
                Currently, in order to study Google Analytics, third party
                cookies are in use for Google Analytics only if users explicitly
                opt in.
              </p>
              <p>
                This website enables Google Analytics 4. If you would like to
                learn more about this, please consult the{" "}
                <a
                  className="linkNoUnderline"
                  target="_blank"
                  rel="noreferrer"
                  href="https://developers.google.com/analytics/devguides/collection/ga4"
                >
                  Google Analytics 4 Documentation
                </a>
              </p>
              <p>A simpler explanation can be found <a className="linkNoUnderline"
                  target="_blank"
                  rel="noreferrer"
                  href="https://policies.google.com/technologies/cookies">here</a>.</p>
              <div className="line-pad">
                <Line></Line>
              </div>
            </div>
            <div className="google-inner-div">
              <h3 className="csp-opt">On opt out:</h3>
              <div className="inner-csp-explanation">
                <p>
                  There is a cookie that generates to show that analytics
                  tracking and advertising tracking is disabled on default.
                </p>
                <p>
                  Ip addresses are anonomized through the setting made available
                  by Google Analytics.
                </p>
              </div>
            </div>

            <div className="google-inner-div">
              <h3 className="csp-opt">On Opt In</h3>
              <div className="inner-csp-explanation">
                <div>
                  <h4>Google Analytics Storage</h4>
                  <p>
                    Ads are not being served currently, I wanted to see what it
                    did in analytics.
                  </p>
                  <p>
                    <a
                      className="linkNoUnderline"
                      rel="noreferrer"
                      target="_blank"
                      href="https://support.google.com/analytics/answer/9964640?hl=en#zippy=%2Cin-this-article"
                    >
                      Google Analytics Storage Docs
                    </a>
                  </p>
                </div>
                <div>
                  <h4>Google Signals - Advertising</h4>
                  <p>
                    Ads are not being served currently, but I wanted to see what
                    it did in analytics.
                  </p>
                  <p>
                    <a
                      className="linkNoUnderline"
                      rel="noreferrer"
                      target="_blank"
                      href="https://support.google.com/analytics/answer/7532985?hl=en#zippy=%2Cin-this-article"
                    >
                      Google Signals Docs
                    </a>
                  </p>
                </div>
                <div>
                  <h4>Google Ad Personalization</h4>
                  <p>
                    Ads are not being served currently, but I wanted to see what
                    it did in analytics.
                  </p>
                  <p>
                    <a
                      className="linkNoUnderline"
                      rel="noreferrer"
                      target="_blank"
                      href="https://support.google.com/ads/answer/2662856"
                    >
                      Google Ad Personalization Docs
                    </a>
                  </p>
                </div>
                <div>
                  <h4>Google Page Views</h4>
                  <p>User experience monitoring</p>
                  <p>
                    <a
                      className="linkNoUnderline"
                      rel="noreferrer"
                      target="_blank"
                      href="https://support.google.com/analytics/answer/6086080?hl=en"
                    >
                      Google Page Views Docs
                    </a>
                  </p>
                  <div className="line-pad"><Line></Line></div>
                 
         
          
                </div>
               
              </div>
              <CookieInner />  
            </div>
          </div>
        </div>
        
      </div>
    </>
  );
}
