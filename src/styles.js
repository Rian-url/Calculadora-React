import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: rgb(1,29,5);
  background: linear-gradient(25deg, rgba(1,29,5,1) 9%, rgba(9,121,39,1) 62%, rgba(26,255,0,1) 100%);
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
