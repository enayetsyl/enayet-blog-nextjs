import CategoriesList from "@/components/CategoriesList";
import Post from "@/components/Post";
import { postsData } from "@/data";

export default function Home() {
  return (
    <>
      <CategoriesList />
      {postsData && postsData.length > 0 ? (
        postsData.map((post, idx) => (
          <Post
            key={idx}
            id={post.id}
            author={post.author}
            authorEmail={"test@gmail.com"}
            date={post.datePublished}
            thumbnail={post.thumbnail}
            title={post.title}
            content={post.content}
            links={post.links || []}
            category={post.category}
          />
        ))
      ) : (
        <p className="py-6">No post to display</p>
      )}
    </>
  );
}
