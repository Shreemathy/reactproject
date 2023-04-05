import React from 'react';
function List(props) {
 const items = props.items;
 const listItems = items.map((item) =>
 <li key={item.toString()}>
 {item}
 </li>
 );
 return (
 <ul>{listItems}</ul>
 );
}
export default List;