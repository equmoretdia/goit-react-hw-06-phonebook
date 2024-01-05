import React from 'react';
// import PropTypes from 'prop-types';
import css from './Filter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from '../../redux/filterSlice';
import { getFilterValue } from '../../redux/selectors';

// export default function Filter({ value, onFilterChange }) {
export default function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(getFilterValue);
  console.log(filter);
  const handleChange = e => {
    const { value } = e.currentTarget;
    dispatch(setFilter(value));
    // onFilterChange(value);
  };
  return (
    <div className={css.wrapper}>
      <label className={css.label}>
        Find contacts by name
        <input
          className={css.input}
          type="text"
          name="filter"
          value={filter}
          onChange={handleChange}
        />
      </label>
    </div>
  );
}

// Filter.propTypes = {
//   value: PropTypes.string.isRequired,
//   onFilterChange: PropTypes.func.isRequired,
// };
