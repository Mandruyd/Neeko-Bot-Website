const teamContainer = document.querySelector(".team-container");
const TEAM_API = "https://api.neeko-bot.xyz/uavatar=";

const teamMembers = [
    {
        discordID: "617067319121805419",
        name: 'Alex',
        info: 'Support Team / Ideas / Website / Emotional Support',
        githubLink: 'https://github.com/alexthemaster',
        websiteLink: 'https://atm.moe/',
    },
    {
        discordID: "318844711701970964",
        name: 'Mandruyd',
        info: 'Hello there, I\'m the creator of Neeko',
        githubLink: 'https://github.com/Mandruyd/Neeko',
        websiteLink: 'https://neeko-bot.xyz/',
    },
    {
        discordID: "519772560875978752",
        name: 'Laurentiu',
        info: 'On my way to make the www better.',
        githubLink: 'https://github.com/laurentiu0/',
        websiteLink: 'https://laurentiu.live/',
    },
];

/**
 * Fetches the URL to a user's Discord profile picture
 * @param {string} pictureURL 
 */
async function fetchPicture(pictureURL) {
    const picture = await fetch(pictureURL);
    return await picture.text();
}

/**
 * Add's a member div to the team-container div
 * @param {string} members 
 */
function addMember(members) {
    teamContainer.innerHTML += members;
}

/**
 * A function that generates an appropiate div with the details of a team member
 * @param {string} image 
 * @param {string} name 
 * @param {string} info 
 * @param {string} [githubLink] 
 * @param {string} [websiteLink] 
 */
function teamMemberTemplate(image, name, info, githubLink, websiteLink) {
    return `
<div class="team-member">
    <div class="team-member-img"><img  src="${image}"></div>
    <div class="team-member-name">${name}</div>
    ${info ? `<div class="team-member-info">${info}</div>` : ''}
    <div class="team-member-social">
        ${githubLink ? `<button><a href="${githubLink}"><i class="fab fa-github"></i></a></button>` : ''}
        ${websiteLink ? `<button><a href="${websiteLink}"><i class="fas fa-link"></i></a></button>` : ''}                    
    </div>
</div>
`;
}

(async () => {
    let createUsers = '';
    for (let i = 0; i < teamMembers.length; i++) {
        let picture = await fetchPicture(TEAM_API + teamMembers[i].discordID);
        createUsers += teamMemberTemplate(picture, teamMembers[i].name, teamMembers[i].info, teamMembers[i].githubLink, teamMembers[i].websiteLink);
    }
    addMember(createUsers);
})();