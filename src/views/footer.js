import icon_640 from './images/icon_640.jpg'
import icon_1280 from './images/icon_1280.jpg'
import icon_1920 from './images/icon_1920.jpg'
import icon_6000 from './images/icon_6000.jpg'
export default function createFooter(){
    let footer = document.createElement("footer");
    footer.innerHTML = `
        <div>
            <div>
                <h1 class="footer_header">Contact Me</h1>
                <p>Please get in touch if you thank our work could e mutually beneficial.</p>
                <p>1234 Random Road</p>
                <p>Random Town, California 12345</p>
                <p>555-555-555</p>
                <p>notreal@gmail.com</p>
                <ul class="footer_links">
                <li>
                <i class="devicon-github-original"></i>
                </li>
                <li>
                    <i class="devicon-linkedin-plain"></i>
                </li>
                <li>
                    <i class="devicon-twitter-original"></i>
                </li>
                </ul>
            </div>
        </div>
        <div>
            <img loading="lazy" src=${icon_640} srcset="${icon_640} 640w,${icon_1280} 1280w,${icon_1920} 1920w,${icon_6000} 6000w" alt="Anali Rono" sizes="(max-width:800px) 100vw, 50vw" decoding="async" fetchpriority="high">
        </div>
    `
    return footer;
}