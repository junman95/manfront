import { type Html, html, on, View } from "rune-ts";
import styles from "./counter.module.scss";

export interface CounterParams {
  initialValue?: number;
  step?: number;
  onChange?: (value: number) => void;
}

export class Counter extends View<CounterParams> {
  protected override template(): Html {
    return html`
    <div class="${styles.container}">
      <button class="${styles.ctaButton}">빼기 </button>
      <span class="${styles.label}">${this.data.initialValue || 0}</span>
      <button class="${styles.ctaButton}">더하기 </button>
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
