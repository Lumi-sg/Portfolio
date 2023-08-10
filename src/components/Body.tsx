import "./Body.css";

import { Projects } from "../data/Projects/ProjectArray";

const Body = () => {
	return (
		<div className="BodyContainer">
			<h1 className="workHeader">My Work</h1>
			<div className="portfolioContainer">
				{Projects.map((project, index) => (
					<div
						className="projectCard"
						key={index}
					>
						<a
							href={project.livePage}
							target="_blank"
						>
							<img
								className="projectImage"
								src={project.projectImage}
								alt="project"
							/>
						</a>
						<div className="projectInfoContainer">
							<a
								href={project.githubRepo}
								target="_blank"
								style={{ color: "white", textDecoration: "underline" }}
							>
								<h2 className="projectName">{project.name}</h2>
							</a>
							<div className="techContainer">
								{project.techUsed.map((tech, index) => (
									<img
										key={index}
										className="techIcon"
										src={tech.imageURL}
										alt={tech.imageALT}
										title={tech.imageALT}
									/>
								))}
							</div>
						</div>
						<p className="projectDescription">{project.description}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default Body;
