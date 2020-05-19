$.getJSON('https://api.neeko-bot.xyz/servers', (function (numar) {
    new TypeIt("#typingtext", {
        breakLines: false,
        strings: ["Share your music tastes with your friends.", `Neeko is already on ${numar.servers} servers! 🎉`, "Transform any song with  unique audio effects.", "Play Guess The Song and earn points.", "Organize Karaoke nights with your friends or family.", "Neeko is the easiest way to play music in your server."],
        speed: 93,
        loop: true,
        deletespeed: 1,
        nextStringDelay: 3000,
        waitUntilVisible: true
    });
}));