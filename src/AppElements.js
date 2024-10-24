import styled from "styled-components";

export const AppContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100vh;
	align-items: center;
	justify-content: center;
`;

export const Card = styled.div`
	display: flex;
	flex-direction: column;
	max-width: 600px;
	text-align: center;
	justify-content: center;
	align-items: center;

	img {
		width: 50px;
		height: 50px;
		object-fit: cover;
		-o-object-fit: cover;
		margin: 10px;
	}
	h1 {
		font-weight: 600;
		font-size: 1.2rem;
	}

	h2 {
		text-align: justify;
		max-width: 300px;
		font-size: 0.785rem;
		font-weight: 400;
		margin: 10px;
	}

	p {
		text-align: justify;
		max-width: 300px;
		font-weight: 200;
		span {
			font-size: 0.758rem;
			color: gray;
		}
	}

	a {
		width: 300px;
		font-size: 0.875rem;
		color: #f8f8f8;
		background-color: #000;
		text-decoration: none;
		padding: 10px 15px;
		margin: 10px;
		border: 1px solid #000;
		font-weight: 400;

		max-width: 300px;
		transition: all 0.25s ease-in-out;

		&:hover {
			color: #fff;
			background-color: #ff56b1;
			border: 1px solid #ff56b1;
		}
	}

	@media screen and (max-width: 768px) {
		width: 100%;
		max-width: 100%;
		h2,
		p,
		a {
			width: 90%;
			max-width: 90%;
		}
	}
`;
