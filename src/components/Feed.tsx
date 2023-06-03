import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

import Post from "./Post";
import useInfiniteQuery from "../hooks/useInfiniteQuery";
import { appApi } from "../services/api";
import type { Post as PostType } from "../types/all";

export default function Feed() {
  const [posts, setPosts] = useState([]);

  const res = useInfiniteQuery<PostType>(appApi.endpoints.getPosts);

  return (
    <div className="xl:ml-[370px] border-l border-r border-gray-200  xl:min-w-[576px] sm:ml-[73px] flex-grow max-w-xl">
      <div className="flex py-2 px-3 sticky top-0 z-50 bg-white border-b border-gray-200">
        <h2 className="text-lg sm:text-xl font-bold cursor-pointer">Home</h2>
      </div>

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
    </div>
  );
}
