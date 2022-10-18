import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
	getBlush, getBronzer, getEyeliner, getFoundation,
	getLipliner, getLipstick, getMascara,
	getNailpolish,
	getPostList
} from "../../Services/post.api";


// First, create the thunk
export const fetchPostList = createAsyncThunk(
	"post/fetchPostList",
	async () => {
		return await getPostList();
	}
);

export const fetchBlush = createAsyncThunk(
	"post/fetchPostList",
	async () => {
		return await getBlush();
	}
);

export const fetchBronzer = createAsyncThunk(
	"post/fetchPostList",
	async () => {
		return await getBronzer();
	}
);

export const fetchFoundation = createAsyncThunk(
	"post/fetchPostList",
	async () => {
		return await getFoundation();
	}
);

export const fetchLipstick = createAsyncThunk(
	"post/fetchPostList",
	async () => {
		return await getLipstick();
	}
);

export const fetchLipliner = createAsyncThunk(
	"post/fetchPostList",
	async () => {
		return await getLipliner();
	}
);

export const fetchEyeliner = createAsyncThunk(
	"post/fetchPostList ",
	async () => {
		return await getEyeliner();
	}
);

export const fetchMascara = createAsyncThunk(
	"post/fetchPostList",
	async () => {
		return await getMascara();
	}
);

export const fetchNailpolish = createAsyncThunk(
	"post/fetchPostList",
	async () => {
		return await getNailpolish();
	}
);

export const postSlice = createSlice({
	
	name: "post",
	initialState: {
		posts: [],
	},

	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(fetchPostList.fulfilled, (state, actions) => {
			state.posts = actions.payload;
		});
	},

	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(fetchBlush.fulfilled, (state, actions) => {
			state.posts = actions.payload;
		});
	},

	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(fetchBronzer.fulfilled, (state, actions) => {
			state.posts = actions.payload;
		});
	},

	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(fetchFoundation.fulfilled, (state, actions) => {
			state.posts = actions.payload;
		});
	},

	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(fetchLipstick.fulfilled, (state, actions) => {
			state.posts = actions.payload;
		});
	},

	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(fetchLipliner.fulfilled, (state, actions) => {
			state.posts = actions.payload;
		});
	},

	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(fetchEyeliner.fulfilled, (state, actions) => {
			state.posts = actions.payload;
		});
	},

	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(fetchMascara.fulfilled, (state, actions) => {
			state.posts = actions.payload;
		});
	},

	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(fetchNailpolish.fulfilled, (state, actions) => {
			state.posts = actions.payload;
		});
	},
});

// Action creators are generated for each case reducer function
export const { } = postSlice.actions;