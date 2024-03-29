import docmdx from "../assets/gallery/docmdx_blank.webp";
import sailly from "../assets/gallery/sailly_blank.webp";
import asador from "../assets/gallery/asador_blank.webp";
import bobaLife from "../assets/gallery/bobaLife_blank.webp";
import ioniq5 from "../assets/gallery/ioniq5_blank.webp";
import portfolio from "../assets/gallery/portfolio_blank.webp";

export const projects = [
    {
        id: 1,
        img: docmdx,
        alt: "doc-mdx snapshot",
        title: "doc-mdx",
        description: "This is doc-mdx, a simple application that allows users create concise technical documentation directly from a markdown document.",
        btnTitle: "go doc-mdx",
        btnUrl: "doc-mdx",
        liveUrlTitle: "Live",
        liveUrl: "https://doc-mdx.vercel.app",
        gitHubTitle: "Repository",
        gitHubUrl: "https://github.com/danveb/doc-mdx",
    },
    {
        id: 2,
        img: sailly,
        alt: "sail.ly snapshot",
        title: "sailly",
        description: "Dream in open waters. SAIL.LY is a web app for beginner-to-experienced sailors that want to enjoy a day out on the water. App allows users to check on their favorite sailing clubs for sailing conditions based on real-time weather data, integrated with Weather API.",
        btnTitle: "let's go for a sail",
        btnUrl: "sailly",
        liveUrlTitle: "Live",
        liveUrl: "https://sail-ly.netlify.app",
        gitHubTitle: "Repository",
        gitHubUrl: "https://github.com/danveb/sail.ly",
    },
    {
        id: 3,
        img: asador,
        alt: "asador.ly snapshot",
        title: "asador",
        description: "Ever wondered what asado means in Buenos Aires? Asador is all about sharing the joy of the best parrillas (steakhouses). Users are greeted with a live, open-source map with custom pins. Signing up for an account allows users to pin their favorite parrillas.",
        btnTitle: "hello asador",
        btnUrl: "asador",
        liveUrlTitle: "Live",
        liveUrl: "https://asador.vercel.app",
        gitHubTitle: "Repository",
        gitHubUrl: "https://github.com/danveb/asador.ly",
    },
    {
        id: 4,
        img: bobaLife,
        alt: "bobaLife snapshot",
        title: "bobalife",
        description: "Who enjoys sipping an ice-cold boba milk tea at any time of the day? bobaLife is an e-commerce web app designed for a fictitous boba shop. This app incorporates working cart/checkout process and integration of Stripe mobile payments.",
        btnTitle: "wanna boba?",
        btnUrl: "bobalife",
        liveUrlTitle: "Live",
        liveUrl: "https://bobalife.netlify.app",
        gitHubTitle: "Repository",
        gitHubUrl: "https://github.com/danveb/bobaLife",
    },
    {
        id: 5,
        img: ioniq5,
        alt: "ioniq5 snapshot",
        title: "ioniq5",
        description: "App designed for users who want to search deliveries of 2022 Hyundai IONIQ 5 to local dealerships. User can fill in the zipcode and radius for searching. Data is fetched from Hyundai USA's API and key details are displayed on a table.",
        btnTitle: "ioniq ftw",
        btnUrl: "ioniq5",
        liveUrlTitle: "Live",
        liveUrl: "https://ioniq5-lookup.netlify.app/",
        gitHubTitle: "Repository",
        gitHubUrl: "https://github.com/danveb/ioniq5",
    },
    {
        id: 6,
        img: portfolio,
        alt: "portfolio snapshot",
        title: "portfolio",
        description: "My portfolio",
        btnTitle: "this is it",
        btnUrl: "portfolio",
        liveUrlTitle: "Live",
        liveUrl: "https://portfolio-dbae.netlify.app/",
        gitHubTitle: "Repository",
        gitHubUrl: "https://github.com/danveb/portfolio.db",
    },
]