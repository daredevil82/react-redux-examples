import React from 'react';
import Footer from './Footer';
import {AddTodo, VisibleTodoList} from './../containers';

const App = () => (
    <div>
        <AddTodo/>
        <VisibleTodoList/>
        <Footer/>
    </div>
);

export default App;
