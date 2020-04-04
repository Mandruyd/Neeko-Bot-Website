var mobmen = document.querySelector('#mob');
var mobmenu = document.querySelector('#mob-menu');
var mobmenuclose = document.querySelector('#close');
mobmen.addEventListener('click', openMenu);
mobmenuclose.addEventListener('click', closeMenu);
function openMenu(e){
    mobmenu.style.display = 'inline';
}

function closeMenu(e){
    mobmenu.style.display = 'none';
}

var all = document.getElementById("all");
var admin = document.getElementById("admin");
var general = document.getElementById("general");
var player = document.getElementById("player");
var radio = document.getElementById("radio");
var playlist = document.getElementById("playlist");
var favourite = document.getElementById("favourite");
var daily = document.getElementById("daily");
var queue = document.getElementById("queue");
var blw = document.getElementById("blw");
var par = document.getElementById("list-here");
console.log(par)
all.addEventListener("click", loadAll);
admin.addEventListener("click", loadAdmin);
general.addEventListener("click", loadGeneral);
player.addEventListener("click", loadPlayer);
radio.addEventListener("click", loadRadio);
playlist.addEventListener("click", loadPlaylist);
favourite.addEventListener("click", loadFavourite);
daily.addEventListener("click", loadDaily);
queue.addEventListener("click", loadQueue);
blw.addEventListener("click", loadBlw);
let cat;
class UI{
    static allcmds(cat){
        let cmds = [
            {
                title:"#Admin",
                info:"#face asta",
                cat:"admin",
            },
            {
                title:"#General",
                info:"#face asta",
                cat:"general",
            },
            {
                title:"#Player",
                info:"#face asta",
                cat:"player",
            },
            {
                title:"#Radio",
                info:"#face asta",
                cat:"radio",
            },
            {
                title:"#Playlist",
                info:"#face asta",
                cat:"playlist",
            },
            {
                title:"#Favourite",
                info:"#face asta",
                cat:"favourite",
            },
            {
                title:"#Daily",
                info:"#face asta",
                cat:"daily",
            },
            {
                title:"#Queue",
                info:"#face asta",
                cat:"queue",
            },
            {
                title:"!Blw",
                info:" exemplu comanda blw",
                cat:"blw",
            },
            {
                title:"#Admin",
                info:"#face asta",
                cat:"admin",
            },
            {
                title:"#General",
                info:"#face asta",
                cat:"general",
            },
            {
                title:"#Player",
                info:"#face asta",
                cat:"player",
            },
            {
                title:"#Radio",
                info:"#face asta",
                cat:"radio",
            },
            {
                title:"#Playlist",
                info:"#face asta",
                cat:"playlist",
            },
            {
                title:"#Favourite",
                info:"#face asta",
                cat:"favourite",
            },
            {
                title:"#Daily",
                info:"#face asta",
                cat:"daily",
            },
            {
                title:"#Queue",
                info:"#face asta",
                cat:"queue",
            },
            {
                title:"!Blw",
                info:" exemplu comanda blw",
                cat:"blw",
            },
            
        ]

        Array.from(cmds).forEach(function(cmd){
            const p = document.createElement("p");
            const p2 = document.createElement("p");
            const d = document.createElement("div");
            p.classList.add("cmd-title");
            p2.classList.add("cmd-info");
            d.classList.add("cmd");
            p.appendChild(document.createTextNode(cmd.title));
            p2.appendChild(document.createTextNode(cmd.info));
            d.appendChild(p);
            d.appendChild(p2)
            par.appendChild(d)
            if(cat == "*"){

            }else if(cat == "Admin"){
                if(cmd.cat == "admin"){
                    d.style.display = "flex"
                }else{
                    d.style.display = "none"
                }
            }else if(cat == "General"){
                if(cmd.cat == "general"){
                    d.style.display = "flex"
                }else{
                    d.style.display = "none"
                }
            }
            else if(cat == "Player"){
                if(cmd.cat == "player"){
                    d.style.display = "flex"
                }else{
                    d.style.display = "none"
                }
            }
            else if(cat == "Daily"){
                if(cmd.cat == "daily"){
                    d.style.display = "flex"
                }else{
                    d.style.display = "none"
                }
            }
            else if(cat == "Playlist"){
                if(cmd.cat == "playlist"){
                    d.style.display = "flex"
                }else{
                    d.style.display = "none"
                }
            }
            else if(cat == "Favourite"){
                if(cmd.cat == "favourite"){
                    d.style.display = "flex"
                }else{
                    d.style.display = "none"
                }
            }
            else if(cat == "Radio"){
                if(cmd.cat == "radio"){
                    d.style.display = "flex"
                }else{
                    d.style.display = "none"
                }
            }
            else if(cat == "Queue"){
                if(cmd.cat == "queue"){
                    d.style.display = "flex"
                }else{
                    d.style.display = "none"
                }
            }
            else if(cat == "Blw"){
                if(cmd.cat == "blw"){
                    d.style.display = "flex"
                }else{
                    d.style.display = "none"
                }
            }
            })
        
            
        };
    };




function loadAll(e){

    while(par.firstElementChild){
        par.firstElementChild.remove();
    }

    UI.allcmds("*");
    
}
function loadAdmin(e){
    while(par.firstElementChild){
        par.firstElementChild.remove();
    }
    UI.allcmds("Admin");
}
function loadGeneral(e){
    while(par.firstElementChild){
        par.firstElementChild.remove();
    }
    UI.allcmds("General");
}
function loadPlayer(e){
    while(par.firstElementChild){
        par.firstElementChild.remove();
    }
    UI.allcmds("Player");
}
function loadPlaylist(e){
    while(par.firstElementChild){
        par.firstElementChild.remove();
    }
    UI.allcmds("Playlist");
}
function loadRadio(e){
    while(par.firstElementChild){
        par.firstElementChild.remove();
    }
    UI.allcmds("Radio");
}
function loadFavourite(e){
    while(par.firstElementChild){
        par.firstElementChild.remove();
    }
    UI.allcmds("Favourite");
}
function loadDaily(e){
    while(par.firstElementChild){
        par.firstElementChild.remove();
    }
    UI.allcmds("Daily");
}
function loadQueue(e){
    while(par.firstElementChild){
        par.firstElementChild.remove();
    }
    UI.allcmds("Queue");
}
function loadBlw(e){
    while(par.firstElementChild){
        par.firstElementChild.remove();
    }
    UI.allcmds("Blw");
}
loadAll();