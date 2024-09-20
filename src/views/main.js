// import Todo_640 from './images/TodoList_640.png'
// import Todo_1280 from "./images/TodoList_1280.png"
// import Todo_1920 from "./images/TodoList_1920.png"
// import Todo_6000 from "./images/TodoList_6000.png"

import Library_640 from "./images/Library_640.png"
import Library_1280 from "./images/Library_1280.png"
import Library_1920 from "./images/Library_1920.png"
import Library_6000 from "./images/Library_6000.png"

import weather_640 from "./images/weather_640.png"
import weather_1280 from "./images/weather_1280.png"
import weather_1920 from "./images/weather_1920.png"
import weather_6000 from "./images/weather_6000.png"

import Restaurant_640 from "./images/Restaurant_640.png"
import Restaurant_1280 from "./images/Restaurant_1280.png"
import Restaurant_1920 from "./images/Restaurant_1920.png"
import Restaurant_6000 from "./images/Restaurant_6000.png"

import pokedex_640 from "./images/pokedex_640.png"
import pokedex_1280 from "./images/pokedex_1280.png"
import pokedex_1920 from "./images/pokedex_1920.png"
import pokedex_6000 from "./images/pokedex_6000.png"
export default function mainContent(){
    let main = document.createElement("main");
    main.innerHTML = `
    <h1>My Work</h1>
    <div class="main_content">
        <div class="card">
            <h2>Library App</h2>
            <div>
                <ul class="git_links">
                    <li><a href="#"><i class="devicon-github-original"></i></a></li>
                    <li><a href="#"><i class="devicon-github-original"></i></a></li>
                </ul>
            </div>
            <div>
                <img loading="lazy" src=${Library_640} srcset ="${Library_640} 640w,${Library_1280} 1280w,${Library_1920} 1920w,${Library_6000} 6000w" alt="Library App" sizes="(max-width:800px) 100vw, 50vw" decoding="async" fetchpriority="high">
            </div>                
            <div id="description">
                    This is a a library of books. It allows adding of books and deleting a book easily. It displays the list of books each book in its own card.
            </div>
        </div>

        <div class="card">
            <h2>Restaurant page App</h2>
            <div>
                <ul class="git_links">
                    <li><a href="#"><i class="devicon-github-original"></i></a></li>
                    <li><a href="#"><i class="devicon-github-original"></i></a></li>
                </ul>
            </div>
            <div>
                <img loading="lazy" src=${Restaurant_640} srcset ="${Restaurant_640} 640w,${Restaurant_1280} 1280w,${Restaurant_1920} 1920w,${Restaurant_6000} 6000w" alt="Restaurant App" sizes="(max-width:800px) 100vw, 50vw" decoding="async" fetchpriority="high">
            </div>
            <div id="description">
                A simple restaurant page project
            </div>
        </div>

        <div class="card">
            <h2>Weather App</h2>
            <div>
                <ul class="git_links">
                    <li><a href="#"><i class="devicon-github-original"></i></a></li>
                    <li><a href="#"><i class="devicon-github-original"></i></a></li>
                </ul>
            </div>
            <div>
                <img loading="lazy" src=${weather_640} srcset ="${weather_640} 640w,${weather_1280} 1280w,${weather_1920} 1920w,${weather_6000} 6000w" alt="Weather App" sizes="(max-width:800px) 100vw, 50vw" decoding="async" fetchpriority="high">
            </div>
            <div id="description">
                    This is an app that show weather of a particular place of interest.It also shows an image depicting the current condition of the place provided.
            </div>
        </div>

        <div class="card">
            <h2>Pokedex App</h2>
            <div>
                <ul class="git_links">
                    <li><a href="#"><i class="devicon-github-original"></i></a></li>
                    <li><a href="#"><i class="devicon-github-original"></i></a></li>
                </ul>
            </div>
            <div>
                <img loading="lazy" src=${pokedex_640} srcset ="${pokedex_640} 640w,${pokedex_1280} 1280w,${pokedex_1920} 1920w,${pokedex_6000} 6000w" alt="Pokedex App" sizes="(max-width:800px) 100vw, 50vw" decoding="async" fetchpriority="high">
            </div>
            <div id="description">
                    Simple implementation of a pokedex showing a list of all pokemons from pokeAPI
            </div>
        </div>
    </div>
    
    `
    return main;
}