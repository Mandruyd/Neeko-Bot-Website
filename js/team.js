const teamContainer = document.querySelector(".team-container");
const translatorContainer = document.querySelector(".translator-container");
const TEAM_API = "https://api.neeko-bot.xyz/uavatar=";

const teamMembers = [
    {
        discordID: "318844711701970964",
        name: 'Mandruyd',
        info: 'Creator / Dev / Translator',
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
        githubLink: 'https://github.com/alexutzro/'
    },
    {
        discordID: "274982300985589760",
        name: "Armanalex",
        info: 'Support Team™️ / Ideas',
        instagramLink: "https://www.instagram.com/armanalexx/"
    },
    {
        discordID: "622511721075965963",
        name: 'Hex',
        info: 'Support Team / Ideas',
        githubLink: 'https://github.com/HexHunter34/'
    }
];


const translatorMembers = [
    {
    discordID : "241983341757333505",
    name: "Sam",
    info: "Dutch Translator",
    },
    {
        discordID: "253911407349727232",
        name: "Leandro",
        info: "Portuguese Translator",
        instagramLink: "https://www.instagram.com/leandro13_04/"
    },
    {
        discordID: "298968795270348800",
        name: "Crapking",
        info: "German Translator"
    },
    {
        discordID: "266783267355754507",
        name: "BEEPS",
        info: "Mongolian Translator",
        instagramLink: "https://www.instagram.com/rosu.tu/"
    },
    {
        discordID: "318694267621212162",
        name: "Dan",
        info: "Russian Translator",
        websiteLink: "https://www.youtube.com/channel/UC5gGu2UtdhOSz5cenVygnLw"
    },
    {
        discordID: "267985336011849729",
        name: "Woohox",
        info: "Turkish Translator"
    },
    {
        discordID: "373859854676131841",
        name: "Dawid",
        info: "Polish Translator"
    },
    {
        discordID: "231088771196649472",
        name: "iGerman",
        info: "Russian Translator",
        websiteLink: "https://igmn.tk/home/"
    },
    {
        discordID: "655731264598310932",
        name: "FatCat1029",
        info: "Maltese Translator"
    },
    {
        discordID: "710479229497901066",
        name: "Orore201",
        info: "Arabic & French Translator"
    },
    {
        discordID: "327086785270251521",
        name: "iHeb",
        info: "Arabic Translator"
    }

];


/**
 * Fetches the URL to a user's Discord profile picture
 * @param {Array<string>} pictureURL 
 */
async function fetchPictures(ids) {
    try {
        let picture = await fetch(TEAM_API + ids)
        return await picture.json();
    } catch {
        return null;
    }
}

/**
 * Adds all the team members to the page
 * @param {string} members 
 */
function addMember(members) {
    teamContainer.innerHTML += members;
}
function addTranslator(members) {
    translatorContainer.innerHTML += members;
}


/**
 * A function that generates an appropiate div with the details of a team member
 * @param {string} avatar 
 * @param {string} name 
 * @param {string} info 
 * @param {string} [githubLink] 
 * @param {string} [websiteLink]
 * @param {string} [instagramLink] 
 */
function teamMemberTemplate(avatar, name, info, githubLink, websiteLink, instagramLink) {
    strTemplate = ``
    if (name == "Mandruyd") {
        strTemplate+= `<div class="team-member", style="background-image: url('https://cdn.neeko-bot.xyz/owner.gif')">`
    }
    else {
        strTemplate+= `<div class="team-member">`
    }
    strTemplate += `
        <div class="team-member-img"><img src="${avatar}"></div>
        <div class="team-member-name">${name}</div>
        ${info ? ((name == "Mandruyd") ? `<div class="team-member-info" style="color:cyan; font-family: Roboto;opacity: 1">${info}</div>` : `<div class="team-member-info">${info}</div>`): ''}
        <div class="team-member-social">
            ${githubLink ? `<button><a href="${githubLink}" target="_blank" rel=”noreferrer noopener”><i class="fab fa-github"></i></a></button>` : ''}
            ${websiteLink ? `<button><a href="${websiteLink}" target="_blank" rel=”noreferrer noopener”><i class="fas fa-link"></i></a></button>` : ''}
            ${instagramLink ? `<button><a href="${instagramLink}" target="_blank" rel=”noreferrer noopener”><i class="fab fa-instagram"></i></a></button>` : ''}                    
        </div>
    </div>
    `;


    return strTemplate
}




(async () => {
    let createUsers = '';

    const avatars = await fetchPictures(teamMembers.map(member => member.discordID).join(','));
    const tavatars = await fetchPictures(translatorMembers.map(member => member.discordID).join(','));


    for (let i = 0; i < teamMembers.length; i++) {
        createUsers += teamMemberTemplate(avatars && avatars[teamMembers[i].discordID] || 'https://cdn.discordapp.com/embed/avatars/4.png', teamMembers[i].name, teamMembers[i].info, teamMembers[i].githubLink, teamMembers[i].websiteLink, teamMembers[i].instagramLink);
    }

    createTranslators = '';

    translatorMembers.sort((a, b) => (a.name > b.name) ? 1 : -1)

    for (let i = 0; i < translatorMembers.length; i++) {
        createTranslators += teamMemberTemplate(tavatars && tavatars[translatorMembers[i].discordID] || 'https://cdn.discordapp.com/embed/avatars/4.png', translatorMembers[i].name, translatorMembers[i].info, translatorMembers[i].githubLink, translatorMembers[i].websiteLink, translatorMembers[i].instagramLink);
    }

    addMember(createUsers);
    addTranslator(createTranslators)
})();
