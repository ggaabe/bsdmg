var imageLoader = document.getElementById('imageLoader');
var imageLoader2 = document.getElementById('imageLoader2');
var topicLoader = document.getElementById('topic');
var formLoader = document.getElementById('memeform');
var bernieText = document.getElementById('bernietext');
var hillaryText = document.getElementById('hillarytext');
//formLoader = addEventListener('submit', handleForm, false);
imageLoader.addEventListener('change', handleImage, false);
imageLoader2.addEventListener('change', handleImage2, false);
topicLoader.addEventListener('change', topicHandler, false);

//bernieText.addEventListener('change', bernietextHandler, false);
hillaryText.addEventListener('change', hillarytextHandler, false);

document.getElementById('submitbern').addEventListener('click', bernietextHandler, false);
document.getElementById('submithill').addEventListener('click', hillarytextHandler, false);
document.getElementById('reset').addEventListener('click', reset, false);
document.getElementById('submittopic').addEventListener('click', topicHandler, false);
document.getElementById('saveImage').addEventListener('click', save, false);


var canvas = document.getElementById('imageCanvas');
var ctx = canvas.getContext('2d');


var memeImage = new Image();

memeImage.onload = function(){
    //memeImage.src = 'meme1.png';
canvas.width = memeImage.width;
canvas.height = memeImage.height;

ctx.drawImage(memeImage, 0, 0);
console.log(memeImage);
}
memeImage.src = 'newbern.png';

function save(){
       var button = document.getElementById('saveImage');
       var dataURL = canvas.toDataURL('image/octet-stream');
       /*img.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUA'+
       'AAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO'+
       '9TXL0Y4OHwAAAABJRU5ErkJggg==';*/
       img.onload = function () {
           button.removeAttribute('disabled');
       };
       button.onclick = function () {
           window.location.href = dataURL;//img.src.replace('image/png', 'image/octet-stream');
       };

   };

function reset(e){
  var memeImage = new Image();

  memeImage.onload = function(){
      //memeImage.src = 'meme1.png';
  canvas.width = memeImage.width;
  canvas.height = memeImage.height;

  ctx.drawImage(memeImage, 0, 0);
  console.log(memeImage);
  }
  memeImage.src = 'newbern.png';

}

function bernietextHandler(e){
    /*var topic = document.getElementById('bernietext');
    var text  = topic.value
    ctx.font="24px Helvetica";
    ctx.fillText(text, 60, 428, 228);

    var canvas = $('#imageCanvas');
    var ctx = canvas.get(0).getContext('2d');
    */
    ctx.fillStyle = "white";
    var text = document.getElementById('bernietext').value;
    var fontSize = 20,
	width = 225,
	lines = [],
        line = '',
	lineTest = '',
	words = text.split(' '),
	currentY = 0;

	    ctx.font = fontSize + 'px Arial';

	    for (var i = 0, len = words.length; i < len; i++) {
		lineTest = line + words[i] + ' ';

		// Check total width of line or last word
		if (ctx.measureText(lineTest).width > width) {
		    // Calculate the new height
		    currentY = lines.length * fontSize + fontSize;

		    // Record and reset the current line
		    lines.push({ text: line, height: currentY });
		    line = words[i] + ' ';
		} else {
		    line = lineTest;
		}
	    }

	    // Catch last line in-case something is left over
	    if (line.length > 0) {
		currentY = lines.length * fontSize + fontSize;
		lines.push({ text: line.trim(), height: currentY });
	    }

	    // Visually output text
	    //ctx.clearRect(0, 0, 500, 500);
	    for (var i = 0, len = lines.length; i < len; i++) {
		ctx.fillText(lines[i].text, 65, 417 + lines[i].height);
	    }
}

function hillarytextHandler(e){
    /*var topic = document.getElementById('bernietext');
    var text  = topic.value
    ctx.font="24px Helvetica";
    ctx.fillText(text, 60, 428, 228);

    var canvas = $('#imageCanvas');
    var ctx = canvas.get(0).getContext('2d');
    */
    ctx.fillStyle = "white";
    var text = document.getElementById('hillarytext').value;
    var fontSize = 20,
	width = 225,
	lines = [],
        line = '',
	lineTest = '',
	words = text.split(' '),
	currentY = 0;

	    ctx.font = fontSize + 'px Arial';

	    for (var i = 0, len = words.length; i < len; i++) {
		lineTest = line + words[i] + ' ';

		// Check total width of line or last word
		if (ctx.measureText(lineTest).width > width) {
		    // Calculate the new height
		    currentY = lines.length * fontSize + fontSize;

		    // Record and reset the current line
		    lines.push({ text: line, height: currentY });
		    line = words[i] + ' ';
		} else {
		    line = lineTest;
		}
	    }

	    // Catch last line in-case something is left over
	    if (line.length > 0) {
		currentY = lines.length * fontSize + fontSize;
		lines.push({ text: line.trim(), height: currentY });
	    }

	    // Visually output text
	    //ctx.clearRect(0, 0, 500, 500);
	    for (var i = 0, len = lines.length; i < len; i++) {
		ctx.fillText(lines[i].text, 338, 414 + lines[i].height);
	    }
}

function topicHandler(e){
    var topic = document.getElementById('topic');
    var text = topic.value;
    ctx.fillStyle = "black";
    ctx.font="24px Helvetica";
    ctx.fillText(text,160,170);

}

function handleImage(e){
    var reader = new FileReader();
    reader.onload = function(event){
        var img = new Image();
        img.onload = function(){
	    //canvas.width = img.width;
            //canvas.height = img.height;
	    //img.width = 228;
	    //img.height = 128;

            ctx.drawImage(img,60,416, 228, 128);
        }
	//var bernieImage = document.getElementById('imageLoader');
        img.src = event.target.result;
    }
    reader.readAsDataURL(e.target.files[0]);
}

function handleImage2(e){
var reader = new FileReader();
reader.onload = function(event){
    var img = new Image();
    img.onload = function(){
	ctx.drawImage(img,334,416, 228, 128);
    }
    var bernieImage = document.getElementById('imageLoader');
    img.src = event.target.result;
}
    reader.readAsDataURL(e.target.files[0]);
}
