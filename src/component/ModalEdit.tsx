import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import TodosAPI from '../api/todosAPI';
const ModalEdit = ({ closeModalEdit, onEdit }: any) => {
 // const { id }:any = useParams();
 // const [inputValue, setInputValue] = useState("");
 // const [inputContent, setInputContent] = useState("")

 // const [todos, setTodos] = useState({});
 // useEffect(() => {
 //  const getTodos = async () => {
 //   try {
 //    const { data } = await TodosAPI.get(id)
 //    setTodos(data);
 //    console.log(data)
 //   } catch (error) {
 //    console.error(error)
 //   }
 //  }
 //  getTodos();
 // }, []);
 return (
  <div>
   <div className="grid modal">
    <div className="modal__overlay" />
    <div className="modal__body">
     <div className="modal__inner">
      <div className="modal-form">
       <form action="">
        <div className="modal-form__group">
         <label htmlFor="todo">Công việc:</label>
         <input required id="todo" type="text" className="modal-form__input" placeholder="nhập" />
         <label htmlFor="content">Nội dung</label>
         <input required id="content" type="text" className="modal-form__input" placeholder="nhập" />
        </div>
        <div className="modal-form__controls">
         <button className="btn btn-close" onClick={() => closeModalEdit(false)}>Đóng</button>
         <button className="btn btn-add" type="submit" >Thêm</button>
        </div>
       </form>
      </div>
     </div>
    </div>
   </div>
  </div>
 )
}

export default ModalEdit
