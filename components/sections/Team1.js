import Image from "next/image";
import Link from "next/link";

export default function Team1({ content }) {
  return (
    <>
      <section className="team-area pt-115 pb-90">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="section-title text-center mb-60 tg-heading-subheading animation-style3">
                <span className="sub-title tg-element-title">
                  {content.sectionTitle}
                </span>
                <h2 className="title tg-element-title">
                  {content.sectionSubtitle}
                </h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            {content.teamMembers.map((member, index) => (
              <div key={index} className="col-xl-3 col-lg-4 col-md-6 col-sm-10">
                <div className="team-item">
                  <div className="team-thumb">
                    <Link href={member.detailsLink || ""}>
                      <Image
                        width={370}
                        height={370}
                        src={member.image}
                        alt={member.name}
                      />
                    </Link>
                    <div className="team-social">
                      <ul className="list-wrap">
                        <li>
                          <Link href={member.socialLinks.facebook || ""}>
                            <i className="fab fa-facebook-f" />
                          </Link>
                        </li>
                        <li>
                          <Link href={member.socialLinks.linkedin || ""}>
                            <i className="fab fa-linkedin-in" />
                          </Link>
                        </li>
                        <li>
                          <Link href={member.socialLinks.twitter || ""}>
                            <i className="fab fa-twitter" />
                          </Link>
                        </li>
                        <li>
                          <Link href={member.socialLinks.instagram || ""}>
                            <i className="fab fa-instagram" />
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="team-content">
                    <h2 className="title">
                      <Link href={member.detailsLink || ""}>{member.name}</Link>
                    </h2>
                    <span>{member.role}</span>
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
