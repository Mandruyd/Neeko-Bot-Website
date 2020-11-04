const TEAM_API = 'https://api.neeko-bot.xyz/uavatar=';
const teamContainer = document.querySelector('.team-container');
const translatorContainer = document.querySelector('.translator-container');

const teamMembers = [
    {
        discordID: '318844711701970964',
        name: 'Mandruyd',
        info: 'Creator / Dev / Translator',
        githubLink: 'https://github.com/Mandruyd/',
        websiteLink: 'https://neeko-bot.xyz/',
    },
    {
        discordID: '617067319121805419',
        name: 'Alex',
        info: 'Support Team / Ideas / Website Code / Emotional Support / Translator',
        githubLink: 'https://github.com/alexthemaster/',
        websiteLink: 'https://atm.moe/',
        instagramLink: 'https://instagram.com/alexthemaster/',
        youtubeLink: 'https://youtube.com/raplayerofficial/'
    },
    {
        discordID: '768148280403689563',
        name: 'Laurentiu',
        info: 'Website Code / Dev',
        githubLink: 'https://github.com/laurentiu0/',
        websiteLink: 'https://laurentiu.live/',
    },
    {
        discordID: '139793690712473600',
        name: 'Seb',
        info: 'Support Team / Ideas',
        websiteLink: 'https://yoshifan.me/',
        githubLink: 'https://github.com/YoshiFan13/',
        youtubeLink: 'https://youtube.com/avrilloosing/'
    },
    {
        discordID: '265525280733528064',
        name: 'Harrasko',
        info: 'Support Team / Code',
        githubLink: 'https://github.com/Harrasko/'
    },
    {
        discordID: '194038186064871424',
        name: 'AlexutzRO',
        info: 'Retired Coder',
        githubLink: 'https://github.com/alexutzro/'
    },
    {
        discordID: '274982300985589760',
        name: 'Armanalex',
        info: 'Support Team™️ / Ideas',
        instagramLink: 'https://www.instagram.com/armanalexx/'
    },
    {
        discordID: '622511721075965963',
        name: 'Hex',
        info: 'Support Team / Ideas / Language Coordinator / Weeb',
        githubLink: 'https://github.com/HexHunter34/',
        youtubeLink: 'https://www.youtube.com/channel/UCKLQpTNe5aTztPWLkFYy-aQ',
        websiteLink: 'http://www.hex33.xyz/'
    }
];


const translatorMembers = [
    {
        discordID: '725680860371746877',
        name: 'Sam',
        info: 'Dutch Translator',
        instagramLink: "https://www.instagram.com/samvdb15"
    },
    
    {
        discordID: '253911407349727232',
        name: 'Leandro',
        info: 'Portuguese Translator',
        instagramLink: 'https://www.instagram.com/leandro13_04/'
    },
    {
        discordID: '298968795270348800',
        name: 'Crapking',
        info: 'German Translator'
    },
    {
        discordID: '266783267355754507',
        name: 'BEEPS',
        info: 'Mongolian Translator',
        instagramLink: 'https://www.instagram.com/rosu.tu/'
    },
    {
        discordID: '318694267621212162',
        name: 'Dan',
        info: 'Russian Translator',
        youtubeLink: 'https://youtube.com/channel/UC5gGu2UtdhOSz5cenVygnLw/'
    },
    {
        discordID: '267985336011849729',
        name: 'Woohox',
        info: 'Turkish Translator',
        instagramLink: 'https://www.instagram.com/woohox/',
        youtubeLink: 'https://www.youtube.com/woohox'
    },
    {
        discordID: '300237913462013962',
        name: 'Bongo Cat',
        info: 'Danish Translator',
        instagramLink: 'https://www.instagram.com/houaricarl'
    },
    {
        discordID: '373859854676131841',
        name: 'Dawid',
        info: 'Polish Translator'
    },
    {
        discordID: '231088771196649472',
        name: 'iGerman',
        info: 'Russian Translator',
        websiteLink: 'https://igmn.tk/home/',
        youtubeLink: 'https://youtube.com/channel/UCaUHXjG_njW0JJOqYrHFXug/'
    },
    {
        discordID: '388053821248765953',
        name: 'FatCat1029',
        info: 'Maltese Translator'
    },
    {
        discordID: '518778731171545088',
        name: 'HydroliCc',
        info: 'Arabic & French Translator'
    },
    {
        discordID: '327086785270251521',
        name: 'iHeb',
        info: 'Arabic Translator'
    },
    {
        discordID: '658268763707277334',
        name: 'exotwd',
        info: 'Czech Translator'
    },
    {
        discordID: '674221428127563797',
        name: 'NDQ1049',
        info: 'Vietnamese & Japanese Translator',
        instagramLink: "https://www.instagram.com/ndq1049/"

    },
    {
        discordID: '362072547723837441',
        name: 'Mario 64',
        info: 'Spanish Translator',
        websiteLink: "https://crowdin.com/profile/MarioAR"

    }
];

