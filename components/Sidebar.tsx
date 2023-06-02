import Image from "next/image";
import SidebarMenuItem from "./SidebarMenuItem";
import { HomeIcon } from "@heroicons/react/solid";
import {
  BellIcon,
  BookmarkIcon,
  ClipboardIcon,
  DotsCircleHorizontalIcon,
  DotsHorizontalIcon,
  HashtagIcon,
  InboxIcon,
  UserIcon,
} from "@heroicons/react/outline";
import { useRouter } from "next/router";

export default function Sidebar() {
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
        />
      </div>

      <div className="mt-4 mb-2.5 xl:items-start">
        <SidebarMenuItem text="Home" Icon={HomeIcon} active />
        <SidebarMenuItem text="Explore" Icon={HashtagIcon} active />

        <div>
          <SidebarMenuItem text="Notifications" Icon={BellIcon} active />
          <SidebarMenuItem text="Messages" Icon={InboxIcon} active />
          <SidebarMenuItem text="Bookmarks" Icon={BookmarkIcon} active />
          <SidebarMenuItem text="Lists" Icon={ClipboardIcon} active />
          <SidebarMenuItem text="Profile" Icon={UserIcon} active />
          <SidebarMenuItem text="More" Icon={DotsCircleHorizontalIcon} active />
        </div>
      </div>
    </div>
  );
}
