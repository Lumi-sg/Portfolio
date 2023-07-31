import TierlistMakerImage from "../assets/ProjectAssets/Tierlistmaker.png";
import { techIcons } from "../assets/ProjectAssets/techIcons/techImages";
import { Project } from "../classes/ProjectClass";

const techUsed = [
	techIcons.htmlTech,
	techIcons.cssTech,
	techIcons.typescriptTech,
	techIcons.reactTech,
	techIcons.viteTech,
];

export const TierlistMaker = new Project(
	"Tierlist Maker",
	"A tierlist builder for various games with saving/loading and sharing features.",
	TierlistMakerImage,
	"https://lumi-sg.github.io/TierListMaker/",
	"https://github.com/Lumi-sg/TierListMaker",
	techUsed
);
