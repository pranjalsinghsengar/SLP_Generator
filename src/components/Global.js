import styled from "styled-components";

export const OpenCardMainContainer = styled.div`
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`;
export const XInput = styled.input`
  font-size: 1.8rem;
`;

export const Select = styled.select`
  font-size: 1.3rem;
  outline: none;
  color: ${(props) => (props.clr == "" ? "grey" : "black")};
`;
export const Grey_option = styled.option`
  color: grey;
`;
export const TD = styled.td`
  /* padding: 1rem 0; */
`;
export default { TD, XInput, OpenCardMainContainer, Select, Grey_option };
