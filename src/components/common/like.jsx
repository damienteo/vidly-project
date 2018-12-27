import React,  { Component } from 'react';

// stateless functional component
//remember to get rif of 'this', and pass 'props' as a perimeter

const Like = (props) => {
		let classes = "fa fa-heart";
		if (!props.liked) classes += "-o";
		return (
			<i 
			className ={classes} 
			aria-hidden='true'
			onClick={props.onClick}
			style={{ cursor: 'pointer' }}
			/>
		);
};

// class Like extends Component {
// 	render() {
// 		let classes = "fa fa-heart";
// 		if (!this.props.liked) classes += "-o";
// 		return (
// 			<i 
// 			className ={classes} 
// 			aria-hidden='true'
// 			onClick={this.props.onClick}
// 			style={{ cursor: 'pointer' }}
// 			>
// 			</i>
// 			);
// 	}
// }

export default Like;