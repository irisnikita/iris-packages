import { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Displays a form input field or a component that looks like an input field.",
      },
    },
  },
  argTypes: {
    type: {
      description: "Defines the input type.",
      options: ["text", "password", "email", "number", "search"],
      control: { type: "select" },
    },
    placeholder: {
      description: "Defines the input placeholder text.",
      control: { type: "text" },
    },
    disabled: {
      description: "Defines if the input is disabled.",
      control: { type: "boolean" },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    type: "text",
    placeholder: "Placeholder",
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};
