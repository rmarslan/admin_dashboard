import "../scss/main.scss";
import "../index.html";
import $ from "jquery";
import "bootstrap/js/dist/collapse";

$(document).ready(function () {
  const sideBarToggleButton = $("#sidebar-toggler-icon");
  const sideBar = $("#sidebar");

  sideBarToggleButton.on("click", () => {
    sideBar.toggleClass("toggled");
  });
});
