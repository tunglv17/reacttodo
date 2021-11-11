import { TypeTodo } from "../component/typeTodo";
import axiosClient from "./axiosClient";
const TodosAPI = {
  getAll() {
    const url = `/todos`;
    return axiosClient.get(url);
  },
  get(id:number) {
    const url = `todos${id}`;
    return axiosClient.get(url);
  },
  add(todo: TypeTodo) {
    const url = `/todos`;
    return axiosClient.post(url, todo);
  },
  remove(id:number){
    const url = `/todos//${id}`;
    return axiosClient.delete(url)
  },
  update(id:number,data:TypeTodo){
    const url = `/todos/${id}`;
    return axiosClient.put(url,data) 
}
};
export default TodosAPI;
