import React, { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ReactLoading from "react-loading";

import Post from "./Post";
import useInfiniteQuery from "../hooks/useInfiniteQuery";
import { appApi } from "../services/api";
import type { Post as PostType } from "../types/all";
import { RootState } from "../store";
import { useSelector } from "react-redux";

type Props = {
  category?: string;
};

export default function Feed({ category }: Props) {
  const res = useInfiniteQuery<PostType>(appApi.endpoints.getPosts);

  const { searchTerm } = useSelector((state: RootState) => state.app);

  useEffect(() => {
    if (category) {
      res.trigger({ page: 1, category });
    }
  }, [category]);

  return (
    <>
      {searchTerm}

      {res.isLoading && (
        <div className="flex justify-center items-center h-[500px] w-full">
          <ReactLoading type="spin" color="#4f04f6" height={50} width={50} />
        </div>
      )}

      {!res.isLoading && res.data?.length < 1 && (
        <div className="flex justify-center items-center h-[500px] w-full">
          <h1 className="text-2xl font-bold text-red-500">No posts found</h1>
        </div>
      )}

      <AnimatePresence>
        <div className="mx-auto mt-2 max-w-2xl sm:mt-4 sm:pt-4 lg:mx-0 lg:max-w-none p-5">
          {res.data?.map((post) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
            >
              <Post post={post} />
            </motion.div>
          ))}
        </div>
      </AnimatePresence>
    </>
  );
}
