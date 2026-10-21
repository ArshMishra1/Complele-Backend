import figlet from "figlet";

async function doStuff() {
  const text = await figlet.text("Hello Arsh!!");
  console.log(text);
}

doStuff();