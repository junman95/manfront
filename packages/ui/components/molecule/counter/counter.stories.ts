import type { Meta, StoryObj } from "@storybook/html-vite";
import { Counter, type CounterParams } from "./counter";

const meta: Meta<CounterParams> = {
  title: "Components/Counter",
  tags: ["autodocs"],
  render: (args) => createCounter(args),
  argTypes: {
    initialValue: {
      control: { type: "number" },
      description: "카운터의 초기값",
    },
    step: {
      control: { type: "number" },
      description: "증가/감소 단위",
    },
    onChange: {
      action: "changed",
      description: "값이 변경될 때 호출되는 콜백",
    },
  },
  args: {
    initialValue: 0,
    step: 1,
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<CounterParams>;

export const Default: Story = {
  args: {
    initialValue: 0,
    step: 1,
  },
};

export const StartingFromTen: Story = {
  args: {
    initialValue: 10,
    step: 1,
  },
};

export const StepByFive: Story = {
  args: {
    initialValue: 0,
    step: 5,
  },
};

export const NegativeStart: Story = {
  args: {
    initialValue: -5,
    step: 2,
  },
};

/**
 * Counter 컴포넌트를 생성하고 DOM 요소를 반환합니다
 */
function createCounter(args: CounterParams): HTMLElement {
  const counter = new Counter({
    ...args,
    onChange:
      args.onChange ||
      ((value: number) => {
        console.log("Counter value changed:", value);
      }),
  });

  const container = document.createElement("div");
  container.appendChild(counter.render());
  return container;
}
