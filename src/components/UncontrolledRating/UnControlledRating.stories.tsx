// import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { useState } from "react";
import { UnControlledRating } from "./UnControlledRating";

// // const meta: Meta<typeof Accordion> = {
// //   component: Accordion,
// // };
// // export default meta;
export default {
  title: "UnControlledRating",
  component: UnControlledRating,
};
const callback = action("rating set inside COmponent");

export const EmptyRating = () => (
  <UnControlledRating defaultValue={0} onChange={callback} />
);
export const Rating1 = () => (
  <UnControlledRating defaultValue={1} onChange={callback} />
);
export const Rating2 = () => (
  <UnControlledRating defaultValue={2} onChange={callback} />
);
export const Rating3 = () => (
  <UnControlledRating defaultValue={3} onChange={callback} />
);
export const Rating4 = () => (
  <UnControlledRating defaultValue={4} onChange={callback} />
);
export const Rating5 = () => (
  <UnControlledRating defaultValue={5} onChange={callback} />
);
