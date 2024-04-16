import { useState } from "react";

type PropsType = {
  // on: boolean;
  onChange: (on: boolean) => void;
  defaultOn?: boolean;
};

export function UncontrolledOnOff(props: PropsType) {
  //   let on = false;
  let [on, setOn] = useState(props.defaultOn ? props.defaultOn : false);
  const OnOffClickHandler = () => {
    if (!on) {
      setOn(true);
      props.onChange(true);
    } else {
      setOn(false);
      props.onChange(false);
    }
  };

  let onStyle = {
    border: "1px solid black",
    width: "30px",
    height: "30px",
    display: "inline-block",
    marginLeft: "5px",
    padding: "2px",
    backgroundColor: on ? "green" : "white",
  };
  let offStyle = {
    border: "1px solid black",
    width: "30px",
    height: "30px",
    display: "inline-block",
    marginLeft: "5px",
    padding: "2px",
    backgroundColor: on ? "white" : "red",
  };
  const sizeStyle = {
    width: "10px",
    height: "10px",
    borderRadius: "15px",
    border: "1px solid black",
    marginLeft: "5px",
    display: "inline-block",
    backgroundColor: on ? "green" : "red",
  };
  return (
    <>
      <div style={onStyle} onClick={OnOffClickHandler}>
        On
      </div>
      <div style={offStyle} onClick={OnOffClickHandler}>
        Off
      </div>
      <div style={sizeStyle}></div>
    </>
  );
}
