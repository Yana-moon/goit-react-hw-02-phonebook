import PropTypes from 'prop-types';

import { TextFilter, InputFilter, WrapperFilter } from './Filter.styled';
export const Filter = ({ onFindName, valueFilter }) => {
  return (
    <WrapperFilter>
      <TextFilter>Find Contacts by name</TextFilter>
      <label>
        <InputFilter
          type="text"
          name="filter"
          placeholder="Enter name"
          onChange={onFindName}
          value={valueFilter}
        />
      </label>
    </WrapperFilter>
  );
};

Filter.propTypes = {
  onFindName: PropTypes.func.isRequired,
  valueFilter: PropTypes.string.isRequired,
};