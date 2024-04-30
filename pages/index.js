import BlurImage from "@/components/BlurImage";
import Layout from "@/components/Layout";
import Pagination from "@/components/Pagination";
import Post from "@/components/Post";
import Markdown from "@/components/ReactMarkdown";
import { formatDate } from "@/utils/formatDate";
import { ArrowRight, ArrowUpRight, Calender, Clock } from "@/utils/Icons";
import Link from "next/link";
import * as API from "@/libs/contentApi";

const Home = ({ featuredPosts, recentPosts, authors, tags }) => {
  return (
    <Layout>
      {/* Banner */}
      <section className="banner bg-white overflow-hidden">
        <div className="container">
          <div className="row">
            <div className="col-12 position-relative text-center">
              <h1 className="title display-4 d-inline mb-0">
                <BannerShape />
                <Markdown content={"Welcome to <br/>theBrif"} inline={true} />
              </h1>

              <p className="lead mt-4 mb-0">
                <Markdown
                  content="Informing & Fostering Meaningful conversations that empower the Young African Professional."
                  inline={true}
                />
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="featured-posts section">
        <div className="container">
          <div className="row align-items-center section-title">
            <div className="col-sm-7">
              <h2 className="h3 mb-0 title">
                <Markdown content="Featured Posts" inline={true} />
              </h2>
            </div>
            <div className="col-sm-5 text-end d-none d-sm-block">
              <Link href="/articles/" className="text-link lead active">
                <Markdown content="View All" inline={true} />
                <ArrowUpRight />
              </Link>
            </div>
          </div>
          <div className="row gy-5 gx-md-5">
            <div className="col-lg-4 col-md-6 order-0">
              <Post post={featuredPosts[0]} />
            </div>
            <div className="col-lg-4 col-md-12 order-2 order-lg-1">
              <div className="row gx-0 gx-md-5 gx-lg-0 gy-5">
                <div className="col-lg-12 col-md-6">
                  <Post post={featuredPosts[1]} compact={true} />
                </div>
                <div className="col-lg-12 col-md-6">
                  <Post post={featuredPosts[2]} compact={true} />
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 order-1 order-lg-2">
              <Post post={featuredPosts[3]} />
            </div>
          </div>
          {/*          <div className="d-block d-sm-none mt-5 pt-3">
            <div className="text-center">
              <Link href="/featured/" className="text-link lead active">
                <Markdown content="View All" inline={true} />
                <ArrowUpRight />
              </Link>
            </div>
  </div> */}
        </div>
      </section>

      {/* All Categories */}
      <section className="section bg-white">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 mx-auto">
              <div className="section-title text-center">
                <h2 className="h3 mb-2 title">
                  <Markdown content="Tags" inline={true} />
                </h2>
                <p className="mb-0">
                  <Markdown content="Popular Tags" inline={true} />
                </p>
              </div>

              <div className="row row g-3 taxonomy-lists">
                {tags.slice(0, 9).map((item, i) => (
                  <div className="col-md-4 col-6" key={item.id}>
                    <Link
                      href={`/tags/${item.slug}`}
                      className="bg-body text-dark px-3 py-2 d-flex lead"
                    >
                      <div className="flex-grow-1">
                        <span className="text-black">{item.name}</span>
                      </div>
                      <div className="flex-shrink-0 ms-2 icon">
                        <ArrowRight className="opacity-25 small" size={20} />
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Posts */}
      <section className="section">
        <div className="container">
          <div className="row align-items-center section-title">
            <div className="col-sm-7">
              <h2 className="h3 mb-0 title">
                <Markdown content="Recent Posts" inline={true} />
              </h2>
            </div>
            <div className="col-sm-5 text-end d-none d-sm-block">
              <Link href="/articles/" className="text-link lead active">
                <Markdown content="View All" inline={true} />
                <ArrowUpRight />
              </Link>
            </div>
          </div>
          <div className="row gy-5 gx-md-5">
            {recentPosts.slice(0, 6).map((post) => (
              <div key={post.id} className="col-lg-4 col-md-6">
                <Post post={post} />
              </div>
            ))}

            <div className="col-12 text-center pt-4 mt-5">
              <Pagination currentPage={1} numberOfPages={4} />
            </div>
          </div>
        </div>
      </section>

      {/* Top Authors */}
      <section className="section bg-white">
        <div className="container">
          <div className="row align-items-center section-title">
            <div className="col-sm-7">
              <h2 className="h3 mb-0 title">
                <Markdown content="Top Authors" inline={true} />
              </h2>
            </div>
            <div className="col-sm-5 text-end d-none d-sm-block">
              <Link href="/authors/" className="text-link lead active">
                <Markdown content="View All" inline={true} />
                <ArrowUpRight />
              </Link>
            </div>
          </div>
          <div className="row gy-5 gx-md-5">
            {authors.map((author) => (
              <div className="col-lg-4 col-md-6" key={author.id}>
                <Link
                  href={`/authors/${author.slug}`}
                  className="bg-body text-dark p-3 d-flex is-hoverable"
                  title={author.name}
                >
                  <div className="flex-shrink-0 me-3">
                    <BlurImage
                      className="shadow img-fluid rounded-1"
                      src={author.profile_image}
                      alt={author.name}
                      width={90}
                      height={90}
                    />
                  </div>
                  <div className="flex-grow-1">
                    <div className="d-flex flex-column h-100">
                      <div>
                        <h3 className="h4 text-dark mb-1 line-clamp clamp-1">
                          {author.name}
                        </h3>
                        <p className="mb-2 lh-1 line-clamp clamp-1">
                          {author.name}
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
          <div className="d-block d-sm-none mt-5 pt-3">
            <div className="text-center">
              <Link href="/authors/" className="text-link lead active">
                <Markdown content="View All" inline={true} />
                <ArrowUpRight />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Post of the Month */}
      {featuredPosts.slice(0, 1).map((post, i) => (
        <section
          key={i}
          className="post-of-the-month"
          style={{
            backgroundImage: `url(${post.feature_image})`,
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col-xl-7 col-lg-8 col-md-10 mx-auto text-center">
                <div className="mb-5 pb-4">
                  <h2 className="text-uppercase h6 text-black bg-white mb-0 d-inline-block px-3 py-2 lh-1">
                    POST OF THE MONTH
                  </h2>
                </div>

                <ul className="post-meta list-inline mb-4 text-light">
                  <li className="list-inline-item">
                    <Calender className="me-1 align-bottom" />
                    {formatDate(post.published_at)}
                  </li>
                  <li className="list-inline-item">•</li>
                  <li className="list-inline-item">
                    <Clock className="me-1 align-bottom" />
                    {post.reading_time} min read
                  </li>
                </ul>

                <h3 className="h2 post-title mb-4 position-relative">
                  <Link
                    className="text-white text-link stretched-link"
                    href={`/articles/${post.slug}`}
                  >
                    {post.title}
                  </Link>
                </h3>

                <div className="post-author">
                  <Link
                    href={`/authors/${post.primary_author.slug}`}
                    className="is-hoverable"
                    title={`Read all posts by - ${post.primary_author.name}`}
                  >
                    <BlurImage
                      src={post.primary_author.profile_image}
                      alt={post.primary_author.name}
                      className="w-auto me-3"
                      width={26}
                      height={26}
                    />
                  </Link>
                  <span className="text-light me-1">by </span>
                  <Link
                    className="text-link text-white"
                    href={`/authors/${post.primary_author.slug}`}
                    title={`Read all posts by - ${post.primary_author.name}`}
                  >
                    {post.primary_author.name}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}
    </Layout>
  );
};
export default Home;

// Export Props
export const getStaticProps = async () => {
  const featuredPosts = await API.getFeaturedPosts();
  const recentPosts = await API.getRecentPosts();
  const authors = await API.getAuthors();
  const settings = await API.getSettings();
  const tags = await API.getTags();

  return {
    props: {
      featuredPosts,
      recentPosts,
      authors,
      tags,
    },
  };
};

// BannerShape
export const BannerShape = () => {
  return (
    // prettier-ignore
    <svg className="shape text-primary" width="46" height="50" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M15 46A91.9 91.9 0 0 0 2 43.8c-1-.1-1.8.5-1.9 1.5-.1.9.6 1.7 1.4 1.8a87 87 0 0 1 12.7 2.3c.9.3 1.8-.2 2.1-1.1.3-1-.3-1.9-1.1-2.1ZM28.1 29c-7-7-14.7-13.2-21.5-20.5-.6-.7-1.7-.7-2.3 0-.7.6-.8 1.6-.1 2.3C11 18 18.8 24.2 25.7 31.3c.7.7 1.7.7 2.4 0 .6-.6.7-1.7 0-2.3ZM41 1.8l.7 12.1c0 1 .8 1.7 1.7 1.6 1 0 1.6-.8 1.6-1.7l-.6-12.2c0-1-.8-1.6-1.8-1.6-.8 0-1.6.9-1.5 1.8Z" fill="currentColor"/></svg>
  );
};
