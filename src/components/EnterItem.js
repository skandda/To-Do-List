import { useState } from 'react'

const EnterItem = ({ addItem }) => {
    const [item, setItem] = useState('');

    function getInput(input) {
        setItem(input.target.value);
    };

    var addSubmittedItem = (input) => {
        input.preventDefault()
        if (!item || /^\s*$/.test(item)) 
            {
                setItem('');
                return;
            }
        addItem(item);
        setItem('');
    };

    return (
    <form className='add-task' onSubmit={addSubmittedItem}>
        <input className='add-task-text' value={item} type='text' onChange={getInput}></input>
        <button className='add-task-button'>add task</button>
    </form>
    )
}


export default EnterItem;