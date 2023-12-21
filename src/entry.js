import msg from "./info";
import { createElement } from "./createEle";

createElement("h1", msg);

let button = document.createElement("button");
button.innerText = "Click to lazy load";
document.body.append(button)
import click from "./click"
button.onclick = () => {
    click()
}