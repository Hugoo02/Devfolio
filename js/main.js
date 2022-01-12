const sr = ScrollReveal({
  origin: "top",
  distance: "50px",
  duration: 2000,
  reset: false,
});

sr.reveal(".anim", { delay: 500 });

$('#grayButton').click(switchGray);
$('#whiteButton').click(switchWhite);
$('#blueButton').click(switchBlue);
$('#yellowButton').click(switchYellow);

function switchGray() {
  $('body').attr('class', 'gray');
}

function switchWhite() {
  $('body').attr('class', 'white');
}

function switchBlue() {
  $('body').attr('class', 'blue');
}

function switchYellow() {
  $('body').attr('class', 'yellow');
}
