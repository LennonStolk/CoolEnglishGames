const ELEMENT_GAME_LIST = document.getElementById("game-list");
const ELEMENT_SUBMIT_SEARCH = document.getElementById("search-game");
const ELEMENT_SEARCH_TERM = document.getElementById("search-term");
const ELEMENT_GET_RANDOM = document.getElementById("get-random")
const GAME_TITLES = get_game_titles();

// Event listeners
ELEMENT_SUBMIT_SEARCH.addEventListener("click", e => search());
ELEMENT_GET_RANDOM.addEventListener("click", e => random());

function get_game_titles()
{
    let game_title_nodes = [...ELEMENT_GAME_LIST.querySelectorAll("h6")];
    let game_titles = game_title_nodes.map(node => node.innerText.toLowerCase());
    return game_titles;
}

function get_game_element_from_title(title)
{
    let game_elements = [...ELEMENT_GAME_LIST.children];
    return game_elements.find(element => element.querySelector("h6").innerText.toLowerCase() == title);
}

function search()
{
    let search_term = ELEMENT_SEARCH_TERM.value.toLowerCase();
    let matching_games_titles = GAME_TITLES.filter(title => title.includes(search_term));
    ELEMENT_SEARCH_TERM.value = "";
    show_relevant_game_elements(matching_games_titles);
}

function random() 
{
    let random_index = Math.floor(Math.random() * GAME_TITLES.length);
    let random_game_title = GAME_TITLES[random_index];
    show_relevant_game_elements([random_game_title]);
}

function show_relevant_game_elements(matching_game_titles)
{
    for (let title of GAME_TITLES)
    {
        let game_element = get_game_element_from_title(title);

        if (matching_game_titles.includes(title))
        {
            game_element.classList.remove("d-none");
            game_element.classList.add("d-flex");
        }
        else
        {
            game_element.classList.remove("d-flex");
            game_element.classList.add("d-none");
        }
    }
}