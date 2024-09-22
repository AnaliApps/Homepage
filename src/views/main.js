import Library_640 from "./images/Library_640.webp"
import Library_1280 from "./images/Library_1280.webp"
import Library_1920 from "./images/Library_1920.webp"

import weather_640 from "./images/weather_640.webp"
import weather_1280 from "./images/weather_1280.webp"
import weather_1920 from "./images/weather_1920.webp"

import Restaurant_640 from "./images/Restaurant_640.webp"
import Restaurant_1280 from "./images/Restaurant_1280.webp"
import Restaurant_1920 from "./images/Restaurant_1920.webp"

import pokedex_640 from "./images/pokedex_640.webp"
import pokedex_1280 from "./images/pokedex_1280.webp"
import pokedex_1920 from "./images/pokedex_1920.webp"

import open_in_new from "./images/open_in_new.webp"

export default function mainContent(){
    let main = document.createElement("main");
    main.innerHTML = `
    <h1>My Work</h1>
    <div class="main_content">
        <div class="card">
            <h2>Library App</h2>
            <div>
                <ul class="git_links">
                    <li><a href="https://github.com/AnaliApps/Library" aria-label="Github"><i class="devicon-github-original"></i></a></li>
                    <li><a href="https://analiapps.github.io/Library/"aria-label="Live Preview"><i><img decoding="async" src = "${open_in_new}" width="20px" height="20px"alt="open"></i></a></li>
                </ul>
            </div>
            <div class="main_blur_load">
                <img class="main_img" width="320px" height="320px" src=${Library_640} srcset ="${Library_640} 640w,${Library_1280} 1280w,${Library_1920} 1920w" alt="Library App" sizes="(max-width:800px) 100vw, 50vw" decoding="async">
            </div>                
            <div id="description">
                    This is a a library of books. It allows adding of books and deleting a book easily. It displays the list of books each book in its own card.
            </div>
        </div>

        <div class="card">
            <h2>Restaurant page App</h2>
            <div>
                <ul class="git_links">
                    <li><a href="https://github.com/AnaliApps/RestaurantPage" aria-label="Github"><i class="devicon-github-original"></i></a></li>
                    <li><a href="https://analiapps.github.io/RestaurantPage/"aria-label="Live Preview"><i><img decoding="async" src = "${open_in_new}" width="20px" height="20px" alt="open"></i></a></li>
                </ul>
            </div>
            <div class="main_blur_load">
                <img class="main_img" width="320px" height="320px" src=${Restaurant_640} srcset ="${Restaurant_640} 640w,${Restaurant_1280} 1280w,${Restaurant_1920} 1920w" alt="Restaurant App" sizes="(max-width:800px) 100vw, 50vw" decoding="async">
            </div>
            <div id="description">
                A simple restaurant page project
            </div>
        </div>

        <div class="card">
            <h2>Weather App</h2>
            <div>
                <ul class="git_links">
                    <li><a href="https://github.com/AnaliApps/WeatherApp" aria-label="Github"><i class="devicon-github-original"></i></a></li>
                    <li><a href="https://analiapps.github.io/WeatherApp/"aria-label="Live Preview"><i><img  decoding="async" src = "${open_in_new}" width="20px" height="20px" alt="open"></i></a></li>
                </ul>
            </div>
            <div class="main_blur_load">
                <img class="main_img" width="320px" height="320px" src=${weather_640} srcset ="${weather_640} 640w,${weather_1280} 1280w,${weather_1920} 1920w" alt="Weather App" sizes="(max-width:800px) 100vw, 50vw" decoding="async">
            </div>
            <div id="description">
                    This is an app that show weather of a particular place of interest.It also shows an image depicting the current condition of the place provided.
            </div>
        </div>

        <div class="card">
            <h2>Pokedex App</h2>
            <div>
                <ul class="git_links">
                    <li><a href="https://github.com/AnaliApps/Pokedex" aria-label="Github"><i class="devicon-github-original"></i></a></li>
                    <li><a href="https://analiapps.github.io/Pokedex/" aria-label="Live Preview"><i><img decoding="async" src = "${open_in_new}" width="20px" height="20px" alt="open"></i></a></li>
                </ul>
            </div>
            <div class="main_blur_load">
                <img class="main_img" width="320px" height="320px" src=${pokedex_640} srcset ="${pokedex_640} 640w,${pokedex_1280} 1280w,${pokedex_1920} 1920w" alt="Pokedex App" sizes="(max-width:800px) 100vw, 50vw" decoding="async">
            </div>
            <div id="description">
                    Simple implementation of a pokedex showing a list of all pokemons from pokeAPI
            </div>
        </div>
    </div>
    
    `
    return main;
}