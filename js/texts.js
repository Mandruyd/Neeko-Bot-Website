$.getJSON('https://api.neeko-bot.xyz/servers', response => typeText(response.servers)).catch(o_O => typeText());

function typeText(servers = null) {
    const strings = ["Share your music tastes with your friends.",];
    if (servers) strings.push(`Neeko is already on ${servers} servers! 🎉`);
    strings.push(...[
        "Transform any song with  unique audio effects.",
        "Play Guess The Song and earn points.",
        "Organize Karaoke nights with your friends or family.",
        "Neeko is the easiest way to play music in your server."
    ]);

    new TypeIt("#typingtext", {
        breakLines: false,
        strings,
        speed: 93,
        loop: true,
        deletespeed: 1,
        nextStringDelay: 3000,
        waitUntilVisible: true
    });
};