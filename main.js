function showContent(id) {
  $("div#about")
    .removeClass(id == "about" ? "hide" : "show")
    .addClass(id == "about" ? "show" : "hide");
  $("div#research")
    .removeClass(id == "research" ? "hide" : "show")
    .addClass(id == "research" ? "show" : "hide");
  $("div#planning")
    .removeClass(id == "planning" ? "hide" : "show")
    .addClass(id == "planning" ? "show" : "hide");
  $("div#communication")
    .removeClass(id == "communication" ? "hide" : "show")
    .addClass(id == "communication" ? "show" : "hide");
  $("div#devandqa")
    .removeClass(id == "devandqa" ? "hide" : "show")
    .addClass(id == "devandqa" ? "show" : "hide");
}
