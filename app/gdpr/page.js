import Layout from "@/components/layout/Layout";
import gdprContent from "@/data/gdprContent";

export default function GDPR() {
  gdprContent.companyInfo.name = process.env.NEXT_PUBLIC_COMPANY_NAME;
  gdprContent.companyInfo.address = process.env.NEXT_PUBLIC_COMPANY_ADDRESS;
  gdprContent.companyInfo.phone = process.env.NEXT_PUBLIC_COMPANY_PHONE;
  gdprContent.companyInfo.email = process.env.NEXT_PUBLIC_COMPANY_EMAIL;
  gdprContent.companyInfo.taxNumber = process.env.NEXT_PUBLIC_COMPANY_VAT;
  return (
    <>
      <div className="bg-gray-50 py-16">
        <section className="gdpr-details-area py-12 px-4 lg:px-0">
          <div className="container mx-auto">
            <div className="row">
              <div className="col-lg-12">
                <div className="gdpr-details-content">
                  <div className="bg-white text-gray-900 rounded-lg shadow-lg p-8">
                    {/* Main Heading */}
                    <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
                      Adatvédelmi Irányelveink
                    </h1>

                    {/* Section: Company Information */}
                    <div className="space-y-6">
                      <p className="text-lg text-gray-700">
                        Az Ön által megadott személyes adatokat kezeli:
                      </p>

                      <p className="text-lg">
                        <strong>Cég neve:</strong>{" "}
                        {gdprContent.companyInfo.companyName}
                      </p>
                      <p className="text-lg">
                        <strong>Székhely:</strong>{" "}
                        {gdprContent.companyInfo.companyAddress}
                      </p>

                      <p className="text-lg">
                        <strong>Cégjegyzékszám:</strong>{" "}
                        {gdprContent.companyInfo.companyRegNumber}
                      </p>

                      <p className="text-lg">
                        A továbbiakban:{" "}
                        <strong>
                          {gdprContent.companyInfo.dataController}
                        </strong>
                        .
                      </p>
                    </div>

                    {/* Section: Introduction */}
                    <div className="space-y-6 mt-10">
                      {gdprContent.introduction.map((paragraph, index) => (
                        <p key={index} className="text-lg text-gray-700">
                          {paragraph}
                        </p>
                      ))}
                    </div>

                    {/* Section: Responsibility and Contact */}
                    <div className="space-y-6 mt-10">
                      <h2 className="text-3xl font-semibold text-gray-800">
                        {gdprContent.responsibilityAndContact.title}
                      </h2>

                      <h3 className="text-2xl font-semibold text-gray-700">
                        {gdprContent.responsibilityAndContact.sectionTitle}
                      </h3>

                      <p className="text-lg text-gray-700">
                        {gdprContent.responsibilityAndContact.contactInfo}
                      </p>

                      <p className="text-lg text-gray-700">
                        {gdprContent.responsibilityAndContact.contactDetails}
                      </p>

                      <div className="overflow-x-auto mt-6">
                        <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                          <thead>
                            <tr className="bg-gray-200 text-gray-700">
                              {gdprContent.responsibilityAndContact.table.header.map(
                                (header, index) => (
                                  <th
                                    key={index}
                                    className="py-3 px-4 border-b border-gray-300 text-left font-semibold"
                                  >
                                    {header}
                                  </th>
                                )
                              )}
                            </tr>
                          </thead>
                          <tbody>
                            {gdprContent.responsibilityAndContact.table.rows.map(
                              (row, index) => (
                                <tr
                                  key={index}
                                  className="text-gray-700 hover:bg-gray-100"
                                >
                                  <td className="py-3 px-4 border-b border-gray-300">
                                    {row.dataController}
                                  </td>
                                  <td className="py-3 px-4 border-b border-gray-300">
                                    {row.responsibility}
                                  </td>
                                </tr>
                              )
                            )}
                          </tbody>
                        </table>
                      </div>
                    </div>

                    {/* Section: Personal Data Processing */}
                    <div className="space-y-6 mt-10">
                      <h3 className="text-2xl font-semibold text-gray-800">
                        {gdprContent.personalDataProcessing.title}
                      </h3>

                      <ul className="list-disc list-inside space-y-2 text-lg text-gray-700">
                        {gdprContent.personalDataProcessing.items.map(
                          (item, index) => (
                            <li key={index}>{item}</li>
                          )
                        )}
                      </ul>
                    </div>

                    {/* Section: Data Retention Period */}
                    <div className="space-y-6 mt-10">
                      <h3 className="text-2xl font-semibold text-gray-800">
                        {gdprContent.dataRetentionPeriod.title}
                      </h3>

                      <ul className="list-disc list-inside space-y-2 text-lg text-gray-700">
                        {gdprContent.dataRetentionPeriod.items.map(
                          (item, index) => (
                            <li key={index}>{item}</li>
                          )
                        )}
                      </ul>
                    </div>

                    {/* Section: Data Transfer Conditions */}
                    <div className="space-y-6 mt-10">
                      <h3 className="text-2xl font-semibold text-gray-800">
                        {gdprContent.dataTransferConditions.title}
                      </h3>

                      <p className="text-lg text-gray-700">
                        {gdprContent.dataTransferConditions.content}
                      </p>

                      <ul className="list-disc list-inside space-y-2 text-lg text-gray-700">
                        {gdprContent.dataTransferConditions.items.map(
                          (item, index) => (
                            <li key={index}>{item}</li>
                          )
                        )}
                      </ul>
                    </div>

                    {/* Section: Data Processors */}
                    <div className="space-y-6 mt-10">
                      <h3 className="text-2xl font-semibold text-gray-800">
                        {gdprContent.dataProcessors.title}
                      </h3>

                      <p className="text-lg text-gray-700">
                        {gdprContent.dataProcessors.content}
                      </p>

                      <h3 className="text-2xl font-semibold text-gray-800">
                        {gdprContent.dataProcessors.sectionTitle}
                      </h3>

                      {gdprContent.dataProcessors.companies.map(
                        (company, index) => (
                          <div
                            key={index}
                            className="space-y-2 text-lg text-gray-700"
                          >
                            <p>
                              <strong>{company.name}</strong>
                              <br />
                              {company.address}
                              <br />
                              {company.email && (
                                <a
                                  href={`mailto:${company.email}`}
                                  className="text-blue-500 underline"
                                >
                                  {company.email}
                                </a>
                              )}
                            </p>
                            {company.description && (
                              <p>{company.description}</p>
                            )}
                          </div>
                        )
                      )}

                      <p className="text-lg text-gray-700">
                        {gdprContent.dataProcessors.note}
                      </p>
                    </div>

                    {/* Section: Data Owner Rights and Enforcement */}
                    <div className="space-y-6 mt-10">
                      <h3 className="text-2xl font-semibold text-gray-800">
                        {gdprContent.dataOwnerRights.title}
                      </h3>

                      <p className="text-lg text-gray-700">
                        {gdprContent.dataOwnerRights.content}
                      </p>
                    </div>

                    {/* Section: Protection of Minors' Personal Data */}
                    <div className="space-y-6 mt-10">
                      <h3 className="text-2xl font-semibold text-gray-800">
                        {gdprContent.protectionOfMinors.title}
                      </h3>

                      {gdprContent.protectionOfMinors.content.map(
                        (paragraph, index) => (
                          <p key={index} className="text-lg text-gray-700">
                            {paragraph}
                          </p>
                        )
                      )}
                    </div>

                    {/* Section: Cookie Management */}
                    <div className="space-y-6 mt-10">
                      <h3 className="text-2xl font-semibold text-gray-800">
                        {gdprContent.cookieManagement.title}
                      </h3>

                      <p className="text-lg text-gray-700">
                        {gdprContent.cookieManagement.content}
                      </p>
                    </div>

                    {/* Section: Definitions */}
                    <div className="space-y-6 mt-10">
                      <h3 className="text-2xl font-semibold text-gray-800">
                        {gdprContent.definitions.title}
                      </h3>

                      <ul className="list-disc list-inside space-y-2 text-lg text-gray-700">
                        {gdprContent.definitions.items.map((item, index) => (
                          <li key={index}>
                            <strong>{item.term}</strong> {item.definition}
                          </li>
                        ))}
                      </ul>
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
