import React, { useEffect, useState } from 'react';
import TodosAPI from './api/todosAPI';
import './App.css';
import Header from './component/Header';
import Modal from './component/Modal';
import TodoList from './component/Todo';
import { TypeTodo } from './component/typeTodo';
function App() {

  const [todos, setTodos] = useState<TypeTodo[]>([]);
  const [openModal, setShowModal] = useState(false);

  const completeList = todos.filter((item) => {
    return item.complete === false;
  });
  const incompleteList = todos.filter((item) => {
    return item.complete === true;
  });
  const handleChangeTodo = (index: number): void => {
    const newState = todos.map((item) => {
      if (item.id == index) {
        return {
          ...item,
          complete: !item.complete
        };
      } 
      return item;
    });
    setTodos(newState);
  };
  useEffect(() => {
    const getTodos = async () => {
      try {
        const { data: todos } = await TodosAPI.getAll();
        setTodos(todos)
      } catch (error) {
        console.log(error)
      }
    }
    getTodos()
  }, []);

  const onHandleAdd = async (todo: TypeTodo) => {
    try {
      await TodosAPI.add(todo)
      setTodos([
        ...todos,
        todo
      ])
    } catch (error) {
      console.log(error)
    }
  }

  const onHandleDelete = async (id: number) => {
    try {
      await TodosAPI.remove(id);
      const newTodo = todos.filter(todo => todo.id !== id);
      setTodos(newTodo);
    } catch (error) {
      console.log(error)
    }
  }
  const onHandleEdit = async (id: number, todo: TypeTodo) => {
    try {
      const { data } = await TodosAPI.update(id, todo)
      const newTodo = todos.map(item => (item.id === id ? data : item));
      setTodos(newTodo);
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <div className="main">
        <div className="grid">
          <Header completeList={completeList} incompleteList={incompleteList} />
          <TodoList todoList={todos}
            onChangeTodo={handleChangeTodo}
            onDelete={onHandleDelete}
            completeList={completeList}
            incompleteList={incompleteList}
            onEdit={onHandleEdit}
          />
        </div>
      </div>
      <div className="btn-show-modal">
        <img
          src="https://scontent.xx.fbcdn.net/v/t1.15752-9/p206x206/251291240_5117816144914365_499214378354785186_n.png?_nc_cat=109&ccb=1-5&_nc_sid=aee45a&_nc_ohc=xCOj6BKlG3QAX-hj_2r&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=a3217a02415d0eb62ef2baa6ebc472a2&oe=61AAB145"
          width="40px"
          alt=""
          onClick={() => {
            setShowModal(true);
          }}
        />
        {openModal && <Modal closeModal={setShowModal} onAdd={onHandleAdd} />}
      </div>
    </>

  );
}

export default App;
