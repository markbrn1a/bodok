import Head from "next/head";

const PageHead = ({ headTitle }) => {
  return (
    <>
      <Head>
        <title>
          {headTitle ? headTitle : "Bodok - Roofing Services Nextjs Template"}
        </title>
      </Head>
    </>
  );
};

export default PageHead;
