import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDataContext } from "../Context/DataContext";
import PostItem from "../Components/PostItem";

function Blog() {
  const { posts, fetchAllPosts } = useDataContext();

  useEffect(() => {
    fetchAllPosts();
  }, []);

  return (
    <>
      <div>
        {posts &&
          posts.map(p => (
            <>
              <Link to={`/posts/${p.id}`} >
                <PostItem {...p} />
              </Link>
            </>
          ))}
      </div>
    </>
  );
}

export default Blog;
