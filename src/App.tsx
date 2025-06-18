import  { useState } from 'react';
import './App.css'; // import styles

const App = () => {
  const [tasks, setTasks] = useState<string[]>([]);
  const [input, setInput] = useState<string>('');
  const [editIndex, setEditIndex] = useState<number | null>(null);

  const handleAddOrEdit = () => {
    if (input.trim() === '') return;

    if (editIndex !== null && editIndex >= 0) {
      const updatedTasks = tasks.map((task, i) =>
        i === editIndex ? input : task
      );
      setTasks(updatedTasks);
      setEditIndex(null);
    } else {
      setTasks([...tasks, input]);
    }

    setInput('');
  };

  const handleEdit = (index: number) => {
    setInput(tasks[index]);
    setEditIndex(index);

  };

  const handleDelete = (index: number) => {
    const filtered = tasks.filter((_, i) => i !== index);
    setTasks(filtered);
  };

  return (
    <div className="App">
    <div className="header">
  <h1>TODO MAKER</h1>

  <div className="input-container">
    <br/>
    <br/>
    <br/>
    <label>Your List:</label>
    <input
      type="text"
      placeholder="Enter task..."
      value={input}
      onChange={(e) => setInput(e.target.value)}
    />
    <button onClick={handleAddOrEdit}>Add</button>
  </div>
</div>
  <footer>By Siddhesh B</footer>
  <hr/>

  <div className="tasks">
  {tasks.map((t, index) => (
    <div className="task" key={index}>
      <button className="delete" onClick={() => handleDelete(index)}>X</button>
      <span>{t}</span>
       {editIndex === index ? (
        <button className="edit" onClick={handleAddOrEdit}>Save</button>
      ) : (
        <button className="edit" onClick={() => handleEdit(index)}>Edit</button>
      )}
    </div>
  ))}
</div>

</div>

  );
};

export default App;
