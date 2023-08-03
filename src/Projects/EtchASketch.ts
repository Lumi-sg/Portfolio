import EtchASketchImage from "../assets/ProjectAssets//etchasketch.png";
import { Project } from "../classes/ProjectClass";
import { techIcons } from "../techImages";

const techUsed = [techIcons.htmlTech, techIcons.cssTech, techIcons.javascriptTech];

export const EtchASketch = new Project(
	"EtchASketch",
	"An Etch-A-Sketch game.",
	EtchASketchImage,
	"https://lumi-sg.github.io/EtchASketch/",
	"https://github.com/Lumi-sg/EtchASketch",
	techUsed
);
