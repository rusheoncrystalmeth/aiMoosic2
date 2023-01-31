song1 = "";
song2 = "";
song1_status = "";
song2_status = "";

function preload()
{
    song1 = loadSound("music.mp3");
    song1 = loadSound("dream_on.mp3");
}

function setup()
{
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function draw()
{
    image(video, 0, 0, 600, 500);
}

function play()
{
    song.play();
    song.setVolume(1);
    song.rate(1);
}