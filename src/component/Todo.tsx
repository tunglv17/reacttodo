import React, { useState } from "react";
import ModalEdit from "./ModalEdit";
import { TypeTodo } from "./typeTodo";

type TodoListProps = {
  todoList: TypeTodo[];
  onChangeTodo: (index: any) => void;
  incompleteList: TypeTodo[];
  completeList: TypeTodo[];
  onDelete: any;
  onEdit: any;
};
const TodoLists: React.FC<TodoListProps> = (props) => {
  const [openModalEdit, setShowModalEdit] = useState(false);
  return (
    <>
      <div className="grid-row">
        <div className="incomplete">
          <h3 className="title">Incomplete</h3>
          <div className="list">
            {props.completeList.map((item: any, index: any) => {
              return (
                <div className="list-item" key={index}>
                  <div className="list-item-title">
                    <div className="text-content">
                      <input
                        type="checkbox"
                        checked={false}
                        onClick={() =>
                          props.onChangeTodo(item.id)
                        }
                      />
                      <h5>{item.title}</h5>
                    </div>
                    <div className="click-btn">
                      <button className="btn-delete" onClick={() => props.onDelete(item.id)}>Delete</button>
                      <button className="btn-edit" onClick={() => {
                        setShowModalEdit(true);
                      }}>Edit</button>
                    </div>
                    {openModalEdit && <ModalEdit closeModalEdit={setShowModalEdit} onEdit={props.onEdit} />}
                  </div>
                  <div className="list-item-category">{item.content}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="grid-row">
        <div className="completed">
          <h3 className="title">Completed</h3>
          <div className="list">
            {props.incompleteList.map((item: any, index: any) => {
              return (
                <div className="list-item" key={index}>
                  <div className="list-item-title">
                    <div className="text-content">
                      <input
                        type="checkbox"
                        checked={true}
                        defaultChecked
                        onClick={() =>
                          props.onChangeTodo(item.id)
                        }
                      />
                      <h5>{item.title}</h5>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default TodoLists;
