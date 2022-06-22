import styled from "styled-components";

export const Container = styled.section`
background-color: #0080ed;
`;

export const Header = styled.header`
display: flex;
justify-content: center;
align-items: center;
height: 20vh;
`;

export const Title = styled.h1`
color: #ffff;
@import url("https://fonts.googleapis.com/css2?family=Ubuntu&display=swap");
font-family: "Ubuntu", sans-serif;
`;

export const BoxIpt = styled.div`
height: 25vh;
display: flex;
justify-content: center;
align-items: center;
`;

export const Form = styled.form`
width: 80vw;
background-color: #ffff;
`;

export const Input = styled.input`
outline: none;
width: 65vw;
height: 6vw;
border: none;
`;

export const BtnIpt = styled.button`
box-sizing: border-box;
border: none;
outline: none;
height: 7vw;
background-color: #ffff;
font-size: 1rem;
padding: 0.6rem 0.5rem 0.5rem;
font-weight: 900;
color: #0080ed;
`;

export const Item = styled.li`
height: 30px;
border:1px solid black;
display: flex;
justify-content: flex-start;
align-items: center;
list-style: none;
font-size: 1.2rem;
`;

export const ItemText = styled.span`
font-family: "Ubuntu", sans-serif;
border-bottom: 2px solid #ffff;
`;

export const ItemBtn = styled.button`
border: none;
outline: none;
background-color: #0080ed;
`;

export const ImgBtn = styled.img`
background-color: #0080ed;
box-sizing: border-box;
outline: none;
border-style: none;
width: 4vw;
display: flex;
justify-content: center;
align-items: center;
`;

export const Footer = styled.footer`
display: flex;
justify-content: center;
align-items: center;
font-family: "Ubuntu", sans-serif;
color: #ffff;
font-size: 0.7rem;
`;