import "./style.scss";
import { Counter } from "@repo/ui/counter";

const counter = new Counter({
  initialValue: 10,
  step: 5,
  onChange: (value) => console.log("Counter value:", value),
});

const logo = document.createElement("img");
logo.src = "./typescript.svg";
logo.style = "width: 100px; height: 100px";

const app = document.createElement("div");
app.classList.add("app");
app.appendChild(logo);
app.appendChild(counter.render());

app.style = `
  width:100vw;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  gap:20px;
`;
document.body.appendChild(app);
