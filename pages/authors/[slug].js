import BlurImage from "@/components/BlurImage";
import BootstrapIcon from "@/components/BootstrapIcon";
import Layout from "@/components/Layout";
import Post from "@/components/Post";
import Markdown from "@/components/ReactMarkdown";
import { EditCircle } from "@/utils/Icons";
import * as API from "@/libs/contentApi";
import Loading from "@/components/Loading";

export default function AuthorSingle({ author, posts }) {
  if (!author || !posts) {
    return <Loading />;
  }

  const postCount = posts.length;

  return (
    <Layout
      metaTitle={author.title}
      metaDescription={author.bio}
      ogImage={author.profile_image}
    >
      <section className="section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-9 col-lg-10 text-center">
              <div className="mb-5">
                <BlurImage
                  className="img-fluid rounded-1"
                  src={author.profile_image}
                  alt={author.name}
                  width={180}
                  height={180}
                />
              </div>
              <h1 className="h2 text-dark mb-1">{author.name}</h1>
              <p>{author.location}</p>
              <p className="mb-3">
                <EditCircle />
                <span className="fw-medium text-black ms-1">
                  {postCount < 9 ? `0${postCount}` : postCount}
                </span>{" "}
                Published posts
              </p>
              <div className="content">
                <Markdown content={author.bio} />
              </div>
              {/*         <ul className="list-inline social-links mt-4">
                {socialLinks.map((data, key) => (
                  <li
                    key={key}
                    className="list-inline-item me-3 mt-1 text-center"
                  >
                    <a
                      className="lh-1 d-flex align-items-center"
                      href={data.link}
                      title={data.name}
                    >
                      <BootstrapIcon icon={data.icon} size={14} />
                      <span className="text-link ms-2">{data.name}</span>
                    </a>
                  </li>
                ))}
              </ul> */}
              <div className="section">
                <div className="border-top"></div>
              </div>
            </div>
          </div>
          <div className="row align-items-center section-title">
            <div className="col-12">
              <div className="section-title mb-3 text-center">
                <p className="mb-2">Posts of</p>
                <h2 className="h3 mb-0 title">{author.name}</h2>
              </div>
            </div>
          </div>
          <div className="row gy-5 gx-md-5 justify-content-center">
            {posts.map((post, key) => (
              <div key={key} className="col-lg-4 col-md-6">
                <Post post={post} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const posts = await API.getPostsByAuthor(slug);

  const author = await API.getAuthor(slug);

  return {
    props: {
      posts,
      author,
    },
  };
};