/**
 * Fetches the URL to a user's Discord profile picture
 * @param {Array<string>} ids 
 * @returns {Promise<Object>|null}
 */
async function fetchPictures(ids) {
    try {
        let picture = await fetch(TEAM_API + ids)
        return await picture.json();
    } catch (o_O) {
        return null;
    }
}

/**
 * Adds all the team members to the page
 * @param {string} members 
 * @returns {void}
 */
function addMembers(members) {
    teamContainer.innerHTML += members;
}

/**
 * Adds all the translators to the page
 * @param {string} members
 * @returns {void} 
 */
function addTranslators(members) {
    translatorContainer.innerHTML += members;
}

/**
 * A function that generates an appropiate div with the details of a team member
 * @param {string} avatar 
 * @param {object} member
 * @returns {string}
 */
function teamMemberTemplate(avatar, member) {
    let strTemplate = '';

    member.name == 'Mandruyd' ? strTemplate += `<div class='team-member', style='background-image: url("https://cdn.neeko-bot.xyz/owner.gif")'>` : strTemplate += `<div class='team-member'>`;

    strTemplate += `
        <div class='team-member-img'><img src='${avatar}'></div>
        <div class='team-member-name'>${member.name}</div>
        ${member.info ? ((member.name == 'Mandruyd') ? `<div class='team-member-info' style='color: cyan; opacity: 1'>${member.info}</div>` : `<div class='team-member-info'>${member.info}</div>`) : ''}
        <div class='team-member-social'>
            ${member.githubLink ? `<button><a href='${member.githubLink}' target='_blank' rel=”noreferrer noopener”><i class='fab fa-github'></i></a></button>` : ''}
            ${member.websiteLink ? `<button><a href='${member.websiteLink}' target='_blank' rel=”noreferrer noopener”><i class='fas fa-link'></i></a></button>` : ''}
            ${member.instagramLink ? `<button><a href='${member.instagramLink}' target='_blank' rel=”noreferrer noopener”><i class='fab fa-instagram'></i></a></button>` : ''}      
            ${member.youtubeLink ? `<button><a href='${member.youtubeLink}' target='_blank' rel=”noreferrer noopener”><i class='fab fa-youtube'></i></a></button>` : ''}                    
        </div>
    </div>
    `;

    return strTemplate;
}

/**
 * @param {Object} object 
 * @param {string} id 
 * @returns {string}
 */
function getAvatar(object, id) {
    if (object && !!object[id]) return object[id];

    const numbers = [1, 2, 3, 4];
    return `https://cdn.discordapp.com/embed/avatars/${numbers[Math.floor(Math.random() * numbers.length)]}.png`
}

(async () => {
    let createUsers = '';

    const avatars = await fetchPictures([...teamMembers, ...translatorMembers].map(member => member.discordID).join(','));

    for (let i = 0; i < teamMembers.length; i++) {
        createUsers += teamMemberTemplate(getAvatar(avatars, teamMembers[i].discordID), teamMembers[i]);
    }

    let createTranslators = '';

    translatorMembers.sort((a, b) => (a.name > b.name) ? 1 : -1);

    for (let i = 0; i < translatorMembers.length; i++) {
        createTranslators += teamMemberTemplate(getAvatar(avatars, translatorMembers[i].discordID), translatorMembers[i]);
    }

    addMembers(createUsers);
    addTranslators(createTranslators);
})();
