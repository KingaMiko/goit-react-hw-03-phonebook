import React from 'react';
import style from './Filter.module.css';
import PropTypes from 'prop-types';

const Filter = ({ value, onChange }) => (
  <div className={style.filter}>
    <label className={style.labelFilter}>
      Filter
      <input
        type="name"
        value={value}
        onChange={onChange}
        className={style.filterInput}
      />
    </label>
  </div>
);

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default Filter;
