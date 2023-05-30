import styled from "styled-components";

export const ActorsList = styled.ul`
display: flex;
flex-wrap: wrap;
padding: 20px;
`;

export const Actor = styled.li`
display: flex;
flex-direction: column;
flex-basis: calc((100% - 100px)/6);
margin: 5px;
`;

export const Foto = styled.img`
width: 100%;
flex-grow: 1;

`;
export const ActorsInfo = styled.div`
padding: 8px;
`;

export const InfoTitle = styled.h4`

`