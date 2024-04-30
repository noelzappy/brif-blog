import BlurImage from "@/components/BlurImage";
import Layout from "@/components/Layout";
import Post from "@/components/Post";
import MarkdownSyntaxHighlighter from "@/components/ReactMarkdownSyntaxHighlighter";
import SharePost from "@/components/SharePost";
import * as API from "@/libs/contentApi";
import { useScript } from "@/libs/useScript";
import { ArrowUpRight, Calender, Clock } from "@/utils/Icons";
import { formatDate } from "@/utils/formatDate";
import { readingTime } from "@/utils/readingTime";
import { slugify } from "@/utils/slugify";
import Link from "next/link";

export default function PostPage({ post }) {
  const {
    title,
    html,
    authors,
    featured,
    published_at: date,
    excerpt,
    reading_time: readingTime,
    feature_image_caption: caption,
    primary_author: author,
    feature_image: image,
    slug,
    tags,
  } = post;

  const pageUrl = `https://yourwebsite.com/post/${slug}`;

  return (
    <Layout metaTitle={title} metaDescription={excerpt} ogImage={image}>
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
                  {readingTime} min reading in
                  <span className="mx-2">—</span>
                </p>

                <h1 className="h2 mb-3">{title}</h1>
                <div
                  className="mb-4 pb-1"
                  dangerouslySetInnerHTML={{
                    __html: html,
                  }}
                />

                <div className="post-author d-flex flex-wrap align-items-center">
                  <p className="mb-0 me-3 lh-base">
                    <Link
                      href={`/author/${author.slug}`}
                      className="is-hoverable"
                      title={`Read all posts by - ${author.name}`}
                    >
                      <BlurImage
                        src={author.profile_image}
                        alt={author}
                        className="w-auto"
                        width="26"
                        height="26"
                      />
                    </Link>
                    <span className="ms-3 me-2">by</span>
                    <Link
                      className="text-link"
                      href={`/author/${author.slug}`}
                      title={`Read all posts by - ${author.name}`}
                    >
                      {author.name}
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
                    Published at {formatDate(date)}
                  </p>
                </div>
              </div>
            </div>

            {image && (
              <div className="col-lg-12">
                <BlurImage
                  className="w-100 h-auto"
                  src={image}
                  alt={title}
                  width={1020}
                  height={660}
                />
              </div>
            )}

            <div className="col-xl-9 col-lg-10">
              <div className={`section ${image == null ? "pt-0" : ""}`}>
                <div className="content">
                  <MarkdownSyntaxHighlighter content={html} />
                </div>

                <div className="d-block d-sm-flex justify-content-between align-items-center mt-5 pt-3">
                  <ul className="taxonomy-lists list-inline">
                    <li className="list-inline-item d-block mb-3">Tags: </li>
                    {tags?.map((tag, i) => (
                      <li key={i} className="list-inline-item">
                        <Link
                          href={`/tags/${slugify(tag)}`}
                          className="bg-white"
                        >
                          <span className="small me-1">#</span>
                          {tag}
                        </Link>
                      </li>
                    ))}
                  </ul>

                  <SharePost title={title} pageUrl={pageUrl} />
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
                <Link href="/blog/" className="text-link lead active">
                  All Posts
                  <ArrowUpRight />
                </Link>
              </div>
            </div>

            <div className="row gy-5 g-md-5">
              {relatedPosts.map((post, key) => (
                <div key={key} className="col-lg-4 col-md-6">
                  <Post post={post} compact={true} status="Related" />
                </div>
              ))}
              {/*recentPosts.map((post, key) => (
                <div key={key} className="col-lg-4 col-md-6">
                  <Post
                    post={post}
                    authors={allAuthors}
                    compact={true}
                    status="New"
                  />
                </div>
              )) */}
            </div>

            <div className="d-block d-sm-none mt-5 pt-3">
              <div className="text-center">
                <Link href="/blog/" className="text-link lead active">
                  All Posts
                  <ArrowUpRight />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {useScript("/js/lightense.min.js", "body", true)}
    </Layout>
  );
}

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps = async () => {
  const post = await API.getSinglePost("post-2-lorem-ipsum-copy-copy-copy");

  console.log("DDDDDDD: ", post);
  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post,
    },
    revalidate: 1,
  };
};
