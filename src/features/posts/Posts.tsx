import React, { useEffect, useState } from "react";
import Card from "./components/Card/Card";
import { getAllPosts } from "../services/PostsService";
import { PostInterface } from "../model/PostModel";
import { PostsWrapper } from "./PostsUi";
import Search from "../../components/search/Search";
import { UserInterface } from "../model/UserInterface";
import { getAllUsers } from "../services/UserService";
import { useNavigate } from "react-router-dom";
import Post from "../post/Post";
import Spiner from "../../components/spinner/Spiner";

interface PostsI {
  helloMessage: string;
}

const Posts: React.FC<PostsI> = ({ helloMessage }) => {
  const [postsList, setPostsList] = useState<PostInterface[]>([]);
  const [users, setUsers] = useState<UserInterface[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const navigate = useNavigate();

  console.log(helloMessage + " " + Post.displayName);

  const getData = async () => {
    setUsers(await getAllUsers());
    setPostsList(await getAllPosts());
    setIsLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  const getUserById = (id: number): UserInterface | null => {
    for (const element of users) {
      if (element.id === id) {
        return element;
      }
    }
    return null;
  };
  const openPost = (id: number) => {
    navigate(`/post/${id}`);
  };

  return (
    <div>
      {isLoading && <Spiner />}
      <Search setSearchTerm={setSearchTerm} helloMessage={helloMessage} />
      <PostsWrapper>
        {postsList
          .filter((post) => {
            let list: UserInterface[] = users.filter((e) =>
              e.name.toLowerCase().startsWith(searchTerm.toLowerCase())
            );
            for (const element of list) {
              if (element.id === post.userId) {
                return true;
              }
            }
            return false;
          })
          .map((item: PostInterface) => {
            return (
              <Card
                user={getUserById(item.userId)}
                id={item.id}
                title={item.title}
                body={item.body}
                handleOpenPost={openPost}
              />
            );
          })}
      </PostsWrapper>
    </div>
  );
};

Post.displayName = "Posts";

export default Posts;
