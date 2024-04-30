import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import Pagination from "@/components/Pagination";
import Post from "@/components/Post";
import * as API from "@/libs/contentApi";

const Blog = ({ posts }) => {
  return (
    <Layout metaTitle="Latest Posts">
      <PageHeader title="Latest Posts" truncateBreadcrumb={true} />

      <section className="section pt-0">
        <div className="container">
          <div className="row gy-5 gx-4 g-xl-5">
            {posts.map((post) => (
              <div key={post.id} className="col-lg-4 col-md-6">
                <Post post={post} />
              </div>
            ))}

            <div className="col-12 text-center pt-4 mt-5">
              <Pagination currentPage={1} numberOfPages={2} />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default Blog;

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const allPosts = await API.getPosts();

  return {
    props: {
      posts: allPosts,
    },
  };
};
