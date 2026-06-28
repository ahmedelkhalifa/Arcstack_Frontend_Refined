import dental from "../assets/projects/corporate/clinic/arcDental.webp"
import coffee from "../assets/projects/corporate/coffee/arcCoffee.webp"
import menex from "../assets/projects/business/menex.webp"
import yeniAy from "../assets/projects/corporate/aluminum/yeniAy.webp"

export const getProjects = (t) => [
  // dental clininc
  {
    id: 1,
    category: t("portfolio.projects.1.category"),
    title: t("portfolio.projects.1.title"),
    image: dental,
    featured: true,
    cta: t("portfolio.projects.1.cta"),
    link: "/work/arc-dental"
  },
  //   car rental
  {
    id: 2,
    category: t("portfolio.projects.2.category"),
    title: t("portfolio.projects.2.title"),
    image: coffee,
    featured: true,
    cta: t("portfolio.projects.2.cta"),
    link: "/work/arc-coffee"
  },
  //   Menex
  {
    id: 3,
    category: t("portfolio.projects.3.category"),
    title: t("portfolio.projects.3.title"),
    image: menex,
    featured: true,
    cta: t("portfolio.projects.3.cta"),
    link: "/work/menex"
  },
  //   E-commerce
  {
    id: 4,
    category: t("portfolio.projects.4.category"),
    title: t("portfolio.projects.4.title"),
    image: yeniAy,
    featured: true,
    cta: t("portfolio.projects.4.cta"),
    link: "/work/yeni-ay-aluminum"
  },
];
