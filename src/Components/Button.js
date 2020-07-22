import styled from 'styled-components';

export const Button = styled.button`
    height: 25px;
    width: 25px;
`

export const RemoveButton = styled(Button)`
margin: 0 5px;
font-weight: bold;
font-size: 16px;
color: var(--red-color);
background-color: inherit;
border: none;
cursor: pointer;
height: 25px;
width: 25px;
`