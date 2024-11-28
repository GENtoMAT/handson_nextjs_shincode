import SaySomething from "./saySomething"

const root: HTMLElement | null = document.getElementById("root")

//インスタンス化
const saySome = new SaySomething("Hello Typescript")
saySome.sayText(root)
