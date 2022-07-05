import styles from './SearchForm.module.scss'
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { searchValue, getString } from '../../redux/store';
const SearchForm = props => {
  const string = useSelector(getString);
  const [value, setValue] = useState(string);
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(searchValue(value));
  };
  return ( 
    <form className={styles.searchForm} onSubmit = {handleSubmit}>
      <TextInput placeholder="Search..."  value={value} onChange={e => setValue(e.target.value)} />
      <Button >
        <span className="fa fa-search" />
      </Button>
    </form>
  );
};

export default SearchForm;