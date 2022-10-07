import styled from 'styled-components';

export const Container = styled.section`
  box-shadow: 0 0 0 3px ${props => props.theme.colors.lightTheme}, 0 0 12px #333;
  margin-bottom: ${p => p.theme.space[2]};
`;

export const Title = styled.h2`
  background-color: white;
  text-align: center;
  padding-top: ${p => p.theme.space[1]};
  padding-bottom: ${p => p.theme.space[1]};
`;

export const StatList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  width: 100%;
  text-align: center;
  color: white;
  background-color: ${p => p.color};
`;

export const Label = styled.span`
  padding-top: ${p => p.theme.space[1]};
  padding-bottom: ${p => p.theme.space[1]};
`;

export const Percentage = styled.span`
  padding-bottom: ${p => p.theme.space[1]};
  font-size: 18px;
`;
