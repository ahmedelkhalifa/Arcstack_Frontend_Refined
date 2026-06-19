import dental from "../assets/projects/dental_clinic.webp"
import coffee from "../assets/projects/coffee_shop.webp"
import menex from "../assets/projects/menex.png"
import yeniAy from "../assets/projects/yeni-ay.png"

export const getProjects = (t) => [
  // dental clininc
  {
    id: 1,
    category: t("portfolio.projects.1.category"),
    title: t("portfolio.projects.1.title"),
    image: dental,
    featured: true,
    cta: t("portfolio.projects.1.cta"),
  },
  //   car rental
  {
    id: 2,
    category: t("portfolio.projects.2.category"),
    title: t("portfolio.projects.2.title"),
    image: coffee,
    featured: true,
    cta: t("portfolio.projects.2.cta"),
  },
  //   Menex
  {
    id: 3,
    category: t("portfolio.projects.3.category"),
    title: t("portfolio.projects.3.title"),
    image: menex,
    featured: true,
    cta: t("portfolio.projects.3.cta"),
  },
  //   E-commerce
  {
    id: 4,
    category: t("portfolio.projects.4.category"),
    title: t("portfolio.projects.4.title"),
    image: yeniAy,
    featured: true,
    cta: t("portfolio.projects.4.cta"),
  },
];
