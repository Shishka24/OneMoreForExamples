// import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import { Accordion } from "./Accordion";
import { useState } from "react";

export default {
  title: "Accordion",
  component: Accordion,
};
const onChangeHandler = action("on Change");

export const MenuAccordion = () => {
  return (
    <Accordion
      titleValue={"Menu"}
      collapsed={true}
      onChange={onChangeHandler}
    />
  );
};
export const UsersAccordion = () => {
  return (
    <Accordion
      titleValue={"Ùsers"}
      collapsed={false}
      onChange={onChangeHandler}
    />
  );
};
export const Accordion2 = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Accordion
      titleValue={"Users"}
      collapsed={collapsed}
      onChange={() => {
        setCollapsed(!collapsed);
      }}
    />
  );
};
