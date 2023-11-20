type Project = {
    url: string,
    repo: string,
    repoLink: string,
    desc: string,
}

export const getProjects = (): Project[] => {
    return [
        {
            url: "https://podcasts-frontend.onrender.com/",
            repo: "Podcasts",
            repoLink: "https://github.com/pranavTripathi02/Podcast-webapp",
            desc: "Podcast catalogue created using MongoDB, ExpressJS, NodeJs and React",
        },
        {
            url: "https://neon-creponne-5f2c4f.netlify.app/",
            repo: "TV-Shows",
            repoLink: "https://github.com/pranavTripathi02/svelte-TVShows",
            desc: "TV-Shows catalogue created using SvelteKit",
        },
        {
            url: "https://chic-haupia-62de65.netlify.app/",
            repo: "Real Estate Listings",
            repoLink: "https://github.com/pranavTripathi02/Rent-Property-Listings--React",
            desc: "Real Estate listings created using MERN stack and React-Redux",
        },
        {
            url: "https://sangeet-web-music.onrender.com/",
            repo: "Music Web App",
            repoLink: "https://github.com/pranavTripathi02/Sangeet-Music-App--MERN",
            desc: "Simple music web application with JWT authentication",
        },
        {
            url: "https://phenomenal-mandazi-44dcf1.netlify.app/",
            repo: "Hacker News",
            repoLink: "https://github.com/pranavTripathi02/Hacker-News-React",
            desc: "Frontend using news.ycombinator.com api; created using React",
        },
        {
            url: "https://simple-shopping.onrender.com/",
            repo: "E-commerce",
            repoLink: "https://github.com/pranavTripathi02/Online-E-Commerce-MVP---TS",
            desc: "E-commerce website MVP",
        },
    ]
}
