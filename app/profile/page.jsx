"use client";
import ProfileCard from "@components/Profile";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const MyProfile = () => {
  const router = useRouter();

  const { data: session } = useSession();

  const [posts, setPosts] = useState([]);

  const handleEdit = (post) => {
    router.push(`/update-prompt?id=${post._id}`);
  };

  const handleDelete = async (post) => {
    const hasConfirmed = window.confirm(
      "Are you sure you want to delete this post?"
    );
    if (hasConfirmed) {
      try {
        await fetch(`/api/prompt/${post._id.toString()}`, {
          method: "DELETE",
        });

        const filteredPosts = posts.filter((p) => p._id !== post._id);

        setPosts(filteredPosts);
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch(`/api/users/posts/${session?.user?.id}`);
      const data = await res.json();
      setPosts(data);
    };

    if (session?.user?.id) fetchPosts();
  }, []);

  return (
    <>
      <ProfileCard
        name="My"
        description="This is my profile"
        data={posts}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
    </>
  );
};

export default MyProfile;
