$(document).ready(() => {
    render_projects('featured');
})


let render_projects = (slug) => {
    let projects_area = $('.projects-wrapper');

    $('.white-button').removeClass('white-button-hover');
    $(`#${slug}`).addClass('white-button-hover');

    let projects_obj = [
        {
            image: 'assets/images/GerenciadordeEventos.png',
            link: 'https://github.com/jhennifersmith/Projetos-Faculdade-C/blob/main/Gerenciador%20de%20Eventos/main.c',
            title: 'Gerenciador de Evento',
            demo: false,
            technologies: ['C'],
            description: "Um Gerenciador de Eventos desenvolvido com Listas em C.",
            categories: ['featured']
        },
        {
            image: 'assets/images/JogodaVelha.png',
            link: 'https://github.com/jhennifersmith/Projetos-Faculdade-C/blob/main/Jogo%20Da%20Velha/main.c',
            title: 'Jogo da Velha',
            demo: false,
            technologies: ['C'],
            description: "Um Jogo da Velha desenvolvido em C",
            categories: ['featured']
        },
        {
            image: 'assets/images/biblioteca.png',
            link: 'https://github.com/jhennifersmith/Projetos-Faculdade-C/blob/main/Biblioteca/main.c',
            title: 'Biblioteca',
            demo: false,
            technologies: ['C'],
            description: "Um sistema de Biblioteca desenvolvido em C para treinar funções e structs",
            categories: ['featured']
        },
        {
            image: 'assets/images/site-print.png',
            link: 'https://github.com/jhennifersmith/Projetos-Faculdade-HTML_CSS_JS/tree/master/Primeiro%20Site%20Responsivo',
            title: 'Site Responsivo',
            demo: false,
            technologies: ['HTML', 'CSS'],
            description: "Site Responsivo com HTML e CSS",
            categories: ['webdev']
        },
        {
            image: 'assets/images/wordpress.png',
            link: 'https://jhennifersmith.wordpress.com/',
            title: 'Site Pessoal com Wordpress',
            demo: false,
            technologies: ['wordpress'],
            description: "Site desenvolvido com a ferramenta Wordpress.",
            categories: ['webdev']
        }
    ]

    let projects = [];
    if(slug == 'all') {
        projects = projects_obj.map(project_mapper);
    } 
    else {
        projects = projects_obj.filter(project => project.categories.includes(slug)).map(project_mapper);
    }
    projects_area.hide().html(projects).fadeIn();
}

let project_mapper = project => {
    return `
        <div class="wrapper">
                
            <div class="card radius shadowDepth1">

                ${project.image ? 
                    `<div class="card__image border-tlr-radius">
                        <a href="${project.link}">
                            <img src="${project.image}" alt="image" id="project-image" class="border-tlr-radius">
                        </a>
                    </div>`           
                : ''}

        
                <div class="card__content card__padding">
        
                    <article class="card__article">
                        <h2><a href="${project.link}">${project.title}</a></h2>
        
                        <p class="paragraph-text-normal">${project.description} ${project.demo ? `<a href="${project.demo}">Demo</a>` : ''}</p>
                    </article>

                                
                    <div class="card__meta">
                        ${project.technologies.map(tech =>
                            `<span class="project-technology paragraph-text-normal">${tech}</span>`
                        ).join('')}
                    </div>

                </div>
            </div>
        </div>
    `
}

let selected = (slug) => {
    render_projects(slug);
}