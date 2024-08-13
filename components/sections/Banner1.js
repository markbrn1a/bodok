import Link from "next/link";
import dynamic from "next/dynamic";

const DataBg = dynamic(() => import("../elements/DataBg"), { ssr: false });
const Tooltip = dynamic(() => import("../elements/Tooltip"), { ssr: false });
const Brand1 = dynamic(() => import("./Brand1"), { ssr: false });

export default function Banner1({ content }) {
  return (
    <>
      <section className="banner-area">
        <div
          className="banner-shape"
          style={{
            backgroundImage: `url(${content.banner.shapeImage})`,
          }}
        />
        <div
          className="banner-bg"
          style={{
            backgroundImage: `url(${content.banner.backgroundImage})`,
          }}
        >
          <div className="banner-content">
            <h2 className="title wow fadeInDown" data-wow-delay=".2s">
              {content.banner.title}
            </h2>
            <p className="wow fadeInUp" data-wow-delay=".2s">
              {content.banner.description}
            </p>
            <Link
              href={content.banner.link.href}
              className="btn wow fadeInUp"
              data-wow-delay=".4s"
            >
              {content.banner.link.text}
            </Link>
          </div>
          <div className="banner-tooltip-wrap">
            {content.banner.tooltips.map((tooltip, index) => (
              <Tooltip key={index} index={index} tooltip={tooltip} />
            ))}
          </div>
        </div>
        <Brand1 />
      </section>
      <DataBg />
    </>
  );
}
