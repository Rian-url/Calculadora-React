import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: rgb(31,82,39);
  background: linear-gradient(137deg, rgba(31,82,39,1) 9%, rgba(9,121,39,1) 46%, rgba(95,255,77,1) 98%);
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Content = styled.div`
  background-color: #FFF;
  width: 50%;
  min-height: 350px;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
