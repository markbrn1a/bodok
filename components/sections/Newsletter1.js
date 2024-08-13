import CallBackForm from "../elements/forms/CallBackForm";

export default function Newsletter1({ content }) {
  return (
    <>
      <section
        className="newsletter-area jarallax newsletter-bg"
        style={{
          backgroundImage: `url(${content.newsletterSection.backgroundImage})`,
        }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-5">
              <div className="newsletter-content">
                <div className="section-title white-title-two tg-heading-subheading animation-style3">
                  <span className="sub-title tg-element-title">
                    {content.newsletterSection.subTitle}
                  </span>
                  <h2 className="title tg-element-title">
                    {content.newsletterSection.title}
                  </h2>
                </div>
              </div>
            </div>
            <div className="col-xl-7">
              <div className="newsletter-form">
                <CallBackForm content={content} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
