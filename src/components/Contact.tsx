import profileImage from "../assets/ProjectAssets/profile.png";
import github from "../assets/ProjectAssets/techIcons/ghub.png";
import linkedin from "../assets/ProjectAssets/techIcons/linkedin.png";
import twitter from "../assets/ProjectAssets/techIcons/twitter.png";
import "./Contact.css";

const Contact = () => {
	return (
		<div className="ContactContainer">
			<div className="contactInfoContainer">
				<div className="textContainer">
					<h2>Contact me</h2>
					<p>
						Please get in touch if you think our work could be mutually been
						beneficial!
					</p>
					<p>1234 Random Road</p>
					<p>Random Town, California 12345</p>
					<p>
						<i className="fa fa-phone"></i> 555-555-5555
					</p>
					<p>
						<i className="fa fa-envelope"></i> lumi.is.not.real@gmail.com
					</p>
				</div>
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
			<div className="imageContainer">
				<img
					className="profileImage"
					src={profileImage}
					alt="profile"
				></img>
			</div>
		</div>
	);
};

export default Contact;
