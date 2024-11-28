import React from "react"
import Todo from "./Todo"

//↓がコンポーネント、{}は引数のProps
const TodoList = ({ some_todo, tglTd }) => {
  return some_todo.map((task) => <Todo todo={task} key={task.id} tglTd_todo={tglTd} />)
}
//↑がコンポーネント
export default TodoList
