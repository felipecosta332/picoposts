import { PostCard } from "../components";

export const HomePage = () => {
  const posts = [
    {
      id: 1,
      title: "Lorem ipsum dolor sit amet.",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit nulla sequi tempore! Perferendis tempora, quas debitis doloribus cumque odit perspiciatis?",
      author: "Costa",
    },
    {
      id: 2,
      title: "Lorem ipsum dolor sit amet.",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit nulla sequi tempore! Perferendis tempora, quas debitis doloribus cumque odit perspiciatis?",
      author: "Costa",
    },
  ];

  return (
    <section>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </section>
  );
};
