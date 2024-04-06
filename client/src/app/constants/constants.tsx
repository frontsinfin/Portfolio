import telegram from "../../../public/icons/telegram.svg";
import github from "../../../public/icons/github.svg";
import figma from "../../../public/icons/figma.svg";
import instagram from "../../../public/icons/instagram.svg";
import vk from "../../../public/icons/vk.svg";
import illustrator from "../../../public/icons/illustrator.svg";
import photoshop from "../../../public/icons/photoshop.svg";
import trello from "../../../public/icons/trello.svg";
import notion from "../../../public/icons/notion.svg";
import vsCode from "../../../public/icons/vsCode.svg";
import phone from "../../../public/icons/phone.svg";
import email from "../../../public/icons/mail.svg";

export const contacts = [
  { id: "telegram", icon: telegram, link: "https://t.me/siniyfilin" },
  { id: "github", icon: github, link: "https://github.com/frontsinfin" },
  {
    id: "instagram",
    icon: instagram,
    link: "https://instagram.com/snuysoviy_lis",
  },
  { id: "vk", icon: vk, link: "https://vk.com/snyusovyi_lis" },
  { id: "email", icon: email, link: "mailto:siniyfilin@yandex.ru" },
  { id: "phone", icon: phone, link: "89156477438" },
];
export const tools = [
  { name: "Figma", icon: figma },
  { name: "Illustrator", icon: illustrator },
  { name: "Photoshop", icon: photoshop },
  { name: "Trello", icon: trello },
  { name: "Notion", icon: notion },
  { name: "VS Code", icon: vsCode },
  { name: "GitHub", icon: github },
];

export const chronologyCards = [
  {
    id: 1,
    data: "февраль 2023",
    title: "Знакомство с web-сферой",
    typeWork: "Личная/учебная деятельность",
    tags: [
      "HTML",
      "CSS",
      "Базовый JS",
      "дизайн в figma",
      "illustrator",
      "git",
      "tailwind",
    ],
    rols: "Дизайнер, младший разработчик",
    task: "Верстка компонентов, заливание в Git, трекинг задач в trello, примитивная бизнес логика",
  },
  {
    id: 2,
    data: "март 2023",
    title: "Первый проект",
    typeWork: "Личная/учебная деятельность",
    tags: ["SASS", "БЭМ", "Адаптивная верстка"],
    rols: "Дизайнер, младший разработчик",
    task: "Верстка компонентов, задливание в Git",
  },
  {
    id: 3,
    data: "апрель 2023",
    title: "Первый проект",
    typeWork: "Личная/учебная деятельность",
    tags: ["SASS", "БЭМ", "Адаптивная верстка"],
    rols: "Дизайнер, младший разработчик",
    task: "Верстка компонентов, задливание в Git",
  },
  {
    id: 4,
    data: "март 2023",
    title: "Первый проект",
    typeWork: "Личная/учебная деятельность",
    tags: ["SASS", "БЭМ", "Адаптивная верстка"],
    rols: "Дизайнер, младший разработчик",
    task: "Верстка компонентов, задливание в Git",
  },
  {
    id: 5,
    data: "март 2023",
    title: "Первый проект",
    typeWork: "Личная/учебная деятельность",
    tags: ["SASS", "БЭМ", "Адаптивная верстка"],
    rols: "Дизайнер, младший разработчик",
    task: "Верстка компонентов, задливание в Git",
  },
];

export const navBarButtons = [
  "Приветствие",
  "Хронология",
  "Портфолио",
  "Инструменты",
  "Отзывы",
];

import testHubFull from "../../../public/potrfolio/full/testHub.jpg";
import landingFull from "../../../public/potrfolio/full/landing.jpg";
import testHubPreview from "../../../public/potrfolio/preview/testHub.jpg";
import landingPreview from "../../../public/potrfolio/preview/landing.jpg";
export const portfolioImages = [
  { name: "testHub", full: testHubFull, preview: testHubPreview },
  { name: "landing", full: landingFull, preview: landingPreview },
  { name: "testHub2", full: testHubFull, preview: testHubPreview },
  { name: "landing2", full: landingFull, preview: landingPreview },
  { name: "testHub3", full: testHubFull, preview: testHubPreview },
  { name: "landing3", full: landingFull, preview: landingPreview },
];

import igor from "../../../public/reviews/igor.png";
export const reviewsCards = [
  {
    avatar: igor,
    name: "Игорь Судак",
    position: "Руководитель умный-дом.рф",
    review:
      "Исполнительный, быстрый, общительный и такчтиный человек. Работа сделана в кратчайшие сроки, все по тех.заданию и профессианально обограны слодные моменты дизайна!",
  },
  {
    avatar: igor,
    name: "Игорь Тудак",
    position: "Руководитель умный-дом.рф",
    review:
      "Исполнительный, быстрый, общительный и такчтиный человек. Работа сделана в кратчайшие сроки, все по тех.заданию и профессианально обограны слодные моменты дизайна!",
  },
  {
    avatar: igor,
    name: "Игорь Мудак",
    position: "Руководитель умный-дом.рф",
    review:
      "Исполнительный, быстрый, общительный и такчтиный человек. Работа сделана в кратчайшие сроки, все по тех.заданию и профессианально обограны слодные моменты дизайна!",
  },
  {
    avatar: igor,
    name: "Игорь Кудак",
    position: "Руководитель умный-дом.рф",
    review:
      "Исполнительный, быстрый, общительный и такчтиный человек. Работа сделана в кратчайшие сроки, все по тех.заданию и профессианально обограны слодные моменты дизайна!",
  },
  {
    avatar: igor,
    name: "Игорь Цудак",
    position: "Руководитель умный-дом.рф",
    review:
      "Исполнительный, быстрый, общительный и такчтиный человек. Работа сделана в кратчайшие сроки, все по тех.заданию и профессианально обограны слодные моменты дизайна!",
  },
  {
    avatar: igor,
    name: "Игорь Иудак",
    position: "Руководитель умный-дом.рф",
    review:
      "Исполнительный, быстрый, общительный и такчтиный человек. Работа сделана в кратчайшие сроки, все по тех.заданию и профессианально обограны слодные моменты дизайна!",
  },
];

export const dataContacts = [
  { social: "@siniyfilin", icon: telegram, link: "https://t.me/siniyfilin" },
  {
    social: "@snuysoviy_lis",
    icon: instagram,
    link: "https://instagram.com/snuysoviy_lis",
  },
  { social: "8 915 647-74-38", icon: phone, link: "#Контакты" },
];
