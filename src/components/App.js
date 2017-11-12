import React from 'react';
import Footer from './Footer';
import {AddTodo, UndoRedo, VisibleTodoList} from './../containers';

const App = () => (
    <div>
        <AddTodo/>
        <VisibleTodoList/>
        <Footer/>
        <UndoRedo/>
    </div>
);

export default App;
