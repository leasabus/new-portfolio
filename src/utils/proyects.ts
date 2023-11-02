import { ProjectTypes } from "../types/types";

export const proyects: ProjectTypes[] = [
  {
    id: 1,
    proyect: "Aerolab Challenge",
    description: `This project consists in fetching data from the aerolab API, which
    brings a series of products and features. I was in charge of sorting,
    filtering and styling these products. Also they have a fictitious
    price to be able to be bought.`,
    demo: "https://aerolab-challenge-ts.netlify.app/",
    repository: "https://github.com/leasabus/aerolab-challenge",
    image: "../../public/assets/projects/aerolab-logo.jpg",
    stack: ["Typescript", "ChakraUI", "React", "Vite"],
  },

  {
    id: 2,
    proyect: "MELI Clone",
    description: `This project consists in cloning the product interface of the biggest e-commerce in Argentina called Mercado Libre. Replicate functionalities such as modal, sliders with images among others. `,
    demo: "https://meli-clone.netlify.app/",
    repository: "https://github.com/leasabus/meli-clone-vite",
    image: "../../public/assets/projects/logo-meli.jpg",
    stack: ["React", "Javascript", "Vite", "TailwindCSS"],
  },

  {
    id: 3,
    proyect: "Enterprenur Dashboard",
    description: `Dashboard for visualization of payments and earnings. Includes descriptive graphs with comparisons over time. It also contains sections of payments with their respective payment statuses.`,
    demo: "https://dashboard-nextjs-lea.vercel.app/",
    repository: "https://github.com/leasabus/dashboard-nextjs",
    image: "../../public/assets/projects/dashboard-logo.jpg",
    stack: ["React", "Javascript", "Vite", "TailwindCSS"],
  },
  {
    id: 4,
    proyect: "Crypto Data",
    description: `This project consists of consuming the coingecko API and listing the main cryptocurrencies on the market. It also has a section where the top trendings of the week are shown.`,
    demo: "https://cryptodata-app-react.netlify.app/",
    repository: "https://github.com/leasabus/Crypto-app",
    image: "../../public/assets/projects/btc-logo.jpg",
    stack: ["React", "Javascript", "Vite"],
  },

  {
    id: 5,
    proyect: "Netflix Clone",
    description: `This project consists in cloning the netflix graphical interface. Replicating the functionality of sliding movies, login and saving movies in favorites.`,
    demo: "https://tmovies-app-react.netlify.app/",
    repository: "https://github.com/leasabus/netflix-clone",
    image: "../../public/assets/projects/movies.jpg",
    stack: ["React", "Vite", "Javascript"],
  },

  {
    id: 6,
    proyect: "Weather App",
    description: `Weather application showing characteristics of the selected place. You can search for any city in the world and show how the weather is at this moment.`,
    demo: "https://weather-app-leasabus.netlify.app/",
    repository: "https://github.com/leasabus/Weather-app-react",
    image: "../../public/assets/projects/weather.jpg",
    stack: ["Javascript", "CSS", "HTML"],
  },
];
