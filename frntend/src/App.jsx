import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './loginpage/Loginpage';
import Todo from './todo';
import Addedtodo from './completedtodos';
import Createtodo from './components/CreateTodo';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/createtodo" element={<Createtodo />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/completedtodos" element={<Addedtodo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
