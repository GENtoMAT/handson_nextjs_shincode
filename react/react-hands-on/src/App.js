import { useState, useRef } from "react"
import TodoList from "./TodoList"
import { v4 as uuidv4 } from "uuid"

function App() {
  //todos, 現在かかえているタスクの状態を指すオブジェクト
  //左の[]の変数の変化を監視して、再レンダリング
  //useState[{id:1, name:"hoge"}]で初期値を設定可能
  const [todos, setTodos] = useState([])

  //useRefというフックスで入力値を拾う
  //inputのrefに埋め込まれてる
  const todoNameRef = useRef()

  //onclickで発火。タスクを追加する。
  const handleAddTodo = (e) => {
    const name = todoNameRef.current.value
    if (name === "") return //タスク名でのバリデーション。空のタスク名を弾く。
    setTodos((prevTodosA) => {
      return [...prevTodosA, { id: uuidv4(), name: name, completed: false }]
    })
    todoNameRef.current.value = null
  }
  //チェクボの内容を変換
  const toggleTodo = (arg_id) => {
    const newTodos = [...todos]
    const todo_finded = newTodos.find((todo_node) => todo_node.id === arg_id) //findメソッドで引数で与えたIDと一致するtodoオブジェクトを探す
    todo_finded.completed = !todo_finded.completed
    setTodos(newTodos) //コンポーネントの状態変化なのでsetTodos
  }
  //完了済みのタスクを削除
  const handleTaskClear = () => {
    const newTodos = todos.filter((todo_kouho) => !todo_kouho.completed) //未完了のものだけを残したnewTodosでTodo全体を上書きするイメージ
    setTodos(newTodos) //コンポーネントの状態変化なのでsetTodos
  }

  return (
    <div>
      {/* {}がJSの変数。＝の左がPropsとして次のコンポーネントに渡る変数名 */}
      {/* tglTd はアロー関数が入った変数をPropsに渡してる */}
      <TodoList some_todo={todos} tglTd={toggleTodo} />
      <input type="text" ref={todoNameRef} />
      <button onClick={handleAddTodo}>タスクを追加</button>
      <button onClick={handleTaskClear}>完了したタスクの削除</button>
      <div>残りのタスク：{todos.filter((todo) => !todo.completed).length}</div>
    </div>
  )
}

export default App
