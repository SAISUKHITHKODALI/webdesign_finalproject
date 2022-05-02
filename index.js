
function openinfo(evt, trek) {
  var i, tab_content, tab_link;
  tab_content = document.getElementsByClassName("tab_content");
  for (i = 0; i < tab_content.length; i++) {
    tab_content[i].style.display = "none";
  }
  tab_link = document.getElementsByClassName("tab_link");
  for (i = 0; i < tablinks.length; i++) {
    tab_link[i].className = tab_link[i].className.replace(" active", "");
  }
  document.getElementById(trek).style.display = "block";
  evt.currentTarget.className += " active";
}