import PropTypes from 'prop-types';

import {
  Title,
  StatList,
  Item,
  Label,
  Percentage,
  Container,
} from './Statistics.styled';

export const Statistics = ({ data, title }) => {
  return (
    <Container>
      {{ title } && <Title>{title}</Title>}
      <StatList>
        {data.map(item => (
          <Item key={item.id} color={getRandomHexColor()}>
            <Label>{item.label}</Label>
            <Percentage>{item.percentage}</Percentage>
          </Item>
        ))}
      </StatList>
    </Container>
  );
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
// console.log(getRandomHexColor());

Statistics.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
  title: PropTypes.string,
};
