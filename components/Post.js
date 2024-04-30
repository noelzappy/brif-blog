import BlurImage from "@/components/BlurImage";
import { formatDate } from "@/utils/formatDate";
import { Calender, Clock } from "@/utils/Icons";
import Link from "next/link";

const Post = ({ post, compact, status: postStatus }) => {
  const {
    excerpt,
    feature_image,
    published_at,
    reading_time,
    slug,
    title,
    primary_author: author,
  } = post;

  const status = postStatus
    ? postStatus
    : post.featured
    ? "Featured"
    : undefined;

  return (
    <article className="bg-white d-flex flex-column h-100">
      {!compact && (
        <div className="post-image">
          <Link href={`/articles/${slug}`} className="d-block" title={title}>
            <BlurImage
              className="w-100 h-auto"
              src={feature_image}
              alt={title}
              width="368"
              height="238"
            />
          </Link>
        </div>
      )}
      <div className={`p-4 pb-0 ${status ? "position-relative" : ""}`}>
        {status && <p className="post-badge mb-0">{status}</p>}
        <ul className={`post-meta list-inline mb-3 ${status ? "mt-3" : ""}`}>
          <li className="list-inline-item">
            <Calender className="me-1 align-bottom" />
            {formatDate(published_at)}
          </li>
          <li className="list-inline-item">•</li>
          <li className="list-inline-item">
            <Clock className="me-1 align-bottom" />
            {reading_time} min read
          </li>
        </ul>
        <div className="position-relative">
          <h3 className="h4 post-title mb-2 line-clamp clamp-2">
            <Link
              href={`/articles/${slug}`}
              className="text-link stretched-link"
              title={title}
            >
              {title}
            </Link>
          </h3>
          <p className={`mb-0 line-clamp ${compact ? "clamp-2" : "clamp-3"}`}>
            {excerpt}
          </p>
        </div>
      </div>

      <div className="post-author mt-auto p-4 pt-3">
        <Link
          href={`/authors/${author.slug}`}
          className="is-hoverable"
          title={`Read all posts by - ${author.name}`}
        >
          <span className="d-inline-block" key={author.slug}>
            <BlurImage
              src={author.profile_image}
              alt={author.name}
              className="rounded-circle"
              width={26}
              height={26}
            />
          </span>
        </Link>

        <Link
          className="text-link ms-2 is-hoverable"
          href={`/authors/${author.slug}`}
          title={`Read all posts by - ${author.name}`}
        >
          {author.name}
        </Link>
      </div>
    </article>
  );
};
export default Post;
