import './styles.css'
import { useRef } from "react";

interface Props {
  todo: string | number;
  setTodo: React.Dispatch<React.SetStateAction<string | number>>;
  handleAdd: (e: React.FormEvent) => void;
}

const InputField = ({todo, setTodo, handleAdd}: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <form className = "input" onSubmit={(e) => {
      handleAdd(e) 
      inputRef.current?.blur()
      }}>
      <input 
        type="input" 
        placeholder="Enter a task" 
        className="input__box" 
        value={todo}
        onChange={(e) => setTodo(e.target.value)} />
      <button className="input__submit" type="submit">Go</button>
    </form>
  )
}

export default InputField;