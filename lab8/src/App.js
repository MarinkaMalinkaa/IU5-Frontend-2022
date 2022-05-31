import './App.css';
import {Checkb} from './todolist/checkb';
import {Header} from './todolist/header';
import {Main} from './todolist/main';
import { useState } from 'react';

let arr = [
  {
    id:1,
    task:'Заказать еду',
    progress: false
  },
  {
    id:2,
    task:'Поесть',
    progress: false
  },
  {
    id:3,
    task:'Радоваться, что поел',
    progress: false
  }
]
let count = 3;


function App() {
  const [mas, setMas] = useState(arr);  

  function handleChange(id) {    
    let num, flag = false;   
    let new_mas = mas.map( (item, index) => {
      if (item.id === id ) {
        item.progress = flag = !(item.progress);       
        num = index
      };
      return item
    });   
    const picked = new_mas.splice(num, 1); 
    if (flag) {   
    new_mas.push(...picked);
    }
    else {
      new_mas.unshift(...picked);
    }
    setMas([...new_mas]);    
 }

  function Delete(id){ 
  let i;
  mas.forEach((item, index) => {
    if (item.id===id) i = index; 
  });
  mas.splice(i, 1);  
  setMas([...mas]);    
  count--;
  }

  let todolist = mas.map(item => <Checkb key ={item.id} item = {item} handleChange={handleChange} Delete={Delete} />);
  function handleClick(){
    count++;
    let new_obj = {
      id: count,
      task: document.getElementById('newItem').value,
      progress: false
    };
    if (count > 100) alert ('Ой, как много дел');
    else {
      if (new_obj.task!==''){
        setMas([new_obj, ...mas]); 
      }
      else alert ('Пупупу... Ошибочка');
    }
  new_obj = undefined;  
    }

  return (
    <div className="App">
      <Header/>
      <Main>
        <div className='ToDoList'>
          {todolist}
       </div>
       <div className='Add'>
          <input id='newItem' type="text" placeholder="Добавть, чтобы не забыть"></input>
          <button onClick={handleClick}>✍</button>
        </div>
      </Main>
    </div>
  );
}

export default App;
