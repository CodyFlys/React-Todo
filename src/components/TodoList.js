import React from 'react';
import Todo from './Todo';

const TodoList = (props) => {
    console.log(props.list);
    return (
        <div>
            {props.list.map(item => {
                return <Todo 
                key={item.id}
                item={item}
                toggleItem={props.toggleItem}
                />
            })}
            <button className="clear-btn" onClick={props.clearTask}>
            Clear Completed
            </button>
        </div>
        )
}

export default TodoList