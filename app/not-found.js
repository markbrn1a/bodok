import Link from "next/link";
import Image from "next/image";
export default function Custom404() {
  return (
    <>
      <section className="error-area pt-120 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="error-img flex justify-center">
                <Image
                  src="/assets/img/images/404_img.png"
                  alt=""
                  width={1024}
                  height={683}
                />
              </div>
              <div className="error-content">
                <h2 className="title">Az oldal nem található</h2>
                <Link href="/" className="btn">
                  Vissza a főoldalra
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
