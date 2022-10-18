import React from 'react'

import { Link } from 'react-router-dom';
import {
	fetchPostList, fetchBlush, fetchBronzer, fetchFoundation,
	fetchLipstick, fetchLipliner, fetchEyeliner, fetchMascara, fetchNailpolish
} from '../../Redux/Features/Post.slice';
import { useDispatch } from "react-redux";


const Products = () => {
	const dispatch = useDispatch();

	const getData = () => {
		dispatch(fetchPostList());
	};

	const getBlush = () => {
		dispatch(fetchBlush());
	};

	const getBronzer = () => {
		dispatch(fetchBronzer());
	};

	const getFoundation = () => {
		dispatch(fetchFoundation());
	};

	const getLipstick = () => {
		dispatch(fetchLipstick());
	};

	const getLipliner = () => {
		dispatch(fetchLipliner());
	};

	const getEyeliner = () => {
		dispatch(fetchEyeliner());
	};

	const getMascara = () => {
		dispatch(fetchMascara());
	};

	const getNailpolish = () => {
		dispatch(fetchNailpolish());
	};

	return (
		<div className='prod'>
			<div className='container'>
				<div className='row'>
					<div className='col-12 mb-5'>
					<div className='buttons'>
							<button className='btn btn-ouline dark ms-2 bg-dark'><Link to='/all' className='text-decoration-none text-light' onClick={getData}> ALL</Link></button>
							<button className='btn btn-ouline dark ms-2 bg-dark'><Link to='/blush' className='text-decoration-none text-light' onClick={getBlush}>Blush</Link></button>
							<button className='btn btn-ouline dark ms-2 bg-dark'><Link to='/bronzer' className='text-decoration-none text-light' onClick={getBronzer}>Bronzer</Link></button>
							<button className='btn btn-ouline dark ms-2 bg-dark'><Link to='/foundation' className='text-decoration-none text-light' onClick={getFoundation}>Foundation</Link></button>
							<button className='btn btn-ouline dark ms-2 bg-dark'><Link to='/lipstick' className='text-decoration-none text-light' onClick={getLipstick}>Lipstick</Link></button>
							<button className='btn btn-ouline dark ms-2 bg-dark'><Link to='/lipliner' className='text-decoration-none text-light' onClick={getLipliner}>Lip Liner</Link></button>
							<button className='btn btn-ouline dark ms-2 bg-dark'><Link to='/eyeliner' className='text-decoration-none text-light'onClick={getEyeliner}>Eye Liner</Link></button>
							<button className='btn btn-ouline dark ms-2 bg-dark'><Link to='/mascara' className='text-decoration-none text-light' onClick={getMascara}>Mascara</Link></button>
							<button className='btn btn-ouline dark ms-2 bg-dark'><Link to='/nails' className='text-decoration-none text-light' onClick={getNailpolish}>Nails</Link></button>
						</div>
					</div>
				</div>
		 	</div>
		 </div>
	)
}

export default Products;
