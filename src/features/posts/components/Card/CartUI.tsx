import styled from "styled-components";

const CardWrapper = styled.div`
  width: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 350px;
  box-shadow: rgba(100, 100, 111, 0.2) 0 7px 29px 0;
  border-radius: 8px;
  padding: 20px 10px;
  margin: 20px;
  background: white;
`;
const Title = styled.div`
  margin: 0 0 15px 0;
  color: #66defb;
  font-weight: 700;
`;

const Body = styled.div`
  color: #616161;
`;

const UserName = styled.div`
  color: #616161;
`

export { CardWrapper, Title, Body, UserName };
