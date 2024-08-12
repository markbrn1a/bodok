import Link from "next/link";
import content from "../../data/footer.json";
import { phoneCall } from "@/utils/conversion";
import FooterForm from "../elements/FooterForm";

export default function Footer1() {
  return (
    <>
      <footer>
        <div
          className="footer-area footer-bg"
          data-background={content.footer.backgroundImage}
        >
          <div className="footer-top">
            <div className="container">
              <div className="row">
                <div className="col-xl-3 col-lg-4 col-md-7">
                  <div className="footer-widget">
                    <h2 className="fw-title">{content.footer.aboutUsTitle}</h2>
                    <div className="footer-content">
                      <p>{content.footer.aboutUsText}</p>
                      <div className="footer-newsletter">
                        <h4 className="title">
                          {content.footer.newsletterTitle}
                        </h4>
                        <FooterForm content={content} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-5 col-sm-6">
                  <div className="footer-widget">
                    <h2 className="fw-title">{content.footer.servicesTitle}</h2>
                    <div className="footer-link">
                      <ul className="list-wrap">
                        {content.footer.services.map((service, index) => (
                          <li key={index}>
                            <Link href="/project">
                              <i className="fas fa-angle-double-right" />
                              {service}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xl-2 col-lg-4 col-md-6 col-sm-6">
                  <div className="footer-widget">
                    <h2 className="fw-title">
                      {content.footer.quickLinksTitle}
                    </h2>
                    <div className="footer-link">
                      <ul className="list-wrap">
                        {content.footer.quickLinks.map((link, index) => (
                          <li key={index}>
                            <Link href="/contact">
                              <i className="fas fa-angle-double-right" />
                              {link}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-5 col-md-6">
                  <div className="footer-widget">
                    <h2 className="fw-title">
                      {content.footer.instagramTitle}
                    </h2>
                    <div className="footer-instagram">
                      <ul className="list-wrap">
                        {content.footer.instagramImages.map((image, index) => (
                          <li key={index}>
                            <Link href="/#">
                              <img src={image} alt="" />
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="footer-logo-area">
                <div className="row align-items-center">
                  <div className="col-xl-3 col-lg-3 col-md-12">
                    <div className="logo">
                      <Link href="/index">
                        <img src={content.footer.logoImage} alt="" />
                      </Link>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-6">
                    <div className="footer-contact">
                      <div className="icon">
                        <i className={content.footer.phoneIcon} />
                      </div>
                      <div className="content">
                        <span>{content.footer.phoneText}</span>
                        <Link
                          onClick={phoneCall}
                          href={`tel:${content.footer.phoneNumber}`}
                        >
                          {content.footer.phoneNumber}
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-5 col-lg-5 col-md-6">
                    <div className="footer-social">
                      <h2 className="title">{content.footer.socialTitle}</h2>
                      <ul className="list-wrap">
                        {content.footer.socialIcons.map((icon, index) => (
                          <li key={index}>
                            <Link href="/#">
                              <i className={icon} />
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <div className="copyright-text">
                    <p>
                      {content.footer.copyrightText.replace(
                        "{year}",
                        new Date().getFullYear()
                      )}
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="footer-bootom-menu">
                    <ul className="list-wrap">
                      {content.footer.footerMenu.map((menu, index) => (
                        <li key={index}>
                          <Link href={menu.link}>{menu.title}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
