
export const getPostList = async () => {
	const res = await fetch("http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline");
	console.log({ res });
	return await res.json();
}

export const getBlush = async () => {
	const res = await fetch("http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline&product_type=blush");
	console.log({ res });
	return await res.json();
}

export const getBronzer = async () => {
	const res = await fetch("http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline&product_type=bronzer");
	console.log({ res });
	return await res.json();
}

export const getFoundation = async () => {
	const res = await fetch("http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline&product_type=foundation");
	console.log({ res });
	return await res.json();
}

export const getLipstick = async () => {
	const res = await fetch("http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline&product_type=lipstick");
	console.log({ res });
	return await res.json();
}

export const getLipliner = async () => {
	const res = await fetch("http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline&product_type=Lip%20liner");
	console.log({ res });
	return await res.json();
}

export const getEyeliner = async () => {
	const res = await fetch("http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline&product_type=Eyeliner");
	console.log({ res });
	return await res.json();
}

export const getMascara = async () => {
	const res = await fetch("http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline&product_type=Mascara");
	console.log({ res });
	return await res.json();
}

export const getNailpolish = async () => {
	const res = await fetch("http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline&product_type=Nail%20polish");
	console.log({ res });
	return await res.json();
}