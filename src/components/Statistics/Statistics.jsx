import React from 'react'
import styles from './Statistics.module.css'
import PropTypes from 'prop-types';

export const Statistics = ({stats, title}) => {
  return (
<section className={styles.statistics}>
      {title && <h2 className={styles.title}>{title}</h2>}

  <ul className={styles.stat_list}>
  {stats.map(stat=>
    <li key={stat.id} className={styles.item}>
      <span className={styles.label}>{stat.label}</span>
      <span className={styles.percentage}>{stat.percentage}%</span>
    </li>
  )}
  </ul>
</section>
)
}


Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  )
};