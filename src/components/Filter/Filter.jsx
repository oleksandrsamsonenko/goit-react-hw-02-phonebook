import PropTypes from 'prop-types';
import css from './Filter.module.css';

export const Filter = ({ onChange }) => {
  return (
    <label className={css.label}>
      Find contacts by name
      <input
        onChange={onChange}
        type="text"
        name="filter"
        placeholder="Find contact"
      ></input>
    </label>
  );
};

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
};
