export class Project {
	name: string;
	description: string;
	projectImage: string;
	livePage: string;
	githubRepo: string;
	techUsed: tech[];
	constructor(
		name: string,
		description: string,
		projectImage: string,
		livePage: string,
		githubRepo: string,
		techUsed: tech[]
	) {
		this.name = name;
		this.description = description;
		this.projectImage = projectImage;
		this.livePage = livePage;
		this.githubRepo = githubRepo;
		this.techUsed = techUsed;
	}
}

export type tech ={
    name: string;
    imageURL: string;
    imageALT: string;
}