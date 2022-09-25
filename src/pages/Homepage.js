import Hero from '../components/Hero';
import Projects from '../components/Projects';
import useFetch from '../hooks/useFetch';

const projectQuery = `*[_type=="Project"]{
	order, mainImage, title, sourceCode, url, "category":categories->{
		title, order
	}
}`;

const HomePage = () => {
	const { data: projects } = useFetch(projectQuery);

	const categories = Object.keys(projects);

	return (
		<>
			<Hero />
			{categories.map((category, id) => {
				return (
					<Projects key={id} title={category} projects={projects[category]} />
				);
			})}
		</>
	);
};

export default HomePage;
