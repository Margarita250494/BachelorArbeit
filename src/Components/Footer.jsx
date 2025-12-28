import React from "react";
import "../Styles/Footer.css";
import SubscribeNewsletter from "./SubscribeNewsletter";
import FooterList from './FooterList'
import {
  footerContactLinks,
  footerLegalLinks,
  footerServicesLinks, footerSocialLinks
} from '../utils/footer.data'
import AllRights from './AllRights'

function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="ft-info">
          <div className="ft-info-p1">
            <h2 className="ft-title">
              Health <span className="ft-sign">+</span>
            </h2>
            <p className="ft-description">
              Talk to online doctors and get medical advice, online
              prescriptions, refills and medical notes within minutes. On-demand
              healthcare services at your fingertips.
            </p>
          </div>
          <SubscribeNewsletter />
        </div>

        <FooterList
          title="Services"
          infoArray={footerServicesLinks}
        />

        <FooterList
          title="Legal"
          infoArray={footerLegalLinks}
        />

        <FooterList
          title="Talk To Us"
          id="contact"
          infoArray={footerContactLinks}
        />

      </div>

      <nav className="ft-copyright">
        <AllRights />
        <ul className="ft-social-links">
          {footerSocialLinks.map((socialLink) => (
            <li key={socialLink.title}>
              <a
                href={socialLink.link}
                title={socialLink.title}
                target="_blank"
                rel="noopener noreferrer"
              >
                {socialLink.icon}
              </a>
            </li>))}
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;
