import { type Html, html, on, View } from "rune-ts";

export interface CounterParams {
  initialValue?: number;
  step?: number;
  onChange?: (value: number) => void;
}

export class Counter extends View<CounterParams> {
  protected override template(): Html {
    return html`
    <div>
      <button>빼기 </button>
      <span>${this.data.initialValue || 0}</span>
      <button>더하기 </button>
    </div>`;
  }

  @on("click", "button:first-child")
  decrement() {
    const step = this.data.step || 1;
    const currentValue =
      Number(this.element().querySelector("span")?.innerText) || 0;
    const newValue = currentValue - step;
    this.element().querySelector("span")!.innerText = String(newValue);
    this.data.onChange?.(newValue);
  }

  @on("click", "button:last-child")
  increment() {
    const step = this.data.step || 1;
    const currentValue =
      Number(this.element().querySelector("span")?.innerText) || 0;
    const newValue = currentValue + step;
    this.element().querySelector("span")!.innerText = String(newValue);
    this.data.onChange?.(newValue);
  }
}
