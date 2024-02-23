type Project = {
  id: number;
  url: string;
  repo: string;
  repoLink: string;
  desc: string;
};

export const getProjects = (): Project[] => {
  return [
    {
      id: 1,
      url: "https://podcasts-frontend.onrender.com/",
      repo: "Podcasts",
      repoLink: "https://github.com/pranavTripathi02/Podcast-webapp",
      desc: "Podcast catalogue created using MongoDB, ExpressJS, NodeJs and React",
    },
    {
      id: 2,
      url: "https://neon-creponne-5f2c4f.netlify.app/",
      repo: "TV-Shows",
      repoLink: "https://github.com/pranavTripathi02/svelte-TVShows",
      desc: "TV-Shows catalogue created using SvelteKit",
    },
    {
      id: 3,
      url: "https://chic-haupia-62de65.netlify.app/",
      repo: "Real Estate Listings",
      repoLink:
        "https://github.com/pranavTripathi02/Rent-Property-Listings--React",
      desc: "Real Estate listings created using MERN stack and React-Redux",
    },
    {
      id: 4,
      url: "https://sangeet-web-music.onrender.com/",
      repo: "Music Web App",
      repoLink: "https://github.com/pranavTripathi02/Sangeet-Music-App--MERN",
      desc: "Simple music web application with JWT authentication",
    },
    {
      id: 5,
      url: "https://playvie.netlify.app/",
      repo: "Plavie",
      repoLink: "https://github.com/pranavTripathi02/Plavie-react",
      desc: "Video catalogue, with playlists and custom video player",
    },
    {
      id: 6,
      url: "https://phenomenal-mandazi-44dcf1.netlify.app/",
      repo: "Hacker News",
      repoLink: "https://github.com/pranavTripathi02/Hacker-News-React",
      desc: "Frontend using news.ycombinator.com api, created using React",
    },
  ];
};
