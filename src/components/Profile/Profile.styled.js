import styled from '@emotion/styled';

export const ProfileProf = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 100px;
    margin-top: 100px;
     
    
  
    
`;
export const ProfileDescription = styled.div`
display: flex;
flex-direction: column;
align-items: center;
border: solid;
border-radius: 10px;
border: inherit;

box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  
`;
export const ProfileAvatar = styled.img`
border-radius: 80%;
  padding-top: 100px;
  width: 300px;
`;
export const ProfileName = styled.p`
font-size: 25px;
font-weight: bolder;
margin-top: 40px;
`;
export const ProfileTag = styled.p`
font-size: 20px;
font-weight: 400;
margin: 0;
padding: 20px;
color: rgb(206, 190, 190);
`;
export const ProfileLocation = styled.p`
font-size: 20px;
font-weight: 400;
color: rgb(206, 190, 190);
margin: 0;
margin-bottom: 40px;
`
export const ProfileStats = styled.ul`
display: flex;
padding: 0;
margin: 0;


`;
export const ProfileLi = styled.li`
list-style-type: none;
display: flex;
flex-direction: column;
gap: 10px;
align-items: center;
border: 1px solid #dddddd;
text-align: left;
padding: 20px;

width: 154px;
`;
export const ProfileLabel = styled.span`
display: flex;
gap: 1em;
font-size: 20px;
font-weight: 400;
color: rgb(145, 145, 135);
`;
export const ProfileQuantity = styled.span`
gap: 1em;
font-size: 20px;
font-weight: 700;
`;
