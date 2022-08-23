import styled from 'styled-components';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { useRef, useEffect } from 'react';

import heroImg1 from '../assets/hero-1.svg';
import { config } from '../config/tsparticlesConfig';
import { stagger } from '../animations/Bounce';

const Hero = () => {
	const nameRef = useRef();
	const titleRef = useRef();
	const sourceCodeRef = useRef();

	const particlesInit = async (main) => {
		// you can initialize the tsParticles instance (main) here, adding custom shapes or presets
		// this loads the tsparticles package bundle, it's the easiest method for getting everything ready
		// starting from v2 you can add only the features you need reducing the bundle size
		await loadFull(main);
	};

	const particlesLoaded = (container) => {
		// console.log(container);
	};

	useEffect(() => {
		stagger(
			[nameRef.current, titleRef.current, sourceCodeRef.current],
			{ y: 30 },
			{ y: 0 }
		);
	}, []);

	return (
		<Wrapper>
			<Particles
				id='tsparticles'
				init={particlesInit}
				loaded={particlesLoaded}
				options={config}
			/>
			<div className='hero-center'>
				<div className='hero-title'>
					<h1 ref={nameRef}>
						My Projects <span ref={titleRef}>NgTuanLoc</span>
					</h1>
					<p></p>
					<a
						href='https://github.com/'
						className='btn btn-hero'
						target='_blank'
						rel='noreferrer'
						ref={sourceCodeRef}>
						Source code
					</a>
				</div>
				<img src={heroImg1} alt='web development' className='img bounce' />
			</div>
		</Wrapper>
	);
};

const Wrapper = styled.header`
	min-height: 65vh;
	padding: 5rem 1rem;
	position: relative;
	background: linear-gradient(
		30deg,
		rgba(238, 174, 202, 1) 0%,
		rgba(148, 187, 233, 1) 100%
	);
	display: flex;
	justify-content: center;
	align-items: center;
	canvas {
		display: block;
		width: 100%;
		height: 100%;
		opacity: 0.2;
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		padding: 0;
		margin: 0;
		z-index: 0;
	}
	img {
		display: none;
	}
	.hero-center {
		width: 90vw;
		max-width: var(--max-width);
	}
	@media (min-width: 992px) {
		min-height: 60vh;

		.hero-center {
			display: grid;
			grid-template-columns: 1fr 1fr;
			place-items: center;
			gap: 2rem;
		}
		img {
			display: block;
			animation: bounce 10s infinite;
		}
	}
	.hero-title h1 {
		color: var(--black-design);
		margin: 0;
	}
	.hero-title p {
		margin: 2rem 0;
		color: var(--grey-900);
		font-size: 1.25rem;
	}
	.hero-title span {
		letter-spacing: 5px;
		border-bottom: 2px solid var(--primary-design);
		margin: 0 0.5rem;
		text-align: center;
		display: inline-block;
		text-align: center;
		line-height: 1.25;
		font-style: italic;
		font-weight: 900;
	}
	.hero-btn {
		display: inline-block;
		background: var(--primary-design);
		border: 2px solid var(--primary-design);
		color: var(--black-design);
		font-weight: 500;
		text-transform: uppercase;
		padding: 0.75rem 1.25rem;
		margin-top: 3rem;
		box-shadow: var(--shadow-1);
		animation: bounce 2s infinite;
	}
	.hero-btn:hover {
		background: transparent;

		box-shadow: var(--shadow-2);
		color: var(--primary-design);
	}
`;

export default Hero;
