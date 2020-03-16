import styled from "styled-components"

const PrimaryButton = styled.button`
  border-radius: 8px;
  background-color: #3277a8;
  color: white;
  text-align: center;
  padding: 10px;
  transition-duration: 300ms;
  cursor: pointer;
  margin: 5px;
  position: relative;

  &:hover {
    // background-color: white;
    // color: black;
    opacity: 0.5;
  }
`

export default PrimaryButton