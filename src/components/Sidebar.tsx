import Image from "next/image";
import SidebarMenuItem from "./SidebarMenuItem";
import { HomeIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";
import { Category } from "../types/all";
import MenuItem from "./MenuItem";

type Props = {
  categories: Category[];
};

export default function Sidebar({ categories }: Props) {
  const router = useRouter();

  return (
    <div className="hidden sm:flex flex-col p-2 xl:items-start fixed h-full xl:ml-24">
      <div
        className="hoverEffect p-0 hover:bg-blue-100 xl:px-1"
        onClick={() => router.push("/")}
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
          active
          onClick={() => router.push("/")}
        />

        <div>
          {categories.map((category) => (
            <MenuItem
              text={category.name}
              key={category.id}
              active={false}
              onClick={() => router.push(`/category/${category.slug}`)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
