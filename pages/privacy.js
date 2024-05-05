import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import Markdown from "@/components/ReactMarkdown";

const Privacy = ({ privacy }) => {
  const title = "Privacy Policy";
  const description = "Privacy Policy";

  return (
    <Layout metaTitle={title} description={description}>
      <PageHeader title={title} />

      <section className="section pt-0">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-9 col-lg-10">
              <div className="content">
                <Markdown content="To Be Done" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Privacy;

// Export Props
export const getStaticProps = () => {
  return {
    props: {},
  };
};
