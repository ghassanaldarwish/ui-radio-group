import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Label } from "@wds-ui/label";
import { RadioGroup, RadioGroupItem } from "./index";

const meta: Meta<typeof RadioGroup> = {
  component: RadioGroup,
  title: "Marbella/RadioGroup",
  argTypes: {},
};
export default meta;

type Story = StoryObj;

export const Primary: Story = (args: any) => (
  <RadioGroup defaultValue="comfortable">
    <div className="flex items-center space-x-2">
      <RadioGroupItem value="default" id="r1" />
      <Label htmlFor="r1">Default</Label>
    </div>
    <div className="flex items-center space-x-2">
      <RadioGroupItem value="comfortable" id="r2" />
      <Label htmlFor="r2">Comfortable</Label>
    </div>
    <div className="flex items-center space-x-2">
      <RadioGroupItem value="compact" id="r3" />
      <Label htmlFor="r3">Compact</Label>
    </div>
  </RadioGroup>
);
Primary.args = {
  primary: true,
  disabled: false,
  text: "Primary",
};
