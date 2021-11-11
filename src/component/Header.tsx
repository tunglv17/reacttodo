import React from "react";
import moment from "moment";
import { TypeTodo } from "./typeTodo";

export interface Props {
  incompleteList: TypeTodo[];
  completeList: TypeTodo[];
}

const Header: React.FC<Props> = (props) => {
  const date = new Date();
  return (
    <div>
      <div className="grid-row">
        <div className="info">
          <h2 className="date-time">
            {moment().format("MMMM")} - {date.getDay()} - {date.getFullYear()}
          </h2>
          <div className="status">
            {props.completeList.length} incomplete , {props.incompleteList.length} completed
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
