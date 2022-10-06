import styled from 'styled-components';
import { AiFillCode } from 'react-icons/ai';

import { urlFor } from '../client';

const Project = ({ name, image, url, sourceCode }) => {
	return (
		<Wrapper className='project'>
			<a href={url} target='_blank' rel='noopener noreferrer'>
				<img src={urlFor(image)} alt={name} className='img' loading='lazy' />
			</a>
			<footer>
				<a
					href={sourceCode}
					target='_blank'
					rel='noopener noreferrer'
					className='source-code'>
					<AiFillCode className='bounce' />
				</a>

				<h5>{name}</h5>
			</footer>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	background: var(--white);
	box-shadow: var(--shadow-1);
	transition: var(--transition);
	border-radius: var(--borderRadius);
	position: relative;

	.source-code {
		position: absolute;
		top: 6px;
		right: 6px;
		font-size: 2rem;
		color: black;
	}

	&:hover {
		transform: scale(1.05);
		box-shadow: var(--shadow-2);
	}
	.img {
		width: 100%;
		display: block;
		border-top-left-radius: var(--borderRadius);
		border-top-right-radius: var(--borderRadius);
		height: 15rem;
		object-fit: fill;
	}

	footer {
		text-align: center;
		padding: 1rem 1.25rem;
		background: var(--white);
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 1rem;
		border-bottom-left-radius: var(--borderRadius);
		border-bottom-right-radius: var(--borderRadius);
	}
	footer h5 {
		margin-bottom: 0;
		color: var(--grey-900);
		font-weight: 500;
	}

	.bounce {
		transform: all 1s linear;
		animation: bounce 5s infinite;
	}
`;

export default Project;
