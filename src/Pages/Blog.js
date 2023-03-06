
import { Link } from "react-router-dom";
import { useDataContext } from "../Context/DataContext";
import PostItem from "../Components/PostItem";

function Blog() {
  const { posts } = useDataContext();


  return (
    <>
      <div>
        {posts &&
          posts.map(p => (
            <div   key={p.id} >
              <Link to={`/posts/${p.id}`}>
                <PostItem {...p} />
              </Link>
            </div>
          ))}
      </div>
    </>
  );
}

export default Blog;
