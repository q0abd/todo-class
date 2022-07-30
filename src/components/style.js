import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  .flex {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  .biodiv {
    display: flex;
    align-items: center;
  }
`;

const Divchacha = styled.div`
  transform: scale(${({ state }) => (state === true ? 1 : 0)});
  transition: all 0.2s linear;
`;

const FlexBetween = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 700px;
  background-color: ${({ back }) => (back ? back : "white")};
  padding: ${({ padding }) => (padding ? `10px ${padding}px` : "0")};
  margin: ${({ margin }) => (margin ? `${margin}px 0` : "0 0 0 0")};
  border-radius: 5px;
  margin: 10px 0;
`;

const AddButton = styled.button`
  display: flex;
  z-index: 9;
  align-items: center;
  justify-content: center;
  height: 40px;
  padding: 0 10px;
  border-radius: 5px;
  border: ${({ border }) => (border ? `2px solid ${border}` : "none")};
  color: ${({ rang }) => (rang ? rang : "white")};
  background-color: ${({ back }) => (back ? back : "blue")};
  :active {
    transform: scale(0.9);
  }
  :hover {
    cursor: pointer;
  }
  margin-right: 10px;
`;
const Divacha = styled.div`
  width: 100%;
  margin-top: ${({ state }) => (state ? "0" : "-90px")};
`;
const InputSearch = styled.input`
  padding: 0 15px;
  z-index: 8;
  height: 40px;
  width: ${({ uzunligi }) => (uzunligi ? `${uzunligi}px` : "200px")};
  color: blue;
  font-size: 15px;
  margin-right: ${({ mar }) => (mar ? `0` : "10px")};
`;

export { Container, FlexBetween, Divacha, AddButton, InputSearch, Divchacha };
