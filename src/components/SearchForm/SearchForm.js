import styles from './SearchForm.module.scss'
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
const SearchForm = props => {
  const [value, setValue] = useState('');
  const dispatch = useDispatch()
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: 'SEARCH_VALUE', payload: value  });
    setValue('');
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