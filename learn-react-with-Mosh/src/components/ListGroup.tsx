import { MouseEvent } from "react";
import { useState } from "react";

function ListGroup() {
  let items = [
    "dog",
    "pig",
    "cat",
    "elephant",
    "duck",
    "banana",
    "pinapple",
    "sea gull",
  ];

  // using state hook (we use const here, array is immutable, but the content inside is mutable)
  const [selectedIndex, setSelectedIndex] = useState(-1);

  /** Conditional Rendering */
  // 1. put the conditional expression in a variable
  const emptyListMessageVar =
    items.length === 0 ? <p>No item found (emptyListMessageVar).</p> : null;

  // 2. put the expression expression in a function (could benefit from params)
  const emptyListMessageFunc = () => {
    return items.length === 0 ? (
      <p>No item found (emptyListMessageFunc).</p>
    ) : null;
  };

  /** Event Handler */
  const handleClick = (event: MouseEvent, item: string) => {
    console.log(event);
    console.log(item);
  };

  return (
    <>
      <h1>My List</h1>

      {emptyListMessageVar}
      {emptyListMessageFunc()}
      {
        // this one gets used the most
        items.length === 0 && <p>No item found (logical AND expression)</p>
      }

      <ul className="list-group">
        {items.map((item, index) => (
          <li
            key={item}
            className={
              "list-group-item" + (index === selectedIndex ? " active" : "")
            }
            // onClick={(event) => handleClick(event, item)}
            onClick={() => setSelectedIndex(index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
