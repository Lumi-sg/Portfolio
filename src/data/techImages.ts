import csharp from "../assets/ProjectAssets/techIcons/csharp.png";
import css from "../assets/ProjectAssets/techIcons/css-3.png";
import firebase from "../assets/ProjectAssets/techIcons/firebase.png";
import html from "../assets/ProjectAssets/techIcons/html.png";
import jest from "../assets/ProjectAssets/techIcons/jest.png";
import javascript from "../assets/ProjectAssets/techIcons/js.png";
import react from "../assets/ProjectAssets/techIcons/physics.png";
import typescript from "../assets/ProjectAssets/techIcons/typescript.png";
import vite from "../assets/ProjectAssets/techIcons/vite.png";
import { tech } from "../classes/ProjectClass";

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

	typescriptTech,
	firebaseTech,
	jestTech,
};
export { techIcons };
