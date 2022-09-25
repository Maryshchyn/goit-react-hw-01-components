import styled from '@emotion/styled';



export const StatsStat = styled.ul`
display: flex;
list-style: none;
margin: 0;
padding: 0;


`;
export const StatsItem = styled.li`

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1em;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
  width: 48px;
  padding: 10px;
  
  
`;
export const StatsLabel = styled.span`
font-size: 15px;
`;
export const StatsPercentage = styled.span`
font-size: 20px;
`;