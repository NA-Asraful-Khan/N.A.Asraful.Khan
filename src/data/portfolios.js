import uuid from "react-uuid"
import { eye, git } from "../utils/Icons"
import ShoppingHub from '../img/portImages/ShoppingHub.png'
import TODO from '../img/portImages/TODO.png'
import AngelMakeup from '../img/portImages/AngelMakeup.png'
import Automative from '../img/portImages/Automative.png'
import Photographer from '../img/portImages/Photographer.png'
import MovieStore from '../img/portImages/MovieStore.png'
import QUIZ from '../img/portImages/QUIZ.png'

export const portfolios = [
    //Mern Start
    {
        id: uuid(),
        category: "MERN",
        title: "Automative",
        image: Automative,
        link1: "https://github.com/NA-Asraful-Khan/Automotive-Client",
        link2: "https://automotive-client.vercel.app/",
        link3: "https://github.com/NA-Asraful-Khan/Automotive-Server",
        icon1: git,
        icon2: eye,
    },
    //front end start
    {
        id: uuid(),
        category: "Front-End",
        title: "Angel Makeup",
        image: AngelMakeup,
        link1: "https://github.com/NA-Asraful-Khan/ANGELS-MAKEUP",
        link2: "https://serviceing-6e26a.web.app/",
        icon1: git,
        icon2: eye,
    },
    //MERN
    {
        id: uuid(),
        category: "MERN",
        title: "Todo App",
        image: TODO,
        link1: "https://github.com/NA-Asraful-Khan/awesomeTODO_FrontEnd",
        link2: "https://awesome-todo-front-end.vercel.app/",
        link3: "https://github.com/NA-Asraful-Khan/awesomeTODO_Server",
        icon1: git,
        icon2: eye,
    },
    {
        id: uuid(),
        category: "Front-End",
        title: "Photographer",
        image: Photographer,
        link1: "https://github.com/NA-Asraful-Khan/My-Photograpy-authenticated",
        link2: "https://photoprahy-routing.netlify.app/",
        icon1: git,
        icon2: eye,
    },
    {
        id: uuid(),
        category: "Front-End",
        title: "Shopping Hub",
        image: ShoppingHub,
        link1: "https://github.com/NA-Asraful-Khan/ecommerce_Frontend",
        link2: "https://ecommerce-fronend.vercel.app/",
        icon1: git,
        icon2: eye,
    },
    {
        id: uuid(),
        category: "Front-End",
        title: "Movie Store",
        image: MovieStore,
        link1: "https://github.com/NA-Asraful-Khan/Movie-Store",
        link2: "https://movie-store-of-naa.netlify.app/",
        icon1: git,
        icon2: eye,
    }
    ,
    {
        id: uuid(),
        category: "Front-End",
        title: "QUIZ APP",
        image: QUIZ,
        link1: "https://github.com/NA-Asraful-Khan/QUIZ_APP",
        link2: "https://quiz-app-teii.vercel.app/",
        icon1: git,
        icon2: eye,
    }
    
]