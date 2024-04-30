import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import Post from "@/components/Post";
import * as API from "@/libs/contentApi";

const FeaturedPosts = ({ posts }) => {
  return (
    <Layout metaTitle="Featured Posts">
      <PageHeader title="Featured Posts" />

      <section className="section pt-0">
        <div className="container">
          <div className="row gy-5 gx-4 g-xl-5">
            {posts?.map((post, i) => (
              <div key={post.id} className="col-lg-4 col-md-6">
                <Post post={post} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FeaturedPosts;

// Export Props
export const getStaticProps = async () => {
  const posts = await API.getFeaturedPosts();

  return {
    props: {
      posts,
    },
  };
};
