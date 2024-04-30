import { ArrowRight, ArrowUpRight, Calender, Clock } from "@/utils/Icons";
import { formatDate } from "@/utils/formatDate";
import { readingTime } from "@/utils/readingTime";
import { slugify } from "@/utils/slugify";
import { truncateString } from "@/utils/truncateString";
import Link from "next/link";
import BlurImage from "./BlurImage";
import Markdown from "./ReactMarkdown";

const Author = ({ author }) => {
  return (
    <div className="bg-white p-4 h-100">
      <div className="d-sm-flex">
        <div className="flex-shrink-0">
          <BlurImage
            className="img-fluid me-4 rounded-1"
            src={author.profile_image}
            alt={author.name}
            width={118}
            height={118}
          />
        </div>
        <div className="flex-grow-1 mt-3 mt-sm-0">
          <h4 className="text-dark mb-1">{author.name}</h4>
          <p className="mb-2 small">theBrif Author</p>
        </div>
      </div>
      <div className="opacity-50">
        <hr className="text-dark mt-4 mb-3" />
      </div>
      <div className="section-title mb-0">
        <span className="me-2">
          <Markdown
            content={truncateString(author.bio || "Author has no bio", 85)}
          />
        </span>
      </div>
      <Link
        href={`/authors/${author.slug}`}
        className="d-inline-block text-link active"
      >
        Read More <ArrowRight size={16} />
      </Link>
    </div>
  );
};
export default Author;
