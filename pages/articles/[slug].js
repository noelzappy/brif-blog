import BlurImage from "@/components/BlurImage";
import Layout from "@/components/Layout";
import Post from "@/components/Post";
import MarkdownSyntaxHighlighter from "@/components/ReactMarkdownSyntaxHighlighter";
import SharePost from "@/components/SharePost";
import { ArrowUpRight, Calender, Clock } from "@/utils/Icons";
import { formatDate } from "@/utils/formatDate";
import Link from "next/link";
import * as API from "@/libs/contentApi";
import Loading from "@/components/Loading";
import { useCallback, useEffect } from "react";
import useSubscribeDialog from "hooks/useSubscribeDialog";

export default function PostPage({ post, relatedPosts }) {
  const { open, setOpen, doNotShowAgain, setDoNotShowAgain } =
    useSubscribeDialog();

  const handleScroll = useCallback(() => {
    if (window.scrollY > window.innerHeight * 0.25) {
      // console.log("Hello");
      if (doNotShowAgain) {
        return;
      }

      // TODO: Implement subscribe dialog
      setOpen(true);
    }
  }, [doNotShowAgain, setOpen]);

  useEffect(() => {
    if (!window) return;
    window.addEventListener("scroll", handleScroll);
  }, [handleScroll]);

  if (!post) {
    return <Loading />;
  }

  return (
    <Layout
      metaTitle={post.title}
      metaDescription={post.excerpt}
      ogImage={post.feature_image}
    >
      <section className="bg-body">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-9 col-lg-10">
              <div className="section">
                <p className="mb-4 text-muted">
                  <span
                    className="d-inline-block"
                    style={{ transform: "translateY(-2px)" }}
                  >
                    <Clock className="me-2" />
                  </span>
                  {post.reading_time} min reading
                  {/* post.tags.map((tag, i) => (
                    <span className="mx-2">—</span>
                    <Link
                      key={tag.id}
                      className="text-link"
                      href={`/tags/${tag.slug}`}
                    >
                      {tag.name}
                    </Link>
                  )) */}
                </p>

                <h1 className="h2 mb-3">{post.title}</h1>
                <p className="mb-4 pb-1">{post.excerpt}...</p>

                <div className="post-author d-flex flex-wrap align-items-center">
                  <p className="mb-0 me-3 lh-base">
                    <Link
                      href={`/author/${post.primary_author.slug}`}
                      className="is-hoverable"
                      title={`Read all posts by - ${post.primary_author.name}`}
                    >
                      <BlurImage
                        src={post.primary_author.profile_image}
                        alt={post.primary_author.name}
                        className="rounded-circle"
                        width={26}
                        height={26}
                      />
                    </Link>
                    <span className="ms-3 me-2">by</span>
                    <Link
                      className="text-link"
                      href={`/author/${post.primary_author.slug}`}
                      title={`Read all posts by - ${post.primary_author.name}`}
                    >
                      {post.primary_author.name}
                    </Link>
                  </p>
                  <span className="me-3">—</span>
                  <p className="mb-0 lh-base">
                    <span
                      className="d-inline-block"
                      style={{ transform: "translateY(-2px)" }}
                    >
                      <Calender className="me-2" />
                    </span>
                    Published at {formatDate(post.published_at)}
                  </p>
                </div>
              </div>
            </div>

            {post.feature_image && (
              <div className="col-lg-12">
                <BlurImage
                  className="w-100 h-auto rounded-3"
                  src={post.feature_image}
                  alt={post.title}
                  width={`1020`}
                  height={`660`}
                />
              </div>
            )}

            <div className="col-xl-9 col-lg-10">
              <div
                className={`section ${
                  post.feature_image == null ? "pt-0" : ""
                }`}
              >
                <div className="content">
                  <MarkdownSyntaxHighlighter content={post.html} />
                </div>

                <div className="d-block d-sm-flex justify-content-between align-items-center mt-5 pt-3">
                  <ul className="taxonomy-lists list-inline">
                    <li className="list-inline-item d-block mb-3">Tags: </li>
                    {post.tags.map((tag, i) => (
                      <li key={tag.id} className="list-inline-item">
                        <Link href={`/tags/${tag.slug}`} className="bg-white">
                          <span className="small me-1">#</span>
                          {tag.name}
                        </Link>
                      </li>
                    ))}
                  </ul>

                  <SharePost title={post.title} slug={post.slug} />
                </div>
              </div>

              <hr style={{ opacity: ".15" }} />
            </div>
          </div>

          <div className="section">
            <div className="row align-items-center section-title">
              <div className="col-sm-7">
                <h2 className="h3 mb-0 title">Keep Reading</h2>
              </div>
              <div className="col-sm-5 text-end d-none d-sm-block">
                <Link href="/articles/" className="text-link lead active">
                  All Posts
                  <ArrowUpRight />
                </Link>
              </div>
            </div>

            <div className="row gy-5 g-md-5">
              {relatedPosts?.map((post, key) => (
                <div key={key} className="col-lg-4 col-md-6">
                  <Post post={post} compact={true} status="Related" />
                </div>
              ))}
              {[].map((post, key) => (
                <div key={key} className="col-lg-4 col-md-6">
                  <Post post={post} compact={true} status="New" />
                </div>
              ))}
            </div>

            <div className="d-block d-sm-none mt-5 pt-3">
              <div className="text-center">
                <Link href="/articles/" className="text-link lead active">
                  All Posts
                  <ArrowUpRight />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export const dynamicParams = true;

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const post = await API.getSinglePost(slug);

  if (!post) {
    return {
      notFound: true,
    };
  }

  const relatedPosts = await API.getRelatedPosts(post.primary_tag.slug);

  return {
    props: {
      post,
      relatedPosts,
    },
  };
};
