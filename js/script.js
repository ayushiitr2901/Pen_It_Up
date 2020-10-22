var myCan = document.getElementById("defaultCanvas0");
var ctx = myCan.getContext("2d");
// var myImg = document.createElement("img");
var myImg = new Image();
myImg.setAttribute("src", "assets/paper.png");
myImg.setAttribute("width", "600");
myImg.setAttribute("height", "400");
// document.body.appendChild(myImg);
window.onload = function() {

    ctx.drawImage(myImg, 0, 0);
  }
var myInputBox = document.getElementById("input-box");
var myText = myInputBox.onkeyup = function() {myFunction()};
function  myFunction()
{
    
    console.log(myCan.width, myCan.height);
    ctx.clearRect(0,0,myCan.width,myCan.height);
    ctx.drawImage(myImg, 0, 0);
    ctx.font = "lighter 20px Patrick Hand SC";
    //ctx.fillText(myInputBox.value, 10, 50);
    var lines = myInputBox.value.split('\n');
    var lineNos = 0;
    for (var j = 0; j<lines.length; j++)
    {
        var lineWidth = ctx.measureText(lines[j]).width; 
        var words = lines[j].split(' ');
        //console.log(lines,words);
        var i = 1;
        var myLine = words[0];
        //console.log(words.length);
        while(i<words.length)
        {
            //console.log(Math.ceil(ctx.measureText(myLine + " "+ words[i]).width+20), myCan.width);
            if(Math.ceil(ctx.measureText(myLine + " "+ words[i]).width+20)>myCan.width)
            {
                console.log("CASE 1: "+myLine);
                ctx.fillText(myLine, 10, 20 + (lineNos*20));
                lineNos++;
                myLine = words[i];
                i++;
            }
            else
            {
                var str = " "+words[i];
                myLine = myLine + str;
                console.log("Concated: "+myLine);
                i++;
            }
        }
        console.log("CASE 2: "+myLine);
        ctx.fillText(myLine, 10, 20 + (lineNos*20));
        lineNos++;
    }
    //console.log(myInputBox.value);
    return myInputBox.value;
}