import styled from "styled-components";

export const Container=styled.div`
   height: 60px;
   width: 100vw;
   background-color: gray;
`
export const Menu=styled.nav`
  display:flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  padding: 0 4rem ;
  ul{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    
    li{
        list-style-type: none;
    }
    .logo{
        padding-right: 2rem;
    }
    
  }
`