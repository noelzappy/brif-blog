import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import Post from "@/components/Post";
import { capitalizeText } from "@/utils/capitalizeText";
import * as API from "@/libs/contentApi";
import Loading from "@/components/Loading";

const TagSingle = ({ posts, tag, tagname }) => {
  if (!posts || !tag) {
    return <Loading />;
  }

  return (
    <Layout metaTitle={`Showing posts from - ${capitalizeText(tag.name)}`}>
      <PageHeader title={tagname} taxonomy={true} />

      <section className="section pt-0">
        <div className="container">
          <div className="row gy-5 gx-md-5">
            {posts.map((post) => (
              <div key={post.id} className="col-lg-4 col-md-6">
                <Post post={post} status={tagname} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default TagSingle;

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps = async ({ params: { tagname } }) => {
  const posts = await API.getPostsByTag(tagname);
  const tag = await API.getTag(tagname);

  if (!posts || !tag) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      posts,
      tag,
      tagname,
    },
  };
};
