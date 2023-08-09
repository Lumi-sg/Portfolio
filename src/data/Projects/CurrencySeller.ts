import { Project } from "../../classes/ProjectClass";
import currenySellerImage from "../../assets/ProjectAssets/currencyseller.png"
import { techIcons } from "../techImages";

const techUsed = [techIcons.csharpTech];

export const CurrencySeller = new Project(
	"Currency Seller",
	"A simple currency seller for Path of Exile using Poe.Ninja API.",
	currenySellerImage,
	"N/A",
	"https://github.com/Lumi-sg/BulkCurrencySeller",
	techUsed
);
