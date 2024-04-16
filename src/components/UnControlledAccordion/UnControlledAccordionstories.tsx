// import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { UnControlledAccordion } from "./UnControlledAccordion";
import { useState } from "react";

export default {
  title: "UncontrolledAccordion",
  component: UnControlledAccordion,
};
const callback = action("on Change");

// export const MenuCollapsedMode=()=><UnControlledAccordion titleValue={"Menu"} />
export const ModeChanging = () => {
  return <UnControlledAccordion titleValue={"Users"} />;
};
