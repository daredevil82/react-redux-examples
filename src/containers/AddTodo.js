import React from 'react';
import {connect} from 'react-redux';
import {addTodo} from '../actions';

/**
 * Mixed contaner and presentational component to handle a click event
 * and add a Todo element to the global store
 *
 * @param dispatch
 * @returns {XML}
 * @constructor
 */

let AddTodo = ({dispatch}) => {
    let input = '';
    
    const clickHandler = e => {
        e.preventDefault();
        if (!input.value.trim())
            return;
        
        dispatch(addTodo(input.value));
        input.value = ''
    };
    
    return (
        <div>
            <form onSubmit={e => clickHandler(e)}>
                <input ref={node => {input = node}} />
                <button type='submit'>Add Todo</button>
            </form>
        </div>
    );
}

AddTodo = connect()(AddTodo);
export default AddTodo;
