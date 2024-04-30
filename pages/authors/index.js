import Author from "@/components/Author";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import Post from "@/components/Post";
import { ArrowUpRight } from "@/utils/Icons";
import Link from "next/link";
import * as API from "@/libs/contentApi";

export default function Authors({ authors, posts }) {
  return (
    <Layout metaTitle="All Authors">
      <PageHeader title="Authors" />

      <section className="section pt-0">
        <div className="container">
          <div className="row gy-4">
            {authors.map((author, i) => (
              <div key={i} className="col-lg-6">
                <Author author={author} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <hr className="bg-primary" />
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="row align-items-center section-title">
            <div className="col-sm-7">
              <h2 className="h3 mb-0 title">Recent Articles</h2>
            </div>
            <div className="col-sm-5 text-end d-none d-sm-block">
              <Link href="/articles/" className="text-link lead active">
                <span>All Posts</span>
                <ArrowUpRight />
              </Link>
            </div>
          </div>
          <div className="row gy-5 gx-md-5">
            {posts.slice(0, 3).map((post, i) => (
              <div key={post.id} className="col-lg-4 col-md-6">
                <Post post={post} />
              </div>
            ))}
          </div>
          <div className="d-block d-sm-none mt-5 pt-3">
            <div className="text-center">
              <Link href="/articles/" className="text-link lead active">
                <span>All Posts</span>
                <ArrowUpRight />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const authors = await API.getAuthors();

  const recentPosts = await API.getRecentPosts();

  return {
    props: {
      authors,
      posts: recentPosts,
    },
  };
};
