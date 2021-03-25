import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import TodoContextProvider from "./context/TodoContext";

function App() {
  return (
    <div className="App">
      <h1>Hello Todos</h1>
      <TodoContextProvider>
        <TodoForm/>
        <TodoList/>
      </TodoContextProvider>
    </div>
  );
}

export default App;
