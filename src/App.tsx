// import "./App.css";
import { useState } from "react";
import { Accordion } from "./components/Accordion";
import { Rating, RatingValueType } from "./components/Rating";
import { UnControlledAccordion } from "./components/UnControlledAccordion/UnControlledAccordion";
import { UnControlledRating } from "./components/UncontrolledRating/UnControlledRating";
import { OnOFF } from "./components/OnOFF/OnOFF";
import { UncontrolledOnOff } from "./components/UncontrolledOnOff/UncontrolledOnOff";

function App() {
  let [ratingValue, setRatingValue] = useState<RatingValueType>(0);
  let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(true);
  let [switchOnOFF, setSwitchOnOFF] = useState<boolean>(false);
  return (
    <div className="App">
      <OnOFF
        on={switchOnOFF}
        onChange={(on) => {
          setSwitchOnOFF(on);
        }}
      />
      <UncontrolledOnOff onChange={setSwitchOnOFF} />
      <UnControlledRating />
      <UnControlledAccordion titleValue="Menu" />
      <Accordion
        titleValue={"Menu"}
        collapsed={accordionCollapsed}
        onChange={() => {
          alert(setAccordionCollapsed(!accordionCollapsed));
        }}
      />
      <Rating value={ratingValue} onClick={setRatingValue} />
      {/* <OnOff on={false} /> */}
      {/* <OnOff on={true} /> */}
      {/* <PageTitle title={"This is APP Component"} /> */}
      {/* <PageTitle title={"My Friends"} /> */}
      {/* <Accordion titleValue={"Users"} collapsed={true} /> */}
      {/* <Rating value={0} /> */}
      {/* <Rating value={1} /> */}
      {/* <Rating value={2} /> */}
      {/* <Rating value={3} /> */}
      {/* <Rating value={4} /> */}
      {/* <Rating value={5} /> */}
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
