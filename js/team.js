const teamContainer = document.querySelector(".team-container");
const TEAM_API = "https://api.neeko-bot.xyz/uavatar=";

const teamMembers = [
    {
        discordID: "318844711701970964",
        name: 'Mandruyd',
        info: 'Hello there, I\'m the creator of Neeko',
        githubLink: 'https://github.com/Mandruyd/Neeko',
        websiteLink: 'https://neeko-bot.xyz/',
    },
    {
        discordID: "617067319121805419",
        name: 'Alex',
        info: 'Support Team / Ideas / Website / Emotional Support',
        githubLink: 'https://github.com/alexthemaster',
        websiteLink: 'https://atm.moe/',
    },
    {
        discordID: "519772560875978752",
        name: 'Laurentiu',
        info: 'On my way to make the www better.',
        githubLink: 'https://github.com/laurentiu0/',
        websiteLink: 'https://laurentiu.live/',
    },
    {
        discordID: "139793690712473600",
        name: 'Seb',
        info: 'Support Team / Ideas',
        websiteLink: 'https://yoshifan.me/',
        githubLink: 'https://github.com/YoshiFan13/'
    },
    {
        discordID: "265525280733528064",
        name: 'Harrasko',
        info: 'Support Team / Code',
        githubLink: 'https://github.com/Harrasko/'
    },
    {
        discordID: "194038186064871424",
        name: 'AlexutzRO',
        info: 'Retired Coder',
    },
    {
        discordID: "274982300985589760",
        name: "Armanalex",
        info: 'Support Team™️ / Ideas'
    },
    {
        discordID: "622511721075965963",
        name: 'Hex',
        info: 'Support Team / Ideas',
        githubLink: 'https://github.com/HexHunter34/'
    }
];

/**
 * Fetches the URL to a user's Discord profile picture
 * @param {Array<string>} pictureURL 
 */
async function fetchPictures(ids) {
    const picture = await fetch(TEAM_API + ids);
    return await picture.json();
}

/**
 * Adds all the team members to the page
 * @param {string} members 
 */
function addMember(members) {
    teamContainer.innerHTML += members;
}

/**
 * A function that generates an appropiate div with the details of a team member
 * @param {string} avatar 
 * @param {string} name 
 * @param {string} info 
 * @param {string} [githubLink] 
 * @param {string} [websiteLink] 
 */
function teamMemberTemplate(avatar, name, info, githubLink, websiteLink) {
    return `
<div class="team-member">
    <div class="team-member-img"><img src="${avatar}"></div>
    <div class="team-member-name">${name}</div>
    ${info ? `<div class="team-member-info">${info}</div>` : ''}
    <div class="team-member-social">
        ${githubLink ? `<button><a href="${githubLink}" target="_blank" rel=”noreferrer noopener”><i class="fab fa-github"></i></a></button>` : ''}
        ${websiteLink ? `<button><a href="${websiteLink}" target="_blank" rel=”noreferrer noopener”><i class="fas fa-link"></i></a></button>` : ''}                    
    </div>
</div>
`;
}

(async () => {
    let createUsers = '';

    const avatars = await fetchPictures(teamMembers.map(member => member.discordID).join(','));

    for (let i = 0; i < teamMembers.length; i++) {
        createUsers += teamMemberTemplate(avatars[teamMembers[i].discordID], teamMembers[i].name, teamMembers[i].info, teamMembers[i].githubLink, teamMembers[i].websiteLink);
    }

    addMember(createUsers);
})();
