import styled from "styled-components";

const PostWrapper = styled.div`
  width: 50%;
  box-shadow: rgba(100, 100, 111, 0.2) 0 7px 29px 0;
  border-radius: 8px;
  padding: 20px 10px;
  margin: 20px;
  background: white;
`;
const PostTitle = styled.div`
  color: #66defb;
  font-weight: 700;
`;
const PostBody = styled.div`
  color: #616161;
`;

export { PostWrapper, PostTitle, PostBody };
