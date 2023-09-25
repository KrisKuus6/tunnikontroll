let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');

ctx.fillStyle = 'blue';
ctx.fillRect(0, 60, 165, 30);
ctx.fillStyle = 'black';
ctx.fillRect(0, 90, 165, 30);
ctx.strokeStyle = 'black';
ctx.strokeRect(0, 120, 165, 30);

ctx.strokeStyle = 'black';
ctx.beginPath();
ctx.moveTo(310, 70);
ctx.lineTo(320, 90);
ctx.lineTo(340, 95);
ctx.lineTo(325, 110);
ctx.lineTo(330, 130);
ctx.lineTo(310, 120);
ctx.lineTo(290, 130);
ctx.lineTo(295, 110);
ctx.lineTo(280, 95);
ctx.lineTo(300, 90);
ctx.closePath();
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = 'black';
ctx.arc(225, 125, 30, 0, Math.PI/100*360);
ctx.closePath();
ctx.stroke();

ctx.beginPath();
ctx.moveTo(225, 125);
ctx.lineTo(210, 90); ctx.lineTo(240, 90);
ctx.lineTo(225, 125);
ctx.fill();

ctx.beginPath();
ctx.lineWidth = 19;
ctx.strokeStyle = 'white';
ctx.arc(225, 125, 40, 0, Math.PI/100*360);
ctx.closePath();
ctx.stroke();