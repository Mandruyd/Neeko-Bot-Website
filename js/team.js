const teamContainer = document.querySelector(".team-container");
const TEAM_API = "https://api.neeko-bot.xyz/uavatar=";
const teamMemberTemplate = (image, name, info, githubLink, websiteLink)=>{
return   `
<div class="team-member">
    <div class="team-member-img"><img  src="${image}"></div>
    <div class="team-member-name">${name}</div>
    <div class="team-member-info">${info}</div>
    <div class="team-member-social">
        <button><a href="${githubLink}"><i class="fab fa-github"></i></a></button>
        <button><a href="${websiteLink}"><i class="fas fa-link"></i></a></button>                    
    </div>
</div>
`;
}

const teamMembers = [
    {
        discordId: "617067319121805419",
        name: 'Alex',
        info: 'Support Team / Ideas / Website / Emotional support',
        githubLink: 'https://github.com/alexthemaster',
        websiteLink: 'https://atm.moe/',
    },
    {
        discordId: "318844711701970964",
        name: 'Mandruyd',
        info: 'Hello there, I\'m the creator of Neeko',
        githubLink: 'https://github.com/Mandruyd/Neeko',
        websiteLink: 'https://neeko-bot.xyz/',
    },
    {
        discordId: "519772560875978752",
        name: 'Laurentiu',
        info: 'On my way to make the www better.',
        githubLink: 'https://github.com/laurentiu0/',
        websiteLink: 'https://laurentiu.live/',
    },
]

async function fetchPicture(pictureURL){
    const picture = await fetch(pictureURL);
    return await picture.text();
}

(async function constructTeamMember(){
    let createUsers = '';
    for(let i =0;i<teamMembers.length;i++){
        let picture = await fetchPicture(TEAM_API+teamMembers[i].discordId);
        createUsers += teamMemberTemplate(picture, teamMembers[i].name, teamMembers[i].info, teamMembers[i].githubLink, teamMembers[i].websiteLink);
    }
    addMember(createUsers);
})();

function addMember(members){
    teamContainer.innerHTML+=members;
}
