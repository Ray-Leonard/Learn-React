function Message() {
  // JSX: JavaScript XML, gets compiled to JavaScript eventually.
  // return <h1>Hello World</h1>;

  // TODO: make a toggle button between 2 scenarios.
  const name = "R";
  if (name) {
    return <h1>Hello World, {LoopPrintName(name)}</h1>;
  } else {
    return LoopJSX();
  }
}

function LoopPrintName(name: string) {
  let output: string = "";
  for (let i: number = 0; i < 60; i++) {
    output += name + " ";
  }

  return output;
}

function LoopJSX() {
  const helloWorld = <h1>Hello World</h1>;
  return <>{Array(5).fill(helloWorld)}</>;
}

// make sure other files can access it.
export default Message;
