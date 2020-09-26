import React, { useState } from 'react';
import { Container, ProgressBar } from 'react-bootstrap';
import { useFetchJobs } from './Hooks/useFetchJobs';
import Job from './components/Job';
import JobsPagination from './components/JobsPagination';
import SearchForm from './components/SearchForm';

function App() {
	const [params, setParams] = useState({});
	const [page, setPage] = useState(1);
	const { jobs, loading, error } = useFetchJobs(params, page);

	const handleParamChange = (ev) => {
		const param = ev.target.name;
		const value = ev.target.value;
		setPage(1);
		setParams(prevParams => (
			{ ...prevParams, [param]: value }
		))
	}

	return (
		<Container className="my-4">
			<h1 className="mb-4">Stop reacting to everything on social media and learn <a href="https://reactjs.org/">React..</a></h1>
			<h1 className="mb-4">Pull yourself up by your bootstraps and learn <a href="https://react-bootstrap.github.io/">Bootstrap...</a></h1>
			<h1 className="mb-4">Make a GitHub profile and GIT GUD...</h1>
			<JobsPagination page={page} setPage={setPage} />
			{loading && <ProgressBar now={60} />}
			{!loading && <iframe title="shia-lebouf-doit" width="814" height="458" src="https://www.youtube.com/embed/ZXsQAXx_ao0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>}
			<p>... that was corny but DO IT!</p>
			{error && <h3>Error! Try refreshing your browser...</h3>}
			{jobs.map((job) => (
				<Job key={job.id} job={job} />
			))}
			<JobsPagination page={page} setPage={setPage} />
		</Container>
	);
}

export default App;
