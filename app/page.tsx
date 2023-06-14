import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import HomeViewPosts from "./components/HomeViewPosts";

export default function Home() {
   return (
      <div style={{ marginTop: "5rem" }}>
         {/* @ts-expect-error Async Server Component */}
         <HomeViewPosts />
      </div>
   );
}
