import styled from "styled-components";

export const CardContainer = styled.div`

`;

export const CreateButton = styled.button`
  padding: 10px;
  color: white;
  background-color: green;
  border-radius: 5px;
`;

export const InputField = styled.input.attrs({ type: "text" })`
  padding: 10px;
`;

export const InputLabel = styled.label`
  padding: 10px;
  
`;


export const FormGroup = styled.div`
	color: palevioletred;
    display: block;
	width: 300px;
	margin: 50px auto;
`;

export const Label = styled.label`
	margin-bottom: 0.5em;
    display: block;
`;


export const Input = styled.input`
	padding: 0.5em;
	color: palevioletred;
	background: papayawhip;
	border: none;
	border-radius: 3px;
	width: 100%;
	margin-bottom: 0.5em;
`;

export const Message = styled.label`
	margin-bottom: 0.5em;
	color: palevioletred;
    display: block;
`;
