// import _ from 'lodash';

export function paginate(items, pageNumber, pageSize, props) {

	const startIndex = (pageNumber - 1) * pageSize;

	// return _(items).slice(startIndex).take(pageSize).value();

	const showItems = [];

	let lastItem = startIndex + pageSize;

	if (lastItem > items.length) {
		lastItem = items.length;
	}

	for( let i = startIndex; i < lastItem; i ++) {
		showItems.push(items[i]);
	};

	return showItems;
}