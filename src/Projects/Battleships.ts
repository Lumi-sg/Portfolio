import BattleShipsImage from "../assets/ProjectAssets/battleships.png";
import { techIcons } from "../assets/ProjectAssets/techIcons/techImages";
import { Project } from "../classes/ProjectClass";

const techUsed = [
	techIcons.htmlTech,
	techIcons.cssTech,
	techIcons.javascriptTech,
	techIcons.jestTech,
	techIcons.webpackTech,
];

export const BattleShips = new Project(
	"BattleShips",
	"A BattleShips game with ship placement and cpu opponent.",
	BattleShipsImage,
	"https://lumi-sg.github.io/Battleship/",
	"https://github.com/Lumi-sg/Battleship",
	techUsed
);
