/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import lodash from 'lodash';

import { client } from '../client';

const useFetch = (query) => {
	const [data, setData] = useState([]);
	const fetchData = async () => {
		let newData = await client.fetch(query);
		newData = newData.map((item) => {
			const {
				mainImage,
				order,
				title,
				url,
				sourceCode,
				category: { title: categoryTitle, order: categoryOrder },
			} = item;

			const category = {
				categoryTitle,
				categoryOrder,
			};

			return { category, order, title, url, sourceCode, mainImage };
		});
		newData = newData.sort(
			(a, b) => a.category.categoryOrder - b.category.categoryOrder
		);
		newData = lodash.groupBy(newData, 'category.categoryTitle');

		setData(newData);
	};
	useEffect(() => {
		fetchData();
	}, []);

	return { data };
};

export default useFetch;
