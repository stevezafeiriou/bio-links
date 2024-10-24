import React from "react";
import { AppContainer, Card } from "./AppElements";
import { headerData, linksData } from "./linksData"; // Import header and link data
import "./App.css";

const App = () => {
	return (
		<AppContainer>
			<Card>
				<img src={headerData.imageSrc} alt={headerData.altText} />
				<h1>{headerData.title}</h1>
				<h2>{headerData.description}</h2>
			</Card>

			<Card>
				{linksData.map((link) => (
					<a key={link.id} href={link.url} target="_blank" rel="noreferrer">
						{link.buttonTitle}
					</a>
				))}
			</Card>

			<Card>
				<p>
					<span>Copyright © Saphire Labs 2024. All Rights Reserved.</span>
				</p>
			</Card>
		</AppContainer>
	);
};

export default App;
