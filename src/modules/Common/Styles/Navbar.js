import styled from "styled-components";
export const Wrapper = styled.header`
  position: relative;
  height: 120px;
  background: skyblue;
`;

export const Logo = styled.div`
  position: fixed;
  top: 100px;
  left: 30px;
  height: 80px;
  width: 250px;
  /* border: 1px solid; */

  > img {
    position: absolute;
    top: 2px;
    left: 30px;
    width: 50%;
    height: 100%;
  }
  @media all and (max-width: 620px) {
    display: none;
  }
`;

export const RightItems = styled.div`
  /* border: 1px solid; */
  position: absolute;
  top: 40px;
  right: 100px;
  width: 600px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  color: white;
  font-size: 25px;

  @media all and (max-width: 620px) {
    font-size: 15px;
    width: 300px;
  }
`;