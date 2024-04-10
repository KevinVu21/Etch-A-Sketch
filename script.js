//create a border
var border = document.querySelector('#border');
border.style.border = '5px solid black';
border.style.display = 'flex';
border.style.flexDirection = 'column';
border.style.width = "600px";
border.style.height = "500px";


var n = 16;

    function change(number) {
        border.innerHTML = '';

        var borderWidth = border.offsetWidth;
        var borderHeight = border.offsetHeight;
        var cellWidth = borderWidth / number;
        var cellHeight = borderHeight / number;

        // Create new grid
        for (var i = 0; i < number; i++) {
            var row = document.createElement('div');
            row.style.display = 'flex';
            row.style.flexGrow = '1';
            for (var j = 0; j < number; j++) {
                var newElement = document.createElement('div');
                newElement.className = 'childDiv';
                newElement.style.width = cellWidth + 'px';
                newElement.style.height = cellHeight + 'px';
                // newElement.style.border = '1px solid black';
                // newElement.style.padding = '10px';
                row.appendChild(newElement);
            }

            border.appendChild(row);
        }
        
        // Attach mouse enter event listener
        let divs = document.querySelectorAll('.childDiv');
        divs.forEach(function(child) {
            child.addEventListener('mouseenter', function() {
                child.style.background = 'black';
            });
        });
    }
    change(n);

    var sixtyFour = document.getElementById('sixtyFour');
    sixtyFour.addEventListener('click', function() {
        change(64);
    });

    var oneTwentyEightButton = document.getElementById('one-twenty-eight');
    oneTwentyEightButton.addEventListener('click', function() {
        change(128);
    });

    var custom = document.querySelector("#custom");
    custom.addEventListener('click', function(){
        let userVal = prompt("please enter a size");
        change(userVal);
    });
    var clear = document.querySelector('#clear');
    clear.addEventListener('click', function(){
        let divs = document.querySelectorAll('.childDiv');
        divs.forEach(function(div){
            div.style.background = 'white';
        })
    });