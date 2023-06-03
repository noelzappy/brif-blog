import React from "react";
import Moment from "react-moment";

import { Post } from "../types/all";

type PostProps = {
  post: Post;
};

export default function Post({ post }: PostProps) {
  return (
    <>
      <article
        key={post.id}
        className="flex max-w-xl flex-col items-start justify-between border-b border-gray-200 py-4 hover:bg-gray-50 cursor-pointer transition duration-15"
      >
        <a href={`/posts/${post.slug}`}>
          <div className="relative h-[500px] w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-[300px] lg:h-[500px] md:h-[400px]">
            <img
              src={post.image}
              alt={post.title}
              className="h-full w-full object-cover object-center"
            />
          </div>

          <div className="relative mt-5 flex items-center gap-x-4">
            <div className="text-sm leading-6">
              <p className="font-semibold text-gray-900">
                <span className="absolute inset-0" />
                {post.author.name}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-x-4 text-xs">
            <time dateTime={post.datePublished} className="text-gray-500">
              <Moment format="MMM DD, YYYY">{post.datePublished}</Moment>
            </time>
            <div className="flex items-center gap-x-2 text-gray-500">
              <a
                href={`/category/${post.category.slug}?id=${post.category.id}&name=${post.category.name}`}
                className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
              >
                {post.category.name}
              </a>
              <span className="hidden sm:inline-block">·</span>
              {post.tags.map((tag, index) => (
                <a
                  href="#"
                  className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                  key={index + tag}
                >
                  #{tag}
                </a>
              ))}
            </div>
          </div>
          <div className="group relative">
            <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
              <span>
                <span className="absolute inset-0" />
                {post.title}
              </span>
            </h3>
            <div
              className="mt-4 line-clamp-3 text-sm leading-6 text-gray-600"
              dangerouslySetInnerHTML={{ __html: post.excerpt }}
            />
          </div>
        </a>
      </article>
    </>
  );
}
