"use client";

import Profile from "@components/Profile";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const page = ({ params }) => {
  const searchParams = useSearchParams();
  const promptName = searchParams.get("name");

  const [userPost, setUserPost] = useState([]);

  useEffect(() => {
    const fetchUserPost = async () => {
      const res = await fetch(`/api/users/posts/${params.id}`);
      const data = await res.json();
      setUserPost(data);
    };

    if (params.id) fetchUserPost();
  }, [params.id]);

  return (
    <>
      <Profile
        name={promptName}
        data={userPost}
        description={`Welcome to ${promptName}'s personalized profile page. Explore ${promptName}'s exceptional prompts and be inspired by the power of their imagination`}
      />
    </>
  );
};

export default page;
