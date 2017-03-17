var ctrAudio = document.getElementById("som");
var playaudio = document.getElementById("playaudio");
var pauseaudio = document.getElementById("pauseaudio");
var vmenosaudio = document.getElementById("vMenosAudio");
var vmaisaudio = document.getElementById("vMaisAudio");
var rangeaudio =document.getElementById("vRangeAudio");
var reiniciaraudio = document.getElementById("reiniciarAudio");
var vmudoaudio = document.getElementById("vMudoAudio");
var proxaudio = document.getElementById("prox");
var anterioraudio = document.getElementById("ant");



reiniciaraudio.addEventListener('click', function(){
	ctrAudio.play();
	ctrAudio.currentTime = 0;
});

vRangeAudio.addEventListener('change',function(){
	ctrAudio.play();
	ctrAudio.volume = this.value;
});

playAudio.addEventListener('click',function(){
	ctrAudio.play();
	ctrAudio.volume = 1;
});

pauseAudio.addEventListener('click',function(){
	ctrAudio.pause();
});

stopAudio.addEventListener('click', function(){
	ctrAudio.pause();
	ctrAudio.currentTime = 0;
});

vmaisaudio.addEventListener('click',function(){
	ctrAudio.volume += 0.1;
});

vmenosaudio.addEventListener('click',function(){
	ctrAudio.volume -= 0.1;
});

vMudoAudio.addEventListener('click', function(){
	if(ctrAudio.muted) {
		ctrAudio.muted = false;
	}else{
		ctrAudio.muted = true;
	}
});

var i = 0;
    var musicas =  [
            { mp3:'run_it.mp3', titulo:'Run It'},
            { mp3:'a_noite_me_chama.mp3', titulo:'A Noite Me Chama'},
            { mp3:'gold_slugs.mp3', titulo:'Gold Slugs'},
            { mp3:'gimme_that.mp3', titulo:'Gimme That'},
            { mp3:'lay_low.mp3', titulo:'Law Low'},
            { mp3:'love_in_this_club.mp3', titulo:'Love In The Club'},
            { mp3:'pride.mp3', titulo:'Pride'},
            { mp3:'save_that_money.mp3', titulo:'Save That Money'},
            { mp3:'moses.mp3', titulo:'Moses'},
			]; 
    audio = document.getElementById('som');

proxaudio.addEventListener('click', function(){
    	if( i < 8){
            i++;
        }
        if(ctrAudio.play("audio/mp3") != ''){
            audio.src = musicas[i].mp3;
        }
        document.getElementById('playlist').innerHTML = musicas[i].titulo;
        ctrAudio.play();
        if( i >= musicas.length ) i = 0;
    }
);

anterioraudio.addEventListener('click', function(){
	    if(i > 0){
            i--;
        }

        if(ctrAudio.play("audio/mp3") != ''){
            audio.src = musicas[i].mp3;
        }
        document.getElementById('playlist').innerHTML = musicas[i].titulo;
            ctrAudio.play();   
        
        if( i > musicas.length -1) i = 0;
    }
);