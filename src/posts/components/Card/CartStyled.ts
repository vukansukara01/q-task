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
const Title = styled.h3`
  margin: 0 0 15px 0;
  color: ${(props) => props.theme.colors.primary};
  font-weight: 700;
`;

const Body = styled.p`
  color: #616161;
`;

const UserName = styled.p`
  color: #616161;
`

export { CardWrapper, Title, Body, UserName };
