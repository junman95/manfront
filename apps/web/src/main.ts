import { ExCounter } from "@repo/ui/ex-counter";
import { Header } from "@repo/ui/header";
import { setupCounter } from "@repo/ui/setup-counter";
import typescriptLogo from "/typescript.svg";
import "./style.css";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    ${Header({ title: "Web" })}
    <div class="card">
      ${ExCounter()}
    </div>
  </div>
`;

setupCounter(document.querySelector<HTMLButtonElement>("#counter")!);
