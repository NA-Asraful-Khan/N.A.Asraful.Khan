import uuid from "react-uuid";
import { eye, git } from "../utils/Icons";
import ShoppingHub from "../img/portImages/ShoppingHub.png";
import TODO from "../img/portImages/TodoApp.png";
import SimpEcommerce from "../img/portImages/SimpleEcommerce.png";
import AngelMakeup from "../img/portImages/AngelMakeup.png";
import UniManagement from "../img/portImages/unimanagement.png";
import Photographer from "../img/portImages/Photographer.png";
import MovieStore from "../img/portImages/MovieStore.png";
import QUIZ from "../img/portImages/QUIZ.png";
import LVOCAB from "../img/portImages/LVOCAB.png";

export const portfolios = [
  //Mern Start
  {
    id: uuid(),
    category: "MERN",
    title: "University Management",
    image: UniManagement,
    link1: "https://github.com/NA-Asraful-Khan/University_Management_Frontend",
    link2: "https://uniapp.n-a-asraful-khan.xyz/",
    link3: "https://github.com/NA-Asraful-Khan/University_Management_Backend",
    icon1: git,
    icon2: eye,
  },
  {
    id: uuid(),
    category: "MERN",
    title: "Learn Vocabulary",
    image: LVOCAB,
    link1: "https://github.com/NA-Asraful-Khan/LearnVocab",
    link2: "https://learnvocab.n-a-asraful-khan.xyz/",
    link3: "https://github.com/NA-Asraful-Khan/LearnVocabServer",
    icon1: git,
    icon2: eye,
  },
  //MERN
  {
    id: uuid(),
    category: "MERN",
    title: "TODO Application",
    image: TODO,
    link1: "https://github.com/NA-Asraful-Khan/Redux_With_Todos",
    link2: "https://todoapp.n-a-asraful-khan.xyz/",
    icon1: git,
    icon2: eye,
  },
  {
    id: uuid(),
    category: "MERN",
    title: "Simple Ecommerce",
    image: SimpEcommerce,
    link1: "https://github.com/NA-Asraful-Khan/Fashion_Ecom_Frontend",
    link2: "https://ecomclient.n-a-asraful-khan.xyz/",
    link3: "https://github.com/NA-Asraful-Khan/Fashion_Ecom_Backend",
    icon1: git,
    icon2: eye,
  },

  //front end start
  {
    id: uuid(),
    category: "Front-End",
    title: "QUIZ APP",
    image: QUIZ,
    link1: "https://github.com/NA-Asraful-Khan/QUIZ_APP",
    link2: "https://quiz-app-teii.vercel.app/",
    icon1: git,
    icon2: eye,
  },

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
  },
];
