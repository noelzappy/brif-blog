import Image from "next/image";
import SidebarMenuItem from "./SidebarMenuItem";
import { HomeIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";
import ReactLoading from "react-loading";

import MenuItem from "./MenuItem";
import { useGetCategoriesQuery } from "../services/api";

type Props = {};

export default function Sidebar({}: Props) {
  const router = useRouter();
  const { data: categories, isLoading } = useGetCategoriesQuery();

  const { slug } = router.query;

  return (
    <div className="hidden sm:flex flex-col p-2 xl:items-start fixed h-full xl:ml-24">
      <div
        className="hoverEffect p-0 hover:bg-blue-100 xl:px-1"
        onClick={() => {
          if (router.asPath === "/") return;
          router.push("/");
        }}
      >
        <Image
          width="70"
          height="70"
          src="/images/thebrif_logo.jpeg"
          alt="the brif logo"
          priority
        />
      </div>

      <div className="mt-4 mb-2.5 xl:items-start">
        <SidebarMenuItem
          text="Home"
          Icon={HomeIcon}
          active={router.pathname === "/"}
          onClick={() => {
            if (router.pathname === "/") return;

            router.push("/");
          }}
        />

        {isLoading && (
          <div className="flex justify-center items-center h-[500px] w-full">
            <ReactLoading type="spin" color="#4f04f6" height={50} width={50} />
          </div>
        )}

        <div>
          {categories &&
            categories.map((category) => (
              <MenuItem
                text={category.name}
                key={category.id}
                onClick={() => {
                  if (slug === category.slug) return;
                  router.push({
                    pathname: `/category/${category.slug}`,
                    query: { id: category.id, name: category.name },
                  });
                }}
                active={slug === category.slug}
              />
            ))}
        </div>
      </div>
    </div>
  );
}
