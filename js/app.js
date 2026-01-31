const container = document.getElementById("container");
const pageNumber = document.getElementById("page-number");
let current = 1;

const pages = {
    1: `
        <div class="pic"><img src="image/port.png" alt=""></div>

        <div class="arow">
            <span class="material-symbols-outlined" onclick="prev()">
                keyboard_double_arrow_left
            </span>
            <p class="name courier-prime-bold">Yasin Araad</p>
            <span class="material-symbols-outlined" onclick="next()">
                double_arrow
            </span>
        </div>

        <div class="cont">
            <div>
                <li class="courier-prime-bold">Subject :</li>
                <span>Full Stack developer</span>
            </div>
            <div>
                <li class="courier-prime-bold">Education :</li>
                <span>Bachelor's degree</span>
            </div>
           <div>
        <li class="courier-prime-bold">Phone-No :</li>
        <span>
            <a href="tel:+93766694988">+93 766 694 988</a>
        </span>
    </div>

    <div class="email">
        <li class="courier-prime-bold">E-mail :</li>
        <span>
            <a href="mailto:yasin.araad@gmail.com">
                yasin.araad@gmail.com
            </a>
        </span>
    </div>

    <div class="port">
        <li class="courier-prime-bold">Portfolio :</li>
        <span>
            <a href="https://araad17.github.io/portfolio" target="_blank">
                araad17.github.io/portfolio
            </a>
        </span>
    </div>

        </div>
    `,

    2: `
        <div class="arow center-arow">
            <span class="material-symbols-outlined" onclick="prev()">
                keyboard_double_arrow_left
            </span>
            <span class="material-symbols-outlined" onclick="next()">
                double_arrow
            </span>
        </div>

        <div class="about-cont">
            <h2 class="cont2 courier-prime-bold">_About-me</h2>
            <p class="about">Hello I'm <span class="yas">Yasin Araad</span> from Afghanistan. 
            a possionate <span class="full">Full-stack Web </span> & <span class="full">Mobile Developer</span> 
            and <span class="full">UX/UI</span> & <span class="full">Graphic Designer</span> with 6+ months of experience 
            in building powerful, user friendly digital solutions. 
            I hold a bachelor's in Software Engineering and speak two languages 
            fluently. persian and English</p>
        </div>
    `,

    3: `
        <div class="arow center-arow">
            <span class="material-symbols-outlined" onclick="prev()">
                keyboard_double_arrow_left
            </span>
            <span class="material-symbols-outlined" onclick="next()">
                double_arrow
            </span>
        </div>

        <div class="skill-cont">
            <h2 class="skill courier-prime-bold">Skill's</h2>
        </div>

        <div class="skill-cont">
            <div class="front">
                <h3>Frontend</h3>
                <div>
                    <p>HTML</p>
                    <P>CSS</P>
                    <P>JavaScript</p>
                    <p>Tailwind</p>
                    <p>React</p>
                </div>
            </div>
        </div>

        <div class="skill-cont">
            <div class="front">
                <h3>Backend</h3>
                <div>
                    <p>Node.js</p>
                    <P>php</P>
                    <P>Laravel</p>
                </div>
            </div>
        </div>
    `,

     4: `
        <div class="arow center-arow">
            <span class="material-symbols-outlined" onclick="prev()">
                keyboard_double_arrow_left
            </span>
            <span class="material-symbols-outlined" onclick="next()">
                double_arrow
            </span>
        </div>

        <div class="skill-cont">
            <h2 class="skill courier-prime-bold">Skill's</h2>
        </div>

        <div class="skill-cont">
            <div class="front">
                <h3>Database</h3>
                <div>
                    <p>MYSQL</p>
                </div>
            </div>
        </div>

        <div class="skill-cont">
            <div class="front">
                <h3>Version Control</h3>
                <div>
                    <p>Git</p>
                    <P>GitHub</P>
                </div>
            </div>
        </div>

        <div class="skill-cont">
            <div class="front">
                <h3>Packae Manager</h3>
                <div>
                    <p>Git</p>
                    <P>GitHub</P>
                </div>
            </div>
        </div>
        <div class="skill-cont">
            <div class="front">
                <h3>Graphic design</h3>
                <div>
                    <p>Figma</p>
                    <P>Photoshop</P>
                </div>
            </div>
        </div>
    `,

        5: `
        <div class="arow center-arow">
            <span class="material-symbols-outlined" onclick="prev()">
                keyboard_double_arrow_left
            </span>
            <span class="material-symbols-outlined" onclick="next()">
                double_arrow
            </span>
        </div>

        <div class="contact-cont">
            <h2 class="cont2 courier-prime-bold">_Contact-me</h2>

            <div class="git eml">
                <a href="#" id="emailLink"><i class="fa-regular fa-envelope"></i></a>
                <a href="#" id="emailText"></a>
            </div>

            <div class="git">
                <a href="#" id="githubLink" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-square-github"></i></a>
                <a href="#" id="githubText" target="_blank" rel="noopener noreferrer">araad17.gitgub.io</a>
            </div>

            <div class="git em">
                <a href="#" id="telegramLink" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-telegram"></i></a>
                <a href="#" id="telegramText" target="_blank" rel="noopener noreferrer"></a>
            </div>

            <div class="git">
                <a id="phoneLink"><i class="fa-solid fa-phone"></i></a>
                <a id="phoneText"></a>
            </div>


            <div class="git">
                <a href="#" id="whatsappLink" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-whatsapp"></i></a>
                <a href="#" id="whatsappText" target="_blank" rel="noopener noreferrer"></a>
            </div>
            
        </div>
    `
};
const totalPages = Object.keys(pages).length;

function render() {
    container.innerHTML = pages[current];
    pageNumber.innerText = `${current} / ${totalPages}`;

    if (current === 5) {
        initContactLinks();
    }
}



function next() {
    current = current === totalPages ? 1 : current + 1;
    render();
}

function prev() {
    current = current === 1 ? totalPages : current - 1;
    render();
}

function initContactLinks() {
    // Email
    const emailUser = "yasin.araad";
    const emailDomain = "gmail.com";
    const email = `${emailUser}@${emailDomain}`;

    document.getElementById("emailLink").href = `mailto:${email}`;
    document.getElementById("emailText").innerText = email;
    emailText.href = `mailto:${email}`;

    // GitHub
    const github = "araad17";
    document.getElementById("githubLink").href = `https://github.com/${github}`;
    document.getElementById("githubText").innerText = `${github}.github.io`;
    githubText.href = `https://github.com/${github}`;

    // Telegram
    const telegram = "Araad2021";
    document.getElementById("telegramLink").href = `https://t.me/${telegram}`;
    document.getElementById("telegramText").innerText = `@${telegram}`;
    telegramText.href = `https://t.me/${telegram}`;

    //phone
    const phone = "+93766694988";

    document.getElementById("phoneLink").href = `tel:${phone}`;
    document.getElementById("phoneText").href = `tel:${phone}`;
    document.getElementById("phoneText").innerText = "+93 766 694 988";


    // WhatsApp
    const whatsapp = "93747967101";
    document.getElementById("whatsappLink").href = `https://wa.me/${whatsapp}`;
    document.getElementById("whatsappText").innerText = `+93 747 967 101`;
    whatsappText.href = `https://wa.me/${whatsapp}`;
}



render();
