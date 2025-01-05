import { Fragment, useState } from "react";

function ListGroup() {
    let items = ['New York', 'San Fransisco', 'Tokyo', 'London', 'Paris']
    // items = []
    
    // using useState
    const [selectedIndex, setSelectedIndex] = useState(-1);

    // return the HTML component
    return (
        <>
            <h1>List Group</h1>
            { items.length === 0 && <p>No item found</p> }
            <ul class="list-group">
                {
                    items.map((item, index) => (
                        <li 
                            key={item}
                            onClick={() => {setSelectedIndex(index)}}
                            className={selectedIndex === index ? "list-group-item active" : "list-group-item"}
                        >
                            {item}
                        </li>
                    ))
                }
            </ul>
        </>
    )
}

export default ListGroup;