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
    id: "Начало пути",
    data: "июнь 2023",
    title: "Начало пути",
    typeWork: "Личная/учебная деятельность",
    tags: ["HTML", "CSS", "Базовый JS"],
    task: "Освоение базовой верстки и стилей, примитивной логики на js",
    imagesPortfolio: false,
  },
  {
    id: "Каталог магазина",
    data: "июнь 2023",
    title: "Каталог магазина",
    typeWork: "Личная/учебная деятельность",
    tags: ["SASS", "БЭМ", "Flex", "Grid", "Git"],
    rols: "Сверстать аналог онлайн-магазина",
    task: "верстка полноценных страниц и их адаптация под мобильные экраны, освоение scss миксинов, переменных, работа с Git",
    imagesPortfolio: false,
  },
  {
    id: "TestHub - сайт опросник",
    data: "сентябрь 2023",
    title: "TestHub - сайт опросник",
    typeWork: "Личная/учебная деятельность",
    tags: ["React", "React Route", "Rest Api", "Axios", "CSS модули"],
    rols: "Создание дизайна и разработка сайта с тестами",
    task: "Создание проекта с примитивной архитектурой, деструктуризацией на компоненты и роутингом. Использование хуков, создание кастомных. Освоение базовых get запросов, работа с бд через mockAPI",
    imagesPortfolio: true,
  },
  {
    id: "SolarHelper - сервис солнечных панелей",
    data: "октябрь 2023",
    title: "SolarHelper - сервис солнечных панелей",
    typeWork: "Совместная/коммерческая деятельность",
    tags: [
      "Figma",
      "Typescript",
      "Next.js",
      "RTK Query",
      "GitFlow",
      "ReatHookForm",
      "FSD архитектура",
    ],
    rols: "Создание с командой сервиса по подбору солнечных панелей",
    task: "Доработка существующего дизайна, создание дизайн-системы, разработка UI-компонентов и миксинов, верстка компонентов. Ведение задач в trello и простенькой документации проекта. Работы с ветками в Git",
    imagesPortfolio: false,
  },
  {
    id: "Простой Backend",
    data: "декабрь 2023",
    title: "Простой Backend",
    typeWork: "Личная/учебная деятельность",
    tags: ["Node.js", "Express", "Cors", "PostgreSQL"],
    rols: "Научиться создавать простой backend",
    task: "Получение списка контактов с сервера, создание новых контактов и их редактирование. Фильтрация и пагинация списка",
    imagesPortfolio: false,
  },
  {
    id: "Магазин Сантехники",
    data: "январь 2024",
    title: "Магазин Сантехники",
    typeWork: "Совместная/коммерческая деятельность",
    tags: ["Vercell", "Yup", "Clsx", "Formik", "React-yandex-maps"],
    rols: "Создание дизайна и разработка сайта для магазина сантехники в городе Апшеронск",
    task: "Оценка конкурентов и составление пути клиента. Разработка логотипа и дизайн-системы. Верстка страниц и компонентов. Создание формы обратной связи. Хранение каталога товаров на серверной части, фильтрация и пагинация товаров. Авторизация и регистрация клиента. Развертывание проекта",
    imagesPortfolio: true,
  },
  {
    id: "Это портфолио",
    data: "февраль 2024",
    title: "Это портфолио",
    typeWork: "Личная деятельность",
    tags: ["Tailwind", "React-hook-form", "Nodemailer"],
    rols: "Создание личного сайта-портфолио",
    task: "Разработка дизайна, верстка сайта, разработка формы обратной связи. Оформление кейсов из существующих работ",
    imagesPortfolio: false,
  },
  {
    id: "Сайт для Адвоката",
    data: "март 2024",
    title: "Сайт для Адвоката",
    typeWork: "Личная/коммерческая деятельность",
    tags: ["Figma", "Photoshop"],
    rols: "Создание дизайна сайта для Адвоката Оксаны Лосюк",
    task: "Оценка рынка и конкурентов, создание логотипа, разработка дизайна под компьютеры и телефоны",
    imagesPortfolio: false,
  },
];

