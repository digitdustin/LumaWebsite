document.getElementById('zones-window').style.top = "90px"

document.getElementById('main-window').style.top = "30px"

document.getElementById('dashboard-window').style.top = "280px"

var defaults = {
    "zones-window": "90px",
    "main-window" : "30px",
    "dashboard-window" : "280px"
}

function hover(e) {
    var id = e.id
    var newId = id.substring(0, id.length - 5)
    var textId = newId + "-description";
    console.log(textId);
    var area = document.getElementById(newId);
    var textArea = document.getElementById(textId);
    var allAnimations = area.getAnimations();
    if (allAnimations.length == 0) {
        var currentPos = parseInt((area.style.top).substring(0, area.style.top.length - 2))
        
        area.animate([
            { // from
              top: (area.style.top)
            },
            { // to
              top: (parseInt((area.style.top).substring(0, area.style.top.length - 2)) - 30) + "px"
            }
          ], 400, "swing");
          area.style.top = parseInt((area.style.top).substring(0, area.style.top.length - 2) - 30) + "px";
          console.log(parseInt((area.style.top).substring(0, area.style.top.length - 2) - 30) + "px")

        textArea.animate([
            {
                transform: "unset",
                textShadow: "0px 0px 0px transparent"
            },
            {
                transform: "translateX(10px)",
                textShadow: "0px 0px 6px #d3d3d3"
            }
        ], 300, "linear")
        textArea.style.transform = "translateX(10px)"
        textArea.style.textShadow = "0px 0px 6px #d3d3d3"
          
    }
}

function unhover(e) {
    var id = e.id
    var newId = id.substring(0, id.length - 5)
    var area = document.getElementById(newId);
    var textId = newId + "-description";
    var textArea = document.getElementById(textId);
    var allAnimations = area.getAnimations();
    var textAnimations = textArea.getAnimations();
    if (allAnimations.length == 0) {
        area.animate([
            { // from
              top: area.style.top
            },
            { // to
              top: defaults[newId]
            }
          ], 400, "swing");
          area.style.top = defaults[newId];
          
          textArea.animate([
            {
                transform: textArea.style.transform,
                textShadow: textArea.style.textShadow
            },
            {
                transform: "unset",
                textShadow: "0px 0px 0px transparent"
            }
        ], 300, "linear")
        textArea.style.transform = "unset"
        textArea.style.textShadow = "0px 0px 0px transparent"
    } else {
        for (let i = 0; i < allAnimations.length; i++) {
            allAnimations[i].reverse();
        }
        for (let i = 0; i < textAnimations.length; i++) {
            textAnimations[i].reverse();
        }
        area.style.top = defaults[newId];
        textArea.style.transform = "unset"
        textArea.style.textShadow = "0px 0px 0px transparent"
    }
    
    

}