import {IoMdDoneAll} from 'react-icons/io';
import { RiEditFill } from 'react-icons/ri';

const ItemHandler = ({item, key, removeItem, editItem}) => {

    return (
    <div className='item'>
        <div className='desc'>
            <IoMdDoneAll className='done' onClick={() => removeItem(item.desc)} />
            <p>{item.desc}</p>
        </div>
    </div>  
    )
}

export default ItemHandler