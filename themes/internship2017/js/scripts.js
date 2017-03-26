 var navShowHide = function() {
     var menu_div = document.getElementsByClassName("menu")[0];
     var classes = menu_div.className;
     if (classes.indexOf('mobileview-hide') == -1) {
         menu_div.className += 'mobileview-hide';
     } else {
         menu_div.className = classes.replace('mobileview-hide','');
     }
     // var logoImage = document.getElementsByClassName("logo-image")[0];
     // logoImage.style.display = 'none';
 }

 var menu_element = document.getElementsByClassName("menu-button");
 menu_element[0].onclick = navShowHide;