export const navBarButtons = [
  "Приветствие",
  "Хронология",
  "Портфолио",
  "Инструменты",
  // "Отзывы",
];

import сантехникаPreview from "../../../public/potrfolio/full/Сантехника Апшеронск/1.svg";
import сантехника1 from "../../../public/potrfolio/full/Сантехника Апшеронск/1.svg";
import сантехника2 from "../../../public/potrfolio/full/Сантехника Апшеронск/2.svg";
import сантехника3 from "../../../public/potrfolio/full/Сантехника Апшеронск/3.svg";
import сантехника4 from "../../../public/potrfolio/full/Сантехника Апшеронск/4.svg";
import сантехника5 from "../../../public/potrfolio/full/Сантехника Апшеронск/5.svg";
import сантехника6 from "../../../public/potrfolio/full/Сантехника Апшеронск/6.svg";
import сантехника7 from "../../../public/potrfolio/full/Сантехника Апшеронск/7.svg";
import сантехника8 from "../../../public/potrfolio/full/Сантехника Апшеронск/8.svg";
import testHubPreview from "../../../public/potrfolio/full/testHub/testHub 1.svg";
import testHub1 from "../../../public/potrfolio/full/testHub/testHub 1.svg";
import testHub2 from "../../../public/potrfolio/full/testHub/testHub 2.svg";
import testHub3 from "../../../public/potrfolio/full/testHub/testHub 3.svg";
import testHub4 from "../../../public/potrfolio/full/testHub/testHub 4.svg";
import testHub5 from "../../../public/potrfolio/full/testHub/testHub 5.svg";
import testHub6 from "../../../public/potrfolio/full/testHub/testHub 6.svg";
import testHub7 from "../../../public/potrfolio/full/testHub/testHub 7.svg";
import testHub8 from "../../../public/potrfolio/full/testHub/testHub 8.svg";
import samsungPreview from "../../../public/potrfolio/full/samsung/samsung 1.svg";
import samsung1 from "../../../public/potrfolio/full/samsung/samsung 1.svg";
import samsung2 from "../../../public/potrfolio/full/samsung/samsung 2.svg";
import samsung3 from "../../../public/potrfolio/full/samsung/samsung 3.svg";
import samsung4 from "../../../public/potrfolio/full/samsung/samsung 4.svg";
export const portfolioImages = [
  {
    id: chronologyCards[5].id,
    name: "Сантехника Апшеронск",
    case: [
      сантехника1,
      сантехника2,
      сантехника3,
      сантехника4,
      сантехника5,
      сантехника6,
      сантехника7,
      сантехника8,
    ],
    preview: сантехникаPreview,
    links: {
      linkToWebSite: "https://sporta-2b.ru/",
      linkToGitHub: "https://github.com/frontsinfin/Portfolio",
      linkToFigma:
        "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F1RIE93UNMzAuG8QkqnkxPV%2F%25D0%25A1%25D0%25B0%25D0%25B9%25D1%2582-%25D0%25A1%25D0%25B0%25D0%25BD%25D1%2582%25D0%25B5%25D1%2585%25D0%25BD%25D0%25B8%25D0%25BA%25D0%25B8%3Ftype%3Ddesign%26node-id%3D0%253A1%26mode%3Ddesign%26t%3DfgvDd7duzzoCg3fj-1",
    },
  },
  {
    id: chronologyCards[2].id,
    name: "testHub",
    case: [
      testHub1,
      testHub2,
      testHub3,
      testHub4,
      testHub5,
      testHub6,
      testHub7,
      testHub8,
    ],
    preview: testHubPreview,
    links: {},
  },
  {
    id: "",
    name: "samsung",
    case: [samsung1, samsung2, samsung3, samsung4],
    preview: samsungPreview,
    links: {},
  },
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
