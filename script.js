//create a border
var border = document.querySelector('#border');
border.style.border = '1px solid black';
border.style.display = 'flex';
border.style.flexDirection = 'column';
border.style.width = "600px";
border.style.height = "500px";


var n = 16;
for(var i = 0; i < n; i++){
    var row = document.createElement('div');
    row.style.display = 'flex';
    row.style.flexGrow = '1';
    for(var j = 0; j < n; j++){
        var newElement = document.createElement('div');
        newElement.className = 'childDiv';
        newElement.style.flex = '1';
        newElement.style.border = '1px solid black';
        newElement.style.padding = '10px';
        row.appendChild(newElement);
    }
    border.appendChild(row);
}
var divs = document.querySelectorAll('.childDiv');
    divs.forEach(function(child){
        child.addEventListener('mouseenter', function(){
            child.style.background = 'black';
        });
    });

function change(number){
    let child = document.querySelectorAll('.childDiv');
    child.forEach(function(childDiv){
        childDiv.remove();
    })
    

    for(var i = 0; i < number; i++){
        var row = document.createElement('div');
        row.style.display = 'flex';

        let w = 600/number;
        let h = 500/number;
        for(var j = 0; j < number; j++){
            var newElement = document.createElement('div');
            newElement.className = 'childDiv';
            newElement.style.flex = '1';
            newElement.style.width = w;
            newElement.style.height = h;
            newElement.style.border = '1px solid black';
            newElement.style.padding = '10px';
            row.appendChild(newElement);
        }

        border.appendChild(row);
    }
    var divs = document.querySelectorAll('.childDiv');
    divs.forEach(function(child){
        child.addEventListener('mouseenter', function(){
            child.style.color = 'black';
        });
    });

}

document.addEventListener('DOMContentLoaded', function() {
    var sixtyFour = document.getElementById('sixtyFour');
    sixtyFour.addEventListener('click', function() {
        change(64);
    });

    var oneTwentyEightButton = document.getElementById('one-twenty-eight');
    oneTwentyEightButton.addEventListener('click', function() {
        change(128);
    });
});

