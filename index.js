const music= document.querySelector("audio");
const img= document.querySelector("img");
const play= document.getElementById("play");
const title= document.getElementById("title");
const artist= document.getElementById("artist");
const prev= document.getElementById("prev");
const next= document.getElementById("next");


        const songs = [
            {
                name: "mai rahu ya na rahu",
                title: "mai rahu ya na rahu",
                artist: "Emran Hashmi",
                // img: "mai rahu ya na rahu",
            },
            {
                name: "Kaun tuje ms dhoni",
                title: "Kaun tuje ms dhoni",
                artist: "Sushant Singh Rajpoot",
                // img: "Kaun tuje",
            },
            {
                name: "Hey shona",
                title: "Hey shona",
                artist: "Saif-ali-khan",
            },
        ];


        let isplaying = false;

        const playMusic = () => {

            isplaying = true;
            music.play();
            play.classList.replace('fa-play', 'fa-pause');
        };

        const pauseMusic = () => {

            isplaying = false;
            music.pause();
            play.classList.replace('fa-pause', 'fa-play');
        }

        play.addEventListener('click', () => {
            if (isplaying) {
                pauseMusic();
            }
            else {
                playMusic();
            }
        });

        const loadSong = (songs) => {
            title.textContent = songs.title;
            artist.textContent = songs.artist;
            music.src ="music/"+ songs.name + ".mp3";
            img.src = "image/"+songs.name + ".jfif";

        };
        songIndex = 0;

        const nextSong = () => {
            songIndex = (songIndex + 1) % songs.length;
            loadSong(songs[songIndex]);
            playMusic();
        }
        const prevSong = () => {
            songIndex = (songIndex - 1 + songs.length) % songs.length;
            loadSong(songs[songIndex]);
            playMusic();
        }

        next.addEventListener("click", nextSong);
        prev.addEventListener("click", prevSong);

