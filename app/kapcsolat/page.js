"use client";
import Form from "@/components/elements/forms/Form";
import contactContent from "@/data/contactContent";
import Link from "next/link";
import { emailClick, phoneCall } from "@/utils/conversion";

export default function Contact() {
  contactContent.contactInfo.address = process.env.NEXT_PUBLIC_COMPANY_ADDRESS;
  contactContent.contactInfo.phoneNumbers = [
    {
      text: process.env.NEXT_PUBLIC_COMPANY_PHONE,
      href: `tel:${process.env.NEXT_PUBLIC_COMPANY_PHONE}`,
    },
  ];
  contactContent.contactInfo.emails = [
    {
      text: process.env.NEXT_PUBLIC_COMPANY_EMAIL,
      href: `mailto:${process.env.NEXT_PUBLIC_COMPANY_EMAIL}`,
    },
  ];
  return (
    <>
      <section className="contact-area pt-120 pb-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-10">
              <div
                className="contact-form-wrap"
                style={{
                  backgroundImage: `url(${"/assets/img/images/contact_form_bg.jpg"})`,
                }}
                // data-background={"/assets/img/images/contact_form_bg.jpg"}
              >
                <h2 className="title">{contactContent.contactForm.title}</h2>
                <p>{contactContent.contactForm.description}</p>
                <Form />
              </div>
            </div>
            <div className="col-xl-6 col-lg-10">
              <div className="contact-info-wrap">
                <h2 className="title">{contactContent.contactInfo.title}</h2>
                <p>{contactContent.contactInfo.description}</p>
                <ul className="list-wrap flex justify-around">
                  <li>
                    <div className="contact-info-item flex flex-col items-center">
                      <div className="icon mb-2">
                        <i className="fas fa-phone-alt" />
                      </div>
                      <div className="content text-center">
                        <Link
                          onClick={phoneCall}
                          href={process.env.NEXT_PUBLIC_COMPANY_PHONE_LINK}
                        >
                          {process.env.NEXT_PUBLIC_COMPANY_PHONE}
                        </Link>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="contact-info-item flex flex-col items-center">
                      <div className="icon mb-2">
                        <i className="fas fa-envelope" />
                      </div>
                      <div className="content text-center">
                        <Link
                          onClick={emailClick}
                          href={process.env.NEXT_PUBLIC_COMPANY_EMAIL}
                        >
                          {process.env.NEXT_PUBLIC_COMPANY_EMAIL}
                        </Link>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              {/* contact-map */}
              {/* <div id="contact-map">
                <iframe
                  src={contactContent.map.src}
                  height={contactContent.map.height}
                  style={contactContent.map.style}
                  allowFullScreen={contactContent.map.allowFullScreen}
                  loading={contactContent.map.loading}
                  referrerPolicy={contactContent.map.referrerPolicy}
                />
              </div> */}
              {/* contact-map-end */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
