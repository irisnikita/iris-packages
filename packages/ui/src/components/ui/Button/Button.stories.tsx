import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { Button, ButtonProps } from "./Button";

// Icons
import { ChevronRight, Loader2, Power } from "lucide-react";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
    docs: {
      description: {
        component:
          "A versatile button component with multiple variants and sizes, built with class-variance-authority (CVA). Supports different styles like primary, secondary, ghost, outline, and link.",
      },
    },
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: "color" },
  // },
  argTypes: {
    variant: {
      description: "Defines the button style variant.",
      control: "select",
      options: [
        "default",
        "destructive",
        "outline",
        "secondary",
        "ghost",
        "link",
      ],
    },
    size: {
      description: "Defines the button size.",
      control: "select",
      options: ["default", "sm", "lg", "icon"],
    },
    asChild: {
      description:
        "If true, the button acts as a wrapper for child components instead of a button element.",
      control: "boolean",
    },
    children: {
      description: "The content inside the button.",
      control: "text",
    },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    children: "Default Button",
    variant: "default",
    size: "default",
  },
};

export const Destructive: Story = {
  args: {
    children: "Destructive Button",
    variant: "destructive",
  },
};

export const Outline: Story = {
  args: {
    children: "Outline Button",
    variant: "outline",
  },
};

export const Secondary: Story = {
  args: {
    children: "Secondary Button",
    variant: "secondary",
  },
};

export const Ghost: Story = {
  args: {
    children: "Ghost Button",
    variant: "ghost",
  },
};

export const Link: Story = {
  args: {
    children: "Link Button",
    variant: "link",
  },
};

export const Small: Story = {
  args: {
    children: "Small Button",
    size: "sm",
  },
};

export const Large: Story = {
  args: {
    children: "Large Button",
    size: "lg",
  },
};

export const Icon: Story = {
  render: (args) => {
    return <Button children={<ChevronRight />} {...args} />;
  },
  args: {
    size: "icon",
  },
};

export const WithIcon: Story = {
  render: (args: ButtonProps) => {
    const { children } = args;

    return (
      <Button>
        <Power /> {children}
      </Button>
    );
  },
  args: {
    children: "Turn on",
  },
};

export const Loading: Story = {
  render: () => {
    return (
      <Button disabled>
        <Loader2 className="ir-animate-spin" />
        Please wait
      </Button>
    );
  },
};

export const AsChild: Story = {
  render: () => {
    return (
      <Button asChild>
        <a href="/login">Login</a>
      </Button>
    );
  },
};
