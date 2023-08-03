import KnightTravailsImage from "../assets/ProjectAssets/KnightTravails.png";
import { Project } from "../classes/ProjectClass";
import { techIcons } from "../techImages";

const techUsed = [
	techIcons.htmlTech,
	techIcons.cssTech,
	techIcons.javascriptTech,
	techIcons.webpackTech,
];

export const KnightTravails = new Project(
	"Knight Travails",
	"Find the shortest path from one square to another.",
	KnightTravailsImage,
	"https://lumi-sg.github.io/KnightTravails/",
	"https://github.com/Lumi-sg/KnightTravails",
	techUsed
);
