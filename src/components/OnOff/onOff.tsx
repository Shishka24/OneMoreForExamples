import { useState } from "react";

type PropsType = {
  on: boolean;
  onChange: (on: boolean) => void;
};

export function OnOFF(props: PropsType) {
  let onStyle = {
    border: "1px solid black",
    width: "30px",
    height: "30px",
    display: "inline-block",
    marginLeft: "5px",
    padding: "2px",
    backgroundColor: props.on ? "green" : "white",
  };
  let offStyle = {
    border: "1px solid black",
    width: "30px",
    height: "30px",
    display: "inline-block",
    marginLeft: "5px",
    padding: "2px",
    backgroundColor: props.on ? "white" : "red",
  };
  const sizeStyle = {
    width: "10px",
    height: "10px",
    borderRadius: "15px",
    border: "1px solid black",
    marginLeft: "5px",
    display: "inline-block",
    backgroundColor: props.on ? "green" : "red",
  };
  return (
    <>
      <div
        style={onStyle}
        onClick={() => {
          props.onChange(true);
        }}
      >
        On
      </div>
      <div
        style={offStyle}
        onClick={() => {
          props.onChange(false);
        }}
      >
        Off
      </div>
      <div style={sizeStyle}></div>
    </>
  );
}
