import styled from 'styled-components';

import Project from './Project';

const Projects = ({ title, projects }) => {
	const sortedProjects = projects.sort((a, b) => a.order - b.order);

	return (
		<Wrapper>
			<div className='title'>
				<h2>{title}</h2>
				<div className='title-underline'></div>
			</div>
			<div className='section-center'>
				{sortedProjects.map((project, id) => {
					const data = {
						name: project.title,
						url: project.url,
						image: project.mainImage,
						sourceCode: project.sourceCode,
					};
					return <Project key={id} {...data} />;
				})}
			</div>
		</Wrapper>
	);
};

const Wrapper = styled.section`
	padding: 5rem 0;
	background: var(--grey-200);
	.title {
		text-align: center;
		margin-bottom: 3rem;
	}

	.title-underline {
		height: 0.2rem;
		width: 7rem;
		background: var(--primary-design);
		margin: 0 auto;
		margin-top: -1rem;
	}
	.section-center {
		width: 90vw;
		max-width: var(--max-width);
		margin: 0 auto 2rem auto;
		display: grid;
		gap: 3rem 2rem;
		grid-template-columns: repeat(auto-fill, minmax(330px, 1fr));
	}
	@media (min-width: 992px) {
		.center {
			width: 95vw;
		}
	}
`;
export default Projects;
