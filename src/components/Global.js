import styled from "styled-components";

export const OpenCardMainContainer = styled.div`
min-height:90%;
max-height: 100%;

  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`;
export const XInput = styled.input`
  font-size: 1.5rem;
  background: transparent;
`;

export const Select = styled.select`
  font-size: 1.3rem;
  outline: none;
  color: ${(props) => (props.clr === "" ? "grey" : "black")};
`;
export const Grey_option = styled.option`
  color: grey;
`;
export const TD = styled.td`
  /* padding: 1rem 0; */.
`;

export const SpanDetail = styled.span`
font-weight: 600;
`;
export const Option_Text = styled.label`
 border-radius: 10px;
 background: #00000010;
 padding: 0 10px;
`; 


export default { TD, XInput, OpenCardMainContainer, Select, Grey_option ,SpanDetail};
