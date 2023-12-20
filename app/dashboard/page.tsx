import Post from "@/components/Post";
import { postsData } from "@/data";
import Link from "next/link";
import { getServerSession } from 'next-auth';
import { authOptions } from '../api/auth/[...nextauth]/route';
import{ redirect } from 'next/navigation'

const page = async () => {
  const session = await getServerSession(authOptions)
  
  if(!session) {
    redirect('/sign-in')
  }
  return (
    <div>
      <h1>My Posts</h1>
      <div>
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
        <div className="py-6">
          <p>No posts created yet.</p>
          <Link 
          className="underline"
          href={'/create-post'}>Create New</Link>
        </div>
      )}
      </div>
    </div>
  );
};

export default page;