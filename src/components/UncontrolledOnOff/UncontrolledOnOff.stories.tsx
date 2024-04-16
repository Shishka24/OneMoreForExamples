import { UncontrolledOnOff } from "./UncontrolledOnOff";
import { action } from "@storybook/addon-actions";

export default {
  title: "UnconrolledOnOff",
  component: UncontrolledOnOff,
};
const callback = action("on or off click");
export const OnMode = () => (
  <UncontrolledOnOff defaultOn={true} onChange={callback} />
);
export const OffMode = () => (
  <UncontrolledOnOff defaultOn={false} onChange={callback} />
);
