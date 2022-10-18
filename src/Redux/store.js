import { configureStore } from "@reduxjs/toolkit";
import { postSlice } from "./Features/Post.slice";
import { cartSlice} from "./Features/Cart.slice";



const store = configureStore({
	reducer: {
		
		[postSlice.name]: postSlice.reducer,
		[cartSlice.name]: cartSlice.reducer,
		
	},
});

// store.dispatch(inc());

export default store;