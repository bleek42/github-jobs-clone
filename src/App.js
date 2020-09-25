import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { useFetchJobs } from './Hooks/useFetchJobs';
import Job from './components/Job';

function App() {
	const [params, setParams] = useState({});
	const [page, setPage] = useState(1);
	const { jobs, loading, error } = useFetchJobs();

	return (
		<Container>
			{loading && <h2>loading...</h2>}
			{error && <h3>Error!</h3>}
			{jobs.map((job) => (
				<Job key={job.id} job={job} />
			))}
		</Container>
	);
}

export default App;
