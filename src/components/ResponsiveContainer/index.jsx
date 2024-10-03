import React from 'react';
import styles from './index.module.scss';

const ResponsiveContainer = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

export default ResponsiveContainer;
