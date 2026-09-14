import { portfolioContent } from "@/data/portfolio";

export const navItems = portfolioContent.navigation;

export const gridItems = [
  {
    id: 1,
    ...portfolioContent.aboutCards[0],
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    ...portfolioContent.aboutCards[1],
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    ...portfolioContent.aboutCards[2],
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    ...portfolioContent.aboutCards[3],
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },
  {
    id: 5,
    ...portfolioContent.aboutCards[4],
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    ...portfolioContent.aboutCards[5],
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
] as const;

const projectGraphics = ["/p1.svg", "/p2.svg", "/p3.svg", "/p4.svg"];

export const projects = portfolioContent.projects.map((project, index) => ({
  id: index + 1,
  title: project.title,
  des: project.description,
  img: projectGraphics[index],
  iconLists: [] as string[],
  link: portfolioContent.owner.github,
  sourceCode: portfolioContent.owner.github,
}));

export const testimonials = portfolioContent.principles;

// Empty by design: do not imply client or company relationships that do not exist.
export const companies: ReadonlyArray<{
  id: number;
  name: string;
  img: string;
  nameImg: string;
}> = [];

const experienceGraphics = ["/exp1.svg", "/exp2.svg", "/exp3.svg", "/exp4.svg"];

export const workExperience = portfolioContent.experience.map(
  (experience, index) => ({
    id: index + 1,
    title: experience.title,
    desc: experience.description,
    className: "md:col-span-2",
    thumbnail: experienceGraphics[index],
  })
);

export const socialMedia = [
  {
    name: "GitHub",
    img: "/git.svg",
    link: portfolioContent.owner.github,
  },
] as const;

export const techStack = portfolioContent.techStack;
