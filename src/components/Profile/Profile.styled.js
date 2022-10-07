import styled from 'styled-components';

export const Profile = styled.div`
  margin-top: ${p => p.theme.space[2]};
  margin-bottom: ${p => p.theme.space[2]};
  background-color: white;
  -webkit-box-shadow: 0px 0px 13px 5px #818181;
  box-shadow: 0px 0px 13px 5px #818181;
  border-radius: 4px;
`;

export const Description = styled.div`
  padding-top: ${p => p.theme.space[2]};
  padding-bottom: ${p => p.theme.space[2]};
  text-align: center;
`;

export const Avatar = styled.img`
  width: 50%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: ${p => p.theme.space[2]};
  border-radius: 50%; /* Радиус скругления */
  box-shadow: 0 0 0 3px ${props => props.theme.colors.lightTheme}, 0 0 12px #333; /* Параметры теней */
`;

export const Name = styled.p`
  margin-bottom: ${p => p.theme.space[0]};
  font-weight: ${p => p.theme.fontWeights.bold};
  line-height: 1.14;
  letter-spacing: 0.03em;
  text-transform: uppercase;
`;

export const Tag = styled.p`
  margin-bottom: 4px;
  font-weight: ${p => p.theme.fontWeights.normal};
  line-height: 1.71;
  letter-spacing: 0.03em;
  color: ${props => props.theme.colors.darkTheme};
`;

export const Location = styled.p`
  font-weight: ${p => p.theme.fontWeights.normal};
  line-height: 1.71;
  letter-spacing: 0.03em;
  color: ${props => props.theme.colors.darkTheme};
`;

export const Stats = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(3, 33.3%);
  padding-top: ${p => p.theme.space[1]};
  padding-bottom: ${p => p.theme.space[1]};
  border-top: solid ${props => props.theme.colors.darkTheme} 1px;
  background-color: ${props => props.theme.colors.lightTheme};
`;
export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;

  &:not(:last-child) {
    border-right: solid ${props => props.theme.colors.darkTheme} 1px;
  }
`;

export const Label = styled.span`
  padding-bottom: ${p => p.theme.space[0]};
`;

export const Quantity = styled.span`
  font-weight: ${p => p.theme.fontWeights.bold};
  line-height: 1.14;
  letter-spacing: 0.03em;
`;
