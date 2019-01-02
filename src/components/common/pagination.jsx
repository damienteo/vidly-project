import React,  { Component } from 'react';
// import _ from 'lodash';
import PropTypes from 'prop-types';
// npm i prop-types

const Pagination = (props) => {
		const { itemsCount, pageSize, currentPage, onPageChange } = props;

		console.log(currentPage);

		const pagesCount = Math.ceil(itemsCount / pageSize);

		if (pagesCount === 1) return null;

		//npm i lodash
   
		// const pages = _.range(1, pagesCount + 1);

		const pages = [];

		const pageFill = () => {
			for(let i = 1; i <= pagesCount; i++) {
				pages.push(i);
			}
		}

		pageFill();

		return (
			<React.Fragment>
				<nav>
					<ul className="pagination">
						{pages.map(page => (
							<li 
							key = {page}
							className={page === currentPage ? 'page-item active' : 'page-item'}>
							<a 
							className="page-link"
							onClick={() =>onPageChange(page)}>
								{page}
							</a>
						</li>
							))}
					</ul>
				</nav>

			</React.Fragment>
		);
};

Pagination.propTypes = {
	itemsCount: PropTypes.number.isRequired, 
	pageSize: PropTypes.number.isRequired, 
	currentPage: PropTypes.number.isRequired, 
	onPageChange: PropTypes.func.isRequired
};

export default Pagination;

				