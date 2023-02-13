import PropTypes from 'prop-types';
import {
  Section,
  Title,
  StatList,
  StatListItem,
  Wrapper,
  Label,
  Percentage,
} from '../Statistics/Statistics.styled';

export const Statistics = ({ title, stats = [] }) => {
  return (
    <Section>
      <Wrapper>
        {title !== undefined && <Title>{title}</Title>}

        <StatList className="stat-list">
          {stats.map(({ id, label, percentage }) => {
            return (
              <StatListItem
                color={
                  '#' +
                  (Math.random().toString(16) + '000000')
                    .substring(2, 8)
                    .toUpperCase()
                }
                key={id}
              >
                <Label className="label">{label}</Label>
                <Percentage className="percentage">{percentage}%</Percentage>
              </StatListItem>
            );
          })}
        </StatList>
      </Wrapper>
    </Section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
