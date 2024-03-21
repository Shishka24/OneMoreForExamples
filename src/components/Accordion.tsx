type AccordionPropsType = {
  titleValue: string;
  collapsed: boolean;
  onChange: () => void;
};
type AccordionTitlePropsType = {
  title: string;
  onChange: () => void;
};
// type AccordionBodyPropsType = {
//   collapsed:boolean;
// };
export const Accordion = ({
  titleValue,
  collapsed,
  onChange,
}: AccordionPropsType) => {
  console.log("Accordion rendering");
  if (!collapsed) {
    return (
      <div>
        <AccordionTitle title={titleValue} onChange={onChange} />
        <AccordionBody />
      </div>
    );
  } else {
    return <h3>Nothing To Show</h3>;
  }
};

function AccordionTitle({ title, onChange }: AccordionTitlePropsType) {
  console.log("AccordionTitle rendering");
  return <h3 onClick={onChange}>--{title}--</h3>;
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
