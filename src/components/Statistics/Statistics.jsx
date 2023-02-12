import PropTypes from "prop-types";
import {Section, Title, StatList, StatListItem} from '../Statistics/Statistics.styled'

export const Statistics = (({title, stats}) => {
   
  return (
    <Section >

      {title !== undefined && (
        <Title >{title}</Title>
      )}

  <StatList className="stat-list">
    
    {stats.map(({id, label, percentage}) => {
      return (

        <StatListItem color={'#' + (Math.random().toString(16) + '000000').substring(2,8).toUpperCase()} key={id}>
          <span className="label">{label}</span>
          <span className="percentage">{percentage}</span>
        </StatListItem>
      )
    })}

   
  </StatList>
</Section>
  )
});

Statistics.propTypes = {
  title:PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }))
}