import ListGroup from "./components/ListGroup";

function App() {
  const city = ["item1", "item2", "item3", "item4", "item5"];
  const heeList = ["it1", "it2", "it3", "it4", "it5"];

  return (
    <div>
      <ListGroup items={city} heading={"Cities"} />
      <ListGroup items={heeList} heading={"heee"} />
    </div>
  );
}

export default App;
