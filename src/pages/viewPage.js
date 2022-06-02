import createHomeView from "../views/viewHome.js";

const creatHomePage = () => {
  const element = document.getElementById("app-root");
  element.innerHTML = "";
  const resultElement = createHomeView();
  element.appendChild(resultElement);
};

export default creatHomePage;
