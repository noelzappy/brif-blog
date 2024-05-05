import BlurImage from "@/components/BlurImage";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import Markdown from "@/components/ReactMarkdown";
import { ArrowUpRight, EditCircle } from "@/utils/Icons";
import { sortArrayByCount } from "@/utils/sortArrayByCount";
import Link from "next/link";
import * as API from "@/libs/contentApi";
import { useRouter } from "next/router";
import { useEffect } from "react";

const About = ({ posts, about, authors }) => {
  const router = useRouter();

  useEffect(() => {
    router.replace("https://brifhq.com/about");
  }, []);

  return null;
};
export default About;

// Export Props
export const getStaticProps = () => {
  return {
    props: {},
  };
};
