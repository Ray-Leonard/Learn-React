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
    "list-group-item",
  ];

  items = [];

  // 1. put the conditional expression in a variable
  const emptyListMessageVar =
    items.length === 0 ? <p>No item found (emptyListMessageVar).</p> : null;

  // 2. put the expression expression in a function (could benefit from params)
  const emptyListMessageFunc = () => {
    return items.length === 0 ? (
      <p>No item found (emptyListMessageFunc).</p>
    ) : null;
  };

  return (
    <>
      <h1>My List</h1>

      {emptyListMessageVar}
      {emptyListMessageFunc()}
      {items.length === 0 && <p>No item found (logical AND expression)</p>}

      <ul className="list-group">
        {items.map((item) => (
          <li key={item} className="list-group-item">
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
