import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  flex-wrap: nowrap;
  gap: 8px;
  margin-bottom: ${p => p.theme.space[2]};
  padding-top: ${p => p.theme.space[0]};
  padding-bottom: ${p => p.theme.space[0]};
  box-shadow: 0 0 0 3px ${p => p.theme.colors.lightTheme}, 0 0 12px #333;
  background: ${p => p.theme.colors.whiteTheme};
`;

export const Status = styled.span`
  color: ${p => {
    return p.isOnline ? 'green' : 'red';
  }};
`;

export const Name = styled.p`
  padding-right: 2px;
  padding-left: 2px;
  margin-top: auto;
  margin-bottom: auto;
  text-align: center;
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: 20px;
`;
