import asador from "../assets/projects/asador.png"; 
import bobaLife from "../assets/projects/bobaLife.png"; 
import ioniq5 from "../assets/projects/ioniq5.png"; 
import sailmasterII from "../assets/projects/sailmasterII.png"; 
import laptopMain from "../assets/projects/laptop1.png"; 

export const projects = [
    {
        id: 1, 
        img: bobaLife, 
        title: "bobaLife", 
        description: "Who enjoys sipping an ice-cold boba milk tea at any time of the day? bobaLife is an e-commerce web app designed for a fictitous boba shop. This app incorporates working cart/checkout process and integration of Stripe mobile payments.",
        buttons: ["React", "Redux", "Styled Components", "Express", "JWT", "Stripe-js", "MongoDB", "Netlify"], 
        backgroundColor: "var(--fuzzy-wuzzy)", 
        liveSite: "https://bobalife.netlify.app", 
        githubRepo: "https://github.com/danveb/bobalife", 
        target: "_blank", 
        rel: "noreferrer noopener", 
    }, 
    {
        id: 2, 
        img: asador, 
        title: "asador", 
        description: "Ever wondered about asado (barbeque) in Buenos Aires? Asador is all about sharing the joy of the best parrillas (steakhouses). Users are greeted with a live map with pins. Signing up for an account allows users to pin their favorite parrillas.", 
        buttons: ["React", "Redux", "Sass", "Express", "JWT", "MapboxGL API", "MongoDB", "Netlify"],
        backgroundColor: "var(--raisin-black)", 
        liveSite: "https://asador.netlify.app", 
        githubRepo: "https://github.com/danveb/asador.ly", 
        target: "_blank", 
        rel: "noreferrer noopener", 
    }, 
    {
        id: 3, 
        img: ioniq5, 
        title: "ioniq5 Lookup", 
        description: "App designed for users who want to search deliveries of 2022 Hyundai IONIQ 5 to local dealerships. User can fill in the zipcode and radius for searching. Data is fetched from Hyundai USA's API and key details are displayed on a table.", 
        buttons: ["React", "Sass", "MUI", "Express", "Hyundai USA API", "Netlify"], 
        backgroundColor: "var(--ny-pink)", 
        liveSite: "https://ioniq5-lookup.netlify.app/", 
        githubRepo: "https://github.com/danveb/ioniq5", 
        target: "_blank", 
        rel: "noreferrer noopener", 
    }, 
    {
        id: 4, 
        img: sailmasterII, 
        title: "Sail Master II", 
        description: "App built for sailors and water sports’ enthusiasts that have a common goal to share the joy in sailing. App informs sailing conditions based on current wind parameters; it makes it the perfect companion to enjoy the day on the water.", 
        buttons: ["React", "Express", "JWT", "Weather API", "PostgreSQL", "Surge"], 
        backgroundColor: "var(--cadet-blue-crayola)", 
        liveSite: "https://lighthouse-sailor.surge.sh/", 
        githubRepo: "https://github.com/danveb/sail-master-II", 
        target: "_blank", 
        rel: "noreferrer noopener", 
    }, 
    {
        id: 5, 
        img: laptopMain, 
        title: "Check my GitHub", 
        description: "Check my GitHub link to view more projects where I continue to build user-focused apps. Follow the link below!", 
        buttons: [], 
        backgroundColor: "var(--maximum-blue)", 
        liveSite: "", 
        githubRepo: "https://github.com/danveb", 
        target: "_blank", 
        rel: "noreferrer noopener", 
    }, 
]; 