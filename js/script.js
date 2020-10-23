
//Variable Declarations

var myCan = document.getElementById("defaultCanvas0");
var ctx = myCan.getContext("2d");
var myInputBox = document.getElementById("input-box");

var fontFt = {
    x: 40,
    y: 94,
    lineSpacing: 32,
    fontSize: 25+"px",
    fontFamily: "Patrick Hand SC"
};

var imgFt = {
    imgPATH: "assets/",
    imgName: "paper.png",
    imgPosStart: [-66,-56],
    imgPosEnd: [600,700]
};

var canvasFt = {
    position: [0,0],
    paddingX: 0,
    paddingY: 0,
    width: "500px",
    height: "600px"
}

// Scripting

var myImg = new Image();
myImg.setAttribute("src", imgFt.imgPATH+imgFt.imgName);
window.onload = function() {
    ctx.drawImage(myImg, imgFt.imgPosStart[0], imgFt.imgPosStart[1], imgFt.imgPosEnd[0], imgFt.imgPosEnd[1]);
}
myInputBox.oninput = function() {updateData();};
function updateData () {
    console.log(fontFt.lineSpacing, fontFt.x, fontFt.y);
    //ctx.clearRect(0,0,myCan.width,myCan.height);
    ctx.drawImage(myImg, imgFt.imgPosStart[0], imgFt.imgPosStart[1], imgFt.imgPosEnd[0], imgFt.imgPosEnd[1]);
    ctx.font = fontFt.fontSize+" "+fontFt.fontFamily;
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
            if(Math.ceil(ctx.measureText(myLine + " "+ words[i]).width+72)>myCan.width)
            {
                //console.log("CASE 1: "+myLine);
                ctx.fillText(myLine, fontFt.x, fontFt.y + (lineNos*fontFt.lineSpacing));
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
        //console.log("CASE 2: "+myLine);
        ctx.fillText(myLine, fontFt.x, fontFt.y + (lineNos*fontFt.lineSpacing));
        lineNos++;
    }
    //console.log(myInputBox.value);
    return myInputBox.value;
};