border = document.getElementById('border');
border.style.border = '1px solid black';
border.style.width = "6git00px";
border.style.height = "500px";
var n = 16;
for(var i = 0; i < n; i++){
    var row = document.createElement('div');

    for(var j = 0; j < n; j++){
        var newElement = document.createElement('div');
        // newElement.style.border = '1px solid black';
        row.appendChild(newElement);
    }
    border.appendChild(row);
}