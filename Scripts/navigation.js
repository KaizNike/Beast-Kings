function openTab(evt, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

function openStoryTab(evt, tabName, tabName2, tabName3) {
    var i, storycontent, storylinks;
    storycontent = document.getElementsByClassName("selectioncontent");
    for (i = 0; i < storycontent.length; i++) {
        storycontent[i].style.display = "none";
    }
    storylinks = document.getElementsByClassName("storylinks");
    for (i = 0; i < storylinks.length; i++) {
        storylinks[i].className = storylinks[i].className.replace(" active", "");
    }
    if (step1 == true) {
        document.getElementById(tabName3).style.display = "block";
    }
    else {
        document.getElementById(tabName).style.display = "block";
    }
    document.getElementById(tabName2).style.display = "block";
    evt.currentTarget.className += " active";
}

function openStoryTabSelect(evt, tabName) {
    var i, storycontent, storylinks;
    storycontent = document.getElementsByClassName("storycontent");
    for (i = 0; i < storycontent.length; i++) {
        storycontent[i].style.display = "none";
    }
    storylinks = document.getElementsByClassName("selectioncontent");
    for (i = 0; i < storylinks.length; i++) {
        storylinks[i].className = storylinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}