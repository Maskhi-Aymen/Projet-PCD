import React, { useState } from 'react';
import Todo from './ToDo';
import './Todo.css';

function TodoList() {

  return (
   <div className='yellocard'>
      <h1>What's the Plan for Today?</h1>
                      {DataTodo.filter((val) => {
                    return val.title.toLowerCase();
                }).map((val, key) => {
                    return (<div key='val.id' >
                        <Todo
                        id={val.id}
                        pack={val.pack}
                        date={val.date}
                        hour={val.hour}
                        title={val.title}
                        description={val.description}
                        imageUrl={val.imageUrl}
                        time={val.time}
                        
                        />


                    </div>)
                })}
      </div>
    
  );
}

export default TodoList;

const DataTodo = [
    { id: 1,pack:"sadness",date:"20/02/2021",hour:"midday",title:"To Cook",description:"Only Meditation",imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG3X1j2ddxKUqmNQvRrDUT4UBN7t6qv9gMIw&usqp=CAU",time:"30 min" },
    { id: 2,pack:"sadness",date:"20/02/2021",hour:"morning",title:"Walk",description:"Only Meditation",imageUrl:"https://i.pinimg.com/originals/75/96/ca/7596ca7de195b18377e4aece6d077aeb.jpg",time:"1 h" },
    { id: 3,pack:"sadness",date:"20/02/2021",hour:"evening",title:"Listen Musique",description:"Learning how to meditate is straightforward, and the benefits can come quickly",imageUrl:"https://w7.pngwing.com/pngs/906/53/png-transparent-silhouette-running-leichtathletik-sport-running-arm.png",time:"5 min" },
    
    
];
/*
 
        <div >
            < div >


                
            </div></div></div>
            
            
            
            
            <TodoForm onSubmit={addTodo} />
      <Todo
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
*/