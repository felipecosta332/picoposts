import { useEffect, useState, useRef } from "react";
import { useTitle } from "../hooks";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../firebase/config";
import { PostCard } from "../components";

export const HomePage = () => {
  const [posts, setPosts] = useState([]);
  const [toggle, setToggle] = useState(false);
  useTitle("Home");
  const postsRef = useRef(collection(db, "posts"));

  useEffect(() => {
    async function getPosts() {
      const data = await getDocs(postsRef.current);
      setPosts(
        data.docs.map((document) => ({
          ...document.data(),
          id: document.id,
        }))
      );
    }
    getPosts();
  }, [postsRef, toggle]);

  return (
    <section>
      {posts.map((post) => (
        <PostCard
          key={post.id}
          post={post}
          toggle={toggle}
          setToggle={setToggle}
        />
      ))}
    </section>
  );
};
