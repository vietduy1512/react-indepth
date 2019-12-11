import React from "react";

// 1. Need to include keys to lists (if not will show warning)
// 2. An in-depth explanation on the negative impacts of using an index as a key: 
//      https://medium.com/@robinpokorny/index-as-a-key-is-an-anti-pattern-e0349aece318
// 3. Key should be specified inside the array
// 4. Keys must only be unique among siblings, don’t need to be globally unique
// 5. Keys serve as a hint to React but they don’t get passed to your components

function ListItem(props) {
    return <li>{props.value}</li>;
}

function NumberList(props) {
    const numbers = props.numbers;
    return (
        <ul>
            {numbers.map((number) =>
                <ListItem key={number.toString()} // Follow rule 1 & 3
                        value={number} />
            )}
        </ul>
    );
}

function ListsAndKeys(){
    return (
        <NumberList numbers={[1, 2, 3, 4, 5]}/>
    )
}

export default ListsAndKeys;