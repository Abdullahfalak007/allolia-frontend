// src/constants/testimonials.ts
import { images } from "./images";

export interface Testimonial {
  id: number;
  name: string;
  title: string;
  avatar: string; // client portrait
  review: string;
  percent: number; // e.g. 98
  rating: number; // number of stars (1–4)
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Mikael Choux",
    title: "Multi-millionaire",
    avatar: images.client1, // add this to images.ts
    review: "Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod",
    percent: 98,
    rating: 4,
  },
  {
    id: 2,
    name: "Muniir Charosky",
    title: "Multi-CEO indépendant aka Jesus",
    avatar: images.client2,
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    percent: 100,
    rating: 4,
  },
  {
    id: 3,
    name: "Dieudonné Mbala Mbala",
    title: "Client fidèle",
    avatar: images.client3,
    review: "Lorem ipsum dolor sit amet, consectetur adipiscing",
    percent: 93,
    rating: 4,
  },
  {
    id: 4,
    name: "Mikael Choux",
    title: "Multi-millionaire",
    avatar: images.client1, // add this to images.ts
    review: "Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod",
    percent: 98,
    rating: 4,
  },
  {
    id: 4,
    name: "Muniir Charosky",
    title: "Multi-CEO indépendant aka Jesus",
    avatar: images.client2,
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    percent: 100,
    rating: 4,
  },
  {
    id: 6,
    name: "Dieudonné Mbala Mbala",
    title: "Client fidèle",
    avatar: images.client3,
    review: "Lorem ipsum dolor sit amet, consectetur adipiscing",
    percent: 93,
    rating: 4,
  },
  // …you can add more here
];
