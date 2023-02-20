import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './todoSlice';

//Хранилище
export default configureStore({

	reducer: {
		todos: todoReducer,
	},
});

