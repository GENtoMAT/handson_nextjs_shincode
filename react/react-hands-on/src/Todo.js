import React from "react"
//↓がコンポーネント、{}は引数のProps
const Todo = ({ todo, tglTd_todo }) => {
  //親のApp.jsの関数も使える
  const chkbclicked = () => {
    tglTd_todo(todo.id)
  }

  return (
    <div>
      <label>
        <input type="checkbox" checked={todo.completed} readOnly onChange={chkbclicked} />
      </label>
      {todo.name}
    </div>
  )
}
//↑がコンポーネント
export default Todo
