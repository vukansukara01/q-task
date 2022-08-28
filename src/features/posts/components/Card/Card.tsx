import React from "react";
import { CardWrapper, Title, Body, UserName } from "./CartUI";
import { UserInterface } from "../../../model/UserInterface";

interface CardI {
  user: UserInterface | null;
  id: number;
  title: string;
  body: string;
  handleOpenPost(id: number): void;
}

const Card: React.FC<CardI> = ({ user, id, title, body, handleOpenPost }) => {
  return (
    <CardWrapper onClick={() => handleOpenPost(id)}>
      <div>
        <Title>{title}</Title>
        <Body>{body}</Body>
      </div>
      <UserName>{user?.name}</UserName>
    </CardWrapper>
  );
};

export default Card;
