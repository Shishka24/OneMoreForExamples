type AccordionPropsType = {
  titleValue: string;
  collapsed: boolean;
};
type AccordionTitlePropsType = {
  title: string;
};
// type AccordionBodyPropsType = {
//   collapsed:boolean;
// };
export const Accordion = ({ titleValue, collapsed }: AccordionPropsType) => {
  console.log("Accordion rendering");
  if (!collapsed) {
    return (
      <div>
        <AccordionTitle title={titleValue} />
        <AccordionBody />
      </div>
    );
  } else {
    return <h3>Nothing To Show</h3>;
  }
};

function AccordionTitle({ title }: AccordionTitlePropsType) {
  console.log("AccordionTitle rendering");
  return <h3>--{title}--</h3>;
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
