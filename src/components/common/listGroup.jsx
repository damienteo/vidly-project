import React from "react";

const ListGroup = (props) => {
	const { items, textProperty, valueProperty, onItemSelect, selectedItem } = props;

	return (
		<ul className="list-group">
			{ items.map(item =>
				<li 
				onClick={() => onItemSelect(item)}
				key={item[valueProperty]} 
				className={ item === selectedItem ? "list-group-item active" : "list-group-item" }>
					{item[textProperty]}
				</li>
			)}
		</ul>
		);
};
//item._id
//item.name

//You can access properties of an object by specifying the name of the object, followed by the dot notation, followed by the property name.

//bracket notation works the same way (i.e. with arrays). But bracket notation is also useful when working with Objects. When working with bracket notation, property identifiers only have to be a String. They can include any characters, including spaces. Variables may also be used as long as the variable resolves to a String. This means there are fewer limitations when working with bracket notation. We can now have spaces in our strings, and can even start strings with numbers.

//bracket notation allows us to pass in variables.

ListGroup.defaultProps = {
	textProperty: 'name',
	valueProperty: '_id'
};

export default ListGroup;