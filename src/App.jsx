import { useState } from 'react';
import { useDispatch } from 'react-redux';
import InputField from './Components/InputField';
import Todolist from './Components/Todolist';
import { addTodo } from './Store/todoSlice';

import './App.css';

function App() {
	const [text, setText] = useState('');
	const dispatch = useDispatch();

	const addTask = () => {
		if (text.trim(text.length)) {
			dispatch(addTodo({ text }));
		}

		setText('');
	};

	return (
		<div className="App">
			<h1>Redux</h1>

			<InputField text={text} handleInput={setText} handleSubmit={addTask} />

			<Todolist />

		</div>
	);
}

export default App;