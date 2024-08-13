import Image from "next/image";
import Link from "next/link";

export default function Blog1({ content }) {
  return (
    <>
      <section className="blog-area pt-115 pb-90">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="section-title text-center mb-60 tg-heading-subheading animation-style3">
                <span className="sub-title tg-element-title">
                  {content.blogSection.sectionTitle}
                </span>
                <h2 className="title tg-element-title">
                  {content.blogSection.sectionSubtitle}
                </h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            {content.blogSection.posts.map((post, index) => (
              <div key={index} className="col-xl-4 col-md-6">
                <div className="blog-post-item">
                  <div className="blog-post-thumb">
                    <Link href={post.detailsLink || ""}>
                      <Image width={370} height={370} src={post.image} alt="" />
                    </Link>
                  </div>
                  <div className="blog-post-content">
                    <Link href={post.tagLink || ""} className="tag">
                      {post.tag}
                    </Link>
                    <div className="blog-meta">
                      <ul className="list-wrap">
                        <li>
                          <i className="far fa-user" /> By{" "}
                          <Link href={post.detailsLink || ""}>
                            {post.author}
                          </Link>
                        </li>
                        <li>
                          <i className="fas fa-calendar-alt" />
                          {post.date} {new Date().getFullYear()}
                        </li>
                      </ul>
                    </div>
                    <h2 className="title">
                      <Link href={post.detailsLink || ""}>{post.title}</Link>
                    </h2>
                    <Link href={post.detailsLink || ""} className="link-btn">
                      Read More
                      <i className="fas fa-arrow-right" />
                    </Link>
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
