import icon_640 from './images/icon_640.jpg'
import icon_1280 from './images/icon_1280.jpg'
import icon_1920 from './images/icon_1920.jpg'
import icon_small from './images/icon-small.jpg'

export default function headerContent(){
    let header = document.createElement('header');
    header.innerHTML = `
    <div class="blur_load icon_small">
        <img class="header_img" loading="lazy" src=${icon_640} srcset="${icon_640} 640w,${icon_1280} 1280w,${icon_1920} 1920w" alt="Anali Rono" sizes="(max-width:800px) 100vw, 50vw" decoding="async" fetchpriority="high">
    </div>
    <div class="bio">
        <div>
            <h1 class="bio-h1">About Me</h1>
            <p>
                I am a skilled web designer specializing in creating dynamic and visually engaging websites using HTML, CSS, and JavaScript. With a strong focus on modern design principles and user experience, I leverage Webpack as my package manager to streamline and optimize the development process. My expertise ensures that websites are not only aesthetically pleasing but also functional and efficient.
            </p>
        </div>
        <div class = "social_links>
            <ul class="links">
                <li class="link">
            <i class="devicon-github-original"></i>
          </li>
                <li class="link">
            <i class="devicon-linkedin-plain"></i>
          </li>
                <li class="link">
            <i class="devicon-twitter-original"></i>
          </li>
            </ul>
        </div>
    </div>
    `
    return header;
}