import Layout from "@/components/layout/Layout";
import imprintContent from "@/data/imprint.json";

export default function Imprint() {
  imprintContent.provider.name = process.env.NEXT_PUBLIC_COMPANY_NAME;
  imprintContent.provider.address = process.env.NEXT_PUBLIC_COMPANY_ADDRESS;
  imprintContent.provider.phone = process.env.NEXT_PUBLIC_COMPANY_PHONE;
  imprintContent.provider.email = process.env.NEXT_PUBLIC_COMPANY_EMAIL;
  imprintContent.provider.taxNumber =
    process.env.NEXT_PUBLIC_COMPANY_TAX_NUMBER;

  return (
    <>
      <div className="bg-gray-50 py-16">
        <section className="imprint-details-area py-12 px-4 lg:px-0">
          <div className="container mx-auto">
            <div className="row">
              <div className="col-lg-12">
                <div className="imprint-details-content">
                  <div className="bg-white text-gray-900 rounded-lg shadow-lg p-8">
                    {/* Main Heading */}
                    <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
                      Impresszum
                    </h1>

                    {/* Section: Provider Information */}
                    <div className="space-y-6">
                      <p className="text-lg text-gray-700">
                        <strong>Szolgáltató neve:</strong>{" "}
                        {imprintContent.provider.name}
                      </p>
                      <p className="text-lg text-gray-700">
                        <strong>Szolgáltató székhelye:</strong>{" "}
                        {imprintContent.provider.address}
                      </p>
                      <p className="text-lg text-gray-700">
                        <strong>Szolgáltató elérhetősége:</strong>{" "}
                        <a
                          href={`mailto:${imprintContent.provider.email}`}
                          className="text-blue-500 underline"
                        >
                          {imprintContent.provider.email}
                        </a>
                      </p>
                      <p className="text-lg text-gray-700">
                        <strong>Adószám:</strong>{" "}
                        {imprintContent.provider.taxNumber}
                      </p>
                    </div>

                    {/* Section: Hosting Provider Information */}
                    <div className="space-y-6 mt-10">
                      <h2 className="text-3xl font-semibold text-gray-800">
                        Tárhelyszolgáltató adatai
                      </h2>
                      <p className="text-lg text-gray-700">
                        <strong>Név:</strong>{" "}
                        {imprintContent.hostingProvider.name}
                      </p>
                      <p className="text-lg text-gray-700">
                        <strong>Cím:</strong>{" "}
                        {imprintContent.hostingProvider.address}
                      </p>
                      <p className="text-lg text-gray-700">
                        <strong>Company Number:</strong>{" "}
                        {imprintContent.hostingProvider.companyNumber}
                      </p>
                      <p className="text-lg text-gray-700">
                        <strong>VAT:</strong>{" "}
                        {imprintContent.hostingProvider.vat}
                      </p>
                      <p className="text-lg text-gray-700">
                        <strong>Telefon:</strong>{" "}
                        {imprintContent.hostingProvider.phone}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
