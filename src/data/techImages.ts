
import { tech } from "../classes/ProjectClass";
import csharp from "../techIcons/csharp.png";
import css from "../techIcons/css-3.png";
import firebase from "../techIcons/firebase.png";
import html from "../techIcons/html.png";
import jest from "../techIcons/jest.png";
import javascript from "../techIcons/js.png";
import react from "../techIcons/physics.png";
import typescript from "../techIcons/typescript.png";
import vite from "../techIcons/vite.png";
import webpack from "../techIcons/webpack.png";



const htmlTech: tech = {
	name: "HTML",
	imageURL: html,
	imageALT: "HTML",
};
const cssTech: tech = {
	name: "CSS",
	imageURL: css,
	imageALT: "CSS",
};
const javascriptTech: tech = {
	name: "JavaScript",
	imageURL: javascript,
	imageALT: "JavaScript",
};
const reactTech: tech = {
	name: "React",
	imageURL: react,
	imageALT: "React",
};
const viteTech: tech = {
	name: "Vite",
	imageURL: vite,
	imageALT: "Vite",
};
const webpackTech: tech = {
	name: "Webpack",
	imageURL: webpack,
	imageALT: "Webpack",
};
const typescriptTech: tech = {
	name: "TypeScript",
	imageURL: typescript,
	imageALT: "TypeScript",
};
const csharpTech: tech = {
	name: "C#",
	imageURL: csharp,
	imageALT: "C#",
};
const firebaseTech: tech = {
	name: "Firebase",
	imageURL: firebase,
	imageALT: "Firebase",
};
const jestTech: tech = {
	name: "Jest",
	imageURL: jest,
	imageALT: "Jest",
};

const techIcons = {
	csharpTech,
	cssTech,
	htmlTech,
	javascriptTech,
	reactTech,
	viteTech,
	webpackTech,
	typescriptTech,
	firebaseTech,
	jestTech,
};
export { techIcons };
