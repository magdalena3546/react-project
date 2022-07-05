import styles from './ColumnForm.module.scss';
import { useState } from 'react';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import { useDispatch } from 'react-redux';
import { addColumn } from '../../redux/store';
const ColumnForm = props => {
    const [title, setTitle] = useState('');
    const [icon, setIcon] = useState('');
    const listId = props.listId;
    const dispatch = useDispatch();
    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addColumn({title, icon, listId}));
        setTitle('');
        setIcon('');
    };
	return (
    <form className = {styles.columnForm} onSubmit={handleSubmit}>
      <p className={styles.text}>Title:</p>
      <TextInput value={title} onChange={e => setTitle(e.target.value)} />
      <p className={styles.text}> Icon:</p>
      <TextInput value={icon} onChange={e => setIcon(e.target.value)} />
      <Button>Add column</Button>
    </form>
	);
};

export default ColumnForm;