import { MouseEvent } from "react";

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

  // items = [];

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
      {items.length === 0 && <p>No item found (logical AND expression)</p>}

      <ul className="list-group">
        {items.map((item) => (
          <li
            key={item}
            className="list-group-item"
            onClick={(event) => handleClick(event, item)}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
