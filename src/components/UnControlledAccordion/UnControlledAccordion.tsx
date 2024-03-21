import React, { useState } from "react";
import { Accordion } from "../Accordion";

type AccordionPropsType = {
  titleValue: string;
};
type AccordionTitlePropsType = {
  onClick: () => void;
  title: string;
};
export const UnControlledAccordion = (props: AccordionPropsType) => {
  console.log("Accordion rendering");
  let [collapsed, setCollapsed] = useState(false);
  return (
    <div>
      <AccordionTitle
        title={props.titleValue}
        onClick={() => {
          setCollapsed(!collapsed);
        }}
      />
      {!collapsed && <AccordionBody />}
    </div>
  );
};

function AccordionTitle({ title, onClick }: AccordionTitlePropsType) {
  console.log("AccordionTitle rendering");
  return (
    <h3
      onClick={() => {
        onClick();
      }}
    >
      --{title}--
    </h3>
  );
}
function AccordionBody() {
  console.log("AccordionBody rendering");
  return (
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>
  );
}
