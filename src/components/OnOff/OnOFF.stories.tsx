import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import { OnOFF } from "./OnOFF";
import { useState } from "react";
import { RatingValueType } from "../Rating";

// const meta: Meta<typeof Accordion> = {
//   component: Accordion,
// };
// export default meta;
export default {
  title: "OnOff",
  component: OnOFF,
};
const callback = action("on off switched");
export const OnMode = () => <OnOFF on={true} onChange={callback} />;
export const OffMode = () => <OnOFF on={false} onChange={callback} />;

const onChangeHandler = action("on Change");

export const ModeChanging = () => {
  const [value, setValue] = useState<boolean>(true);
  return <OnOFF on={value} onChange={setValue} />;
};
