// import "./App.css";
import { Accordion } from "./components/Accordion";
import { Rating } from "./components/Rating";

function App() {
  return (
    <div className="App">
      <PageTitle title={"This is APP Component"} />
      <PageTitle title={"My Friends"} />
      <Rating value={3} />
      <Accordion titleValue={"Menu"} collapsed={false} />
      <Accordion titleValue={"Users"} collapsed={true} />
      <Rating value={0} />
      <Rating value={1} />
      <Rating value={2} />
      <Rating value={3} />
      <Rating value={4} />
      <Rating value={5} />
    </div>
  );
}

export default App;

function PageTitle(props: any) {
  return (
    <>
      <h1>{props.title}</h1>
    </>
  );
}
