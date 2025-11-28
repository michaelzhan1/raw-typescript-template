const onClick = () => {
  alert("Hello, world!");
};

const button = document.getElementById("sample-button");
if (button !== null) {
  button.addEventListener("click", onClick);
}
