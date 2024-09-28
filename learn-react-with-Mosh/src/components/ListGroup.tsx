function ListGroup() {
  const items = [
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

  return (
    <>
      <h1>My List</h1>
      <ul className="list-group">
        {items.map((item) => (
          <li key={item} className="list-group-item">
            {item}
          </li>
        ))}
        ;
      </ul>
    </>
  );
}

export default ListGroup;
