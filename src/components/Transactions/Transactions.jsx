import React from 'react';
import PropTypes from 'prop-types';
import styles from './Transactions.module.css'
export const Transactions = ({ transaction }) => {
  return (
    <table>
      <thead>
        <tr>
          <th className={styles.text}>Type</th>
          <th className={styles.text}>Amount</th>
          <th className={styles.text}>Currency</th>
        </tr>
      </thead>

      <tbody>
      {transaction.map(transact => (
          <tr key={transact.id}>
            <td>{transact.type}</td>
            <td>{transact.amount}</td>
            <td>{transact.currency}</td>
          </tr>
      ))}
      </tbody>
    </table>
  );
};

Transactions.propTypes = {
  transaction: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      type: PropTypes.string,
      amount: PropTypes.string,
      currency: PropTypes.string
    })
  )
};