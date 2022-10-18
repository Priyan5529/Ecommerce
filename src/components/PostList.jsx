import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	fetchBlush, fetchBronzer, fetchEyeliner,
	fetchFoundation, fetchLipliner, fetchLipstick,
	fetchMascara, fetchNailpolish, fetchPostList
} from "../Redux/Features/Post.slice";
import { getBlush, getBronzer, getEyeliner } from "../Services/post.api";
import { Link } from "react-router-dom";



const PostList = () => {


	const postListData = useSelector((state) => state.post.posts);

	const dispatch = useDispatch();
	// useEffect(() => {
	// 	dispatch(fetchPostList());
	// }, [dispatch]);

	const getData = () => {
		dispatch(fetchPostList());
	};


	return (
		<div>
				<ul>
					{postListData?.map((item) => (
						<li key={item.id}>{item.brand}${item.price}{item.name}<img src={item.image_link} />
						</li>

					))}
				</ul>
				
			</div>
		
	);
};

export default PostList;