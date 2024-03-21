import React, { useState } from "react";

export const UnControlledRating = () => {
  console.log("Rating rendering");
  let [value, setValue] = useState(0);
  return (
    <div>
      <Star
        selected={value > 0}
        setValue={() => {
          setValue(1);
        }}
      />
      <Star
        selected={value > 1}
        setValue={() => {
          setValue(2);
        }}
      />
      <Star
        selected={value > 2}
        setValue={() => {
          setValue(3);
        }}
      />
      <Star
        selected={value > 3}
        setValue={() => {
          setValue(4);
        }}
      />
    </div>
  );
};

type StarPropsType = {
  selected: boolean;
  setValue: () => void;
};
const Star = (props: StarPropsType) => {
  console.log("Star rendering");
  return (
    <span
      onClick={() => {
        props.setValue();
      }}
    >
      {props.selected ? <b> star </b> : "star"}
    </span>
  );
};
