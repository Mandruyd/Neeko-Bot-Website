// Made by Kovacs Alex 
// https://github.com/alexthemaster

// Lite editing by Laurentiu
// https://github.com/laurentiu0

(async () => {
    const COMMANDS_API = "https://api.neeko-bot.xyz/commands";

    let commands = await fetch(COMMANDS_API);
    if (commands.status != 200) throw console.error("Couldn't fetch commands.");
    commands = await commands.json();

    const categoriesEl = document.querySelector('#selectCmdsList');
    const listEl = document.querySelector('#list');
    const bananaEl = document.querySelector('#banana');
    const searchCmd = document.querySelector('.x-cmds-search');

    const cmdsArray = [];

    for (category in commands) {
        addCategory(category);

        commands[category].forEach(command => {
            addCommand(category, Object.keys(command)[0], Object.values(command)[0], command.long_desc, Object.values(command)[2]);
        });
    }

    function addCategory(name) {
        const btn = document.createElement('option');
        btn.id = name;
        btn.innerText = name;

        categoriesEl.appendChild(btn)
    }

    function addCommand(category, name, info, longDesc, alias) {
        const commandEl = document.createElement('div');
        commandEl.classList.add('cmd');
        commandEl.classList.add(category)

        const titleEl = document.createElement('p');
        titleEl.classList.add('cmd-title');
        titleEl.setAttribute("alias", (alias.length > 1) ? alias.join(", ") : "");
        (alias.length > 1) ? titleEl.classList.add("popup") : "";
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

    categoriesEl.addEventListener('change', (e) => {
        if (e.target.value == "all") {
            cmdsArray.forEach(cmd => {
                cmd.hidden = false;
            })
        } else {
            cmdsArray.forEach(cmd => {
                if (!cmd.classList.contains(e.target.children[e.target.selectedIndex].id)) cmd.hidden = true;
                else cmd.hidden = false;
            })
        }
    })

    searchCmd.addEventListener('keyup', (e) => {
        if (e.target.value == " ") cmd.hidden = false;
        else {
            cmdsArray.forEach(cmd => {
                if (!cmd.children[0].innerText.toLowerCase().includes(e.target.value.toLowerCase())) cmd.hidden = true;
                else cmd.hidden = false;


                if (Array.from(listEl.children).every(el => el.hidden)) {
                    if (Math.random() < 0.001) {
                        bananaEl.hidden = false;
                    }
                } else {
                    bananaEl.hidden = true;
                }
            })
        }
    })
})();