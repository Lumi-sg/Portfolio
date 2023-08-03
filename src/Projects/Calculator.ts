import CalculatorImage from "../assets/ProjectAssets/calculator.png";
import { Project } from "../classes/ProjectClass";
import { techIcons } from "../techImages";

const techUsed = [
	techIcons.htmlTech,
	techIcons.cssTech,
	techIcons.javascriptTech,
	techIcons.webpackTech,
];

export const Calculator = new Project(
	"Calculator",
	"A simple calculator with basic math operations.",
	CalculatorImage,
	"https://lumi-sg.github.io/Calculator/",
	"https://github.com/Lumi-sg/Calculator",
	techUsed
);
