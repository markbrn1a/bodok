import content from "@/data/service/content.json";

export default function Appointment2({ content }) {
  return (
    <>
      <section className="appointment-area-two pb-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div
                className="appointment-inner-two tg-heading-subheading animation-style3"
                style={{
                  backgroundImage: `url(${content.backgroundImage.src})`,
                }}
              >
                <h2 className="title tg-element-title">
                  {content.appointmentTitle}
                </h2>
                <form action="#">
                  <div className="row">
                    <div className="col-lg-4">
                      <div className="form-grp">
                        <input
                          type="text"
                          placeholder={content.formPlaceholders.name}
                        />
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="form-grp">
                        <input
                          type="text"
                          placeholder={content.formPlaceholders.phone}
                        />
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="form-grp">
                        <input
                          type="text"
                          placeholder={content.formPlaceholders.location}
                        />
                      </div>
                    </div>
                    <div className="col-lg-8">
                      <div className="form-grp">
                        <textarea
                          name="message"
                          placeholder={content.formPlaceholders.message}
                        />
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <button type="submit" className="btn">
                        {content.buttonText2}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
