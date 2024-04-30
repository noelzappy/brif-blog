import Layout from "@/components/Layout";
import Loading from "@/components/Loading";
import PageHeader from "@/components/PageHeader";
import Pagination from "@/components/Pagination";
import Post from "@/components/Post";
import * as API from "@/libs/contentApi";

const Articles = ({ posts, meta }) => {
  if (!posts) {
    return <Loading />;
  }

  const { pagination } = meta;

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

            {pagination ? (
              <div className="col-12 text-center pt-4 mt-5">
                <Pagination
                  currentPage={pagination?.page}
                  numberOfPages={pagination?.pages}
                />
              </div>
            ) : null}
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default Articles;

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const posts = await API.getPosts(
    params && params.page ? parseInt(params.page) : 1
  );

  if (!posts) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      posts: posts,
      meta: posts.meta,
    },
  };
};
