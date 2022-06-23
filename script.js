var container = document.createElement('div');
document.body.append(container);

function checkerBoard() {
for(var i=0; i < 63; i++){
  
    var div = document.createElement('div');
    
    div.style.width = '11.11%';
    div.style.float = "left";
    div.style.paddingBottom = '11.1%';
    
    // div.style.border = '1px solid black';
    container.append(div);

    if (i % 2 === 0) {
        div.style.background = 'red';
    } else {
        div.style.background = 'black';
    }
}
}

checkerBoard()

