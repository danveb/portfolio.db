import bobaLife from "../assets/projects/bobaLife.png"; 
import ioniq5 from "../assets/projects/ioniq5.png"; 
import sailmasterII from "../assets/projects/sailmasterII.png"; 
import koffee from "../assets/projects/koffee.png"; 
import laptopMain from "../assets/projects/laptop-main.png"; 

export const projects = [
    {
        id: 1, 
        img: koffee, 
        title: "koffee.ly", 
        description: "A clean and modern React app designed for an upcoming coffee shop in town. Users can create an account browse a selection of classic coffee products and check out their favorite coffee drinks. Implemented with Stripe for payment. Work in progress!", 
        buttons: ["React", "Redux", "Styled Components", "Express", "JWT", "Stripe", "MongoDB"],
        backgroundColor: "var(--powder-blue)", 
        liveSite: "TBA", 
        githubRepo: "https://github.com/danveb/koffee.ly", 
        target: "_blank", 
        rel: "noreferrer noopener", 
    }, 
    {
        id: 2, 
        img: bobaLife, 
        title: "bobaLife", 
        description: "Who enjoys sipping a fresh cup of boba at any time of the day? bobaLife is a personal website that I designed for a potential side-business opportunity. This app is still in the early stages of development. Work in progress!", 
        buttons: ["React", "Sass", "Express", "JWT", "Auth", "MongoDB", "Netlify"], 
        backgroundColor: "var(--fuzzy-wuzzy)", 
        liveSite: "https://bobalife.netlify.app", 
        githubRepo: "https://github.com/danveb/bobalife", 
        target: "_blank", 
        rel: "noreferrer noopener", 
    }, 
    {
        id: 3, 
        img: ioniq5, 
        title: "ioniq5 Lookup", 
        description: "App designed for users who want to search deliveries of 2022 Hyundai IONIQ 5 to local dealerships. User can fill in the zipcode and desired radius (in miles). Data is fetched from Hyundai USA's API and key details are displayed on a table.", 
        buttons: ["React", "Sass", "Express", "Hyundai USA API", "Surge"], 
        backgroundColor: "var(--ny-pink)", 
        liveSite: "https://ioniq5-lookup.surge.sh/", 
        githubRepo: "https://github.com/danveb/ioniq5", 
        target: "_blank", 
        rel: "noreferrer noopener", 
    }, 
    {
        id: 4, 
        img: sailmasterII, 
        title: "Sail Master II", 
        description: "Sail-Master II is an app for sailors and water sports’ enthusiasts that have a common goal to share the joy in sailing. This app lets users know if sailing conditions based on current wind parameters are appropriate to enjoy a day out on the water.", 
        buttons: ["React", "Express", "JWT", "Weather API", "PostgreSQL"], 
        backgroundColor: "var(--cadet-blue-crayola)", 
        liveSite: "https://lighthouse-sailor.surge.sh/", 
        githubRepo: "https://github.com/danveb/sail-master-II", 
        target: "_blank", 
        rel: "noreferrer noopener", 
    }, 
    {
        id: 5, 
        img: laptopMain, 
        title: "More Projects on GitHub", 
        description: "Check my GitHub link to view more projects where I continue to build user-focused apps. Follow the link below!", 
        buttons: [], 
        backgroundColor: "var(--maximum-blue)", 
        liveSite: "", 
        githubRepo: "https://github.com/danveb", 
        target: "_blank", 
        rel: "noreferrer noopener", 
    }, 
]; 