import EnterTask from './components/EnterItem';
import NavBar from './components/NavBar';
import ItemHandler from './components/ItemHandler';
import DoneItemHandler from './components/DoneItemHandler';
import { useState } from 'react'


function App() {

  const [list, setList] = useState([{desc: 'Learn react.js'}]);
  const [doneList, setDoneList] = useState([]);

  const addItem = (desc) => {
    var item = {desc};
    setList([item, ...list]);
  };

  const removeItem = (desc) => {
    var newList = list.filter(item => item.desc != desc);
    setDoneList([{desc: desc}, ...doneList]);
    setList(newList);
  };

  const clearItems = () => {
    setList([]);
    setDoneList([]);
  };


  return (
    <>
      <NavBar clearItems={clearItems}/>
      <div className='tool-bar'>
        <h1 className='tool-bar-text'>TO DO LIST</h1>
        <p className='tool-bar-sub'>made with react.js<br></br>- enter a task below -</p>
        <EnterTask addItem={addItem}/>
        </div>
      <div className='tool-bar'>
        <div className='tool-bar-todo'>
          <p>MY ITEMS</p>
        </div>
      </div>
      <div className='tool-bar'>
        <div className='list'>
          {list.map((item, key) => (
            <ItemHandler item={item} key={key} removeItem={removeItem}/>
          ))}
        </div>
        {list.length == 0 ? (<p className='empty'>Take a nap! You deserve it.</p>) : null}
      </div>
      <div className='tool-bar'>
        <div className='tool-bar-todo'>
          <p>COMPLETED ITEMS</p>
        </div>
      </div>
      <div className='tool-bar'>
        <div className='done-list'>
          {doneList.map((item, key) => (
            <DoneItemHandler item={item} key={key} />
          ))}
        </div>
        {doneList.length == 0 ? (<p className='empty'>Let's get some tasks done!</p>) : null}
      </div>
    </>
  );
}

export default App;