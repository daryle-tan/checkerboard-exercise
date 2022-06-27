var container = document.createElement('div');
document.body.append(container);

function checkerBoard() {
  for(i=0; i < 81; i++) {
    var x = Math.floor(Math.random() * 256);
    var y = 100+ Math.floor(Math.random() * 256);
    var z = 50+ Math.floor(Math.random() * 256);
    var color = "rgb(" + x + "," + y + "," + z + ")";
    var div = document.createElement('div');
      
    div.style.width = '11.11%';
    div.style.float = "left";
    div.style.paddingBottom = '11.1%';
    
    
    container.append(div);
    
    if(i % 2 === 0) {
      div.style.background = `rgb(${x}, ${y}, ${z})`;
    } else {     
      div.style.background = `rgb(${x}, ${y}, ${z})`;
    }
    x += 3;
    y += 2;
    z -= 2;
  }
}

checkerBoard()

