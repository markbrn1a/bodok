export default function Work1({ content }) {
  const work1Content = content.work1Content;
  return (
    <>
      <section className="work-area">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="section-title text-center mb-50 tg-heading-subheading animation-style3">
                <span className="sub-title tg-element-title">
                  {work1Content.sectionTitle}
                </span>
                <h2 className="title tg-element-title">
                  {work1Content.mainTitle}
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            {work1Content.steps.map((step, index) => (
              <div className="col-xl-3 col-md-6" key={index}>
                <div className="work-item">
                  <div className="work-thumb">
                    <img
                      src={`/assets/img/images/work_img0${index + 1}.png`}
                      alt=""
                    />
                    <h4 className="number">{step.number}</h4>
                  </div>
                  <div className="work-content">
                    <h2 className="title">{step.title}</h2>
                    <p>{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
