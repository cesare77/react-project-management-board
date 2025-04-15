// import "./Header.css";
import styled from "styled-components";

const HeaderWrapper = styled.div`
  background-color: blue;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const Title = styled.h1`
  height: 64px;
  pointer-events: none;
`;

function Header() {
  return (
    <div className="Header-wrapper">
      <h1>React Project Management Board</h1>
    </div>
  );
}

export default Header;
