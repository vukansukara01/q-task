import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSinglePost } from "../services/PostsService";
import { PostInterface } from "../model/PostModel";
import { PostBody, PostTitle, PostWrapper } from "./PostUi";
import Spiner from "../../components/spinner/Spiner";

interface PostI {
  helloMessage: string;
}
const Post: React.FC<PostI> = ({ helloMessage }) => {
  const [post, setPost] = useState<PostInterface>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  console.log(helloMessage + " " + Post.displayName);

  const { id } = useParams();

  const getData = async () => {
    setPost(await getSinglePost(id || ""));
    setIsLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <PostWrapper>
      {isLoading && <Spiner />}
      <PostTitle>{post?.title}</PostTitle>
      <PostBody>{post?.body}</PostBody>
    </PostWrapper>
  );
};

Post.displayName = "SinglePost";

export default Post;
