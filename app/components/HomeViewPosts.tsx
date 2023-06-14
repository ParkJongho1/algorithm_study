import { getAllPosts } from "../../service/posts";
import { Metadata } from "next";
import Categoires from "./Categoires";
import PostList from "./PostList";

export default async function HomeViewPosts() {
   const posts = await getAllPosts();

   return (
      <>
         <div style={{ display: "flex" }}>
            {/* @ts-expect-error Async Server Component */}
            <Categoires />
            {/* @ts-expect-error Async Server Component */}
            <PostList />
         </div>
      </>
   );
}
