import { useState } from "react";

interface ListGroupProps {
  items: string[];
  heading: string;
}

function ListGroup({ items, heading }: ListGroupProps) {
  const [seletedIndex, setSeletedIndex] = useState(-1);

  return (
    <>
      <ul className="list-group">
        <h1>{heading}</h1>
        {items.length === 0 && <p>No message found.</p>}
        {items.map((item, index) => (
          <li
            className={
              seletedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => setSeletedIndex(index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
