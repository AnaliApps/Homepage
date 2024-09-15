export default function mainContent(){
    let main = document.createElement("main");
    main.innerHTML = `
    <h1>My Work</h1>
    <div>
        <img src="" srcset ="" alt="Project 1">
    </div>
    <div>
        <div>
            <h2>Project name</h2>
            <div>
                <ul>
                    <li><i class="devicon-github-original"></i></li>
                    <li><i class="devicon-github-original"></i></li>
                </ul>
            </div>
        </div>
        <div id="description">
        </div>
    </div>
    `
    return main;
}