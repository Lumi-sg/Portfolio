import profileImage from "../assets/ProjectAssets/profile.png";
import github from "../assets/ProjectAssets/techIcons/ghub.png";
import linkedin from "../assets/ProjectAssets/techIcons/linkedin.png";
import twitter from "../assets/ProjectAssets/techIcons/twitter.png";
import "./Header.css";

const Header = () => {
	return (
		<div className="HeaderContainer">
			<div className="profileImageContainer">
				<img
					className="profileImage"
					src={profileImage}
					alt="profile"
				></img>
				<span className="profileName">Lumi_sg</span>
			</div>
			<div className="cardContainer">
				<h1 className="paragraphH1">About Me</h1>
				<p>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium
					quo totam sint saepe vel nulla, sit fugit quod architecto numquam
					sequi explicabo eligendi harum consequatur accusamus adipisci illo,
					quas expedita. Lorem, ipsum dolor sit amet consectetur adipisicing
					elit. Praesentium quo totam sint saepe vel nulla, sit fugit quod
					architecto numquam sequi explicabo eligendi harum consequatur
					accusamus adipisci illo, quas expedita.
				</p>
				<div className="iconContainer">
					<a
						href="https://github.com/Lumi-sg"
						target="_blank"
					>
						<img
							className="siteIcon"
							src={github}
							alt="github"
						></img>
					</a>
					<img
						className="siteIcon"
						src={linkedin}
						alt="linkedin"
					></img>
					<img
						className="siteIcon"
						src={twitter}
						alt="twitter"
					></img>
				</div>
			</div>
		</div>
	);
};

export default Header;
