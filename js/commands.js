// Made by Kovacs Alex
// https://github.com/alexthemaster

// Burger menu stuff, don't touch
const mob = document.querySelector('#mob');
const mobMenu = document.querySelector('#mob-menu');
const mobClose = document.querySelector('#close');

mob.addEventListener('click', () => mobMenu.style.display = 'inline');
mobClose.addEventListener('click', () => mobMenu.style.display = 'none');

(async () => {
    const COMMANDS_API = "https://api.neeko-bot.xyz/commands";

    let commands = await fetch(COMMANDS_API);
    if (commands.status != 200) throw console.error("Couldn't fetch commands.");
    commands = await commands.json();

    const categoriesEl = document.querySelector('.cats');
    const allEl = document.querySelector('#all');
    const listEl = document.querySelector('#list');

    const cmdsArray = [];

    for (category in commands) {
        addCategory(category);

        commands[category].forEach(command => {
            addCommand(category, Object.keys(command)[0], Object.values(command)[0], command.long_desc);
        });
    }

    function addCategory(name) {
        const btn = document.createElement('button');
        btn.id = name;
        btn.innerText = name;
        btn.classList.add('btn', 'btn-dark');

        const cat = categoriesEl.appendChild(btn);

        cat.addEventListener('click', () => {
            cmdsArray.forEach(cmd => {
                if (!cmd.classList.contains(cat.id)) cmd.hidden = true;
                else cmd.hidden = false;
            })
        })
    }

    function addCommand(category, name, info, longDesc) {
        const commandEl = document.createElement('div');
        commandEl.classList.add('cmd');
        commandEl.classList.add(category)

        const titleEl = document.createElement('p');
        titleEl.classList.add('cmd-title');
        titleEl.innerText = name;

        const infoEl = document.createElement('p');
        infoEl.classList.add('cmd-info');
        infoEl.innerText = info;

        let longDescEl;

        if (longDesc) {
            commandEl.classList.add('collapsible');

            longDescEl = document.createElement('p');
            longDescEl.classList.add('long-desc');
            longDescEl.innerText = longDesc;
        }

        commandEl.append(titleEl, infoEl, document.createElement('br'), longDescEl ? longDescEl : '');

        const el = listEl.appendChild(commandEl);

        cmdsArray.push(el)
    }

    document.querySelectorAll('.collapsible').forEach(collapsible => {
        collapsible.addEventListener('click', () => {
            collapsible.classList.toggle('active');
        })
    })

    allEl.addEventListener('click', () => {
        cmdsArray.forEach(cmd => {
            cmd.hidden = false;
        })
    });

})();