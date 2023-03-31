var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window");
	video = document.querySelector("#player1");
	video.autoplay = false;
	console.log("Autoplay is set to " + video.autoplay);
	video.loop = false;
	console.log("Loop is set to " + video.loop);
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	document.querySelector("#volume").innerText = video.volume * 100 + "%"
});

document.querySelector("#pause").addEventListener("click", function(){
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function(){
	video.playbackRate = video.playbackRate * 0.9;
	console.log("Slown down video");
	console.log("Speed is " + video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate = video.playbackRate / 0.9;
	console.log("Speed up video");
	console.log("Speed is " + video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	if (video.currentTime + 10 < video.duration) {
		console.log("Skip ahead");
		video.currentTime = video.currentTime + 10;
		console.log("Video current time is " + video.currentTime);
	} else {
		console.log("Skip ahead");
		video.currentTime = 0;
		console.log("Video current time is " + video.currentTime)
	};
});

document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted === false) {
		video.muted = true;
		document.querySelector("#mute").innerText = "Unmute";
		console.log("Muted");
	} else {
		video.muted = false;
		document.querySelector("#mute").innerText = "Mute";
		console.log("Unmuted");
	}
});

document.querySelector("#slider").addEventListener("change", function() {
	video.volume = document.querySelector("#slider").value/100;
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
	console.log("The current value is " + video.volume);
});


document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add("oldSchool");
	console.log("Old School");
});

document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove("oldSchool");
	console.log("Original");
});