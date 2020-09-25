import React from 'react';
import { Badge, Card } from 'react-bootstrap';
import ReactMarkdown from 'react-markdown';

const Job = ({ job }) => {
	return (
		<Card className="mb-3">
			<Card.Body>
				<div className="d-flex justify-content-between">
					<div>
						<Card.Title>
							{job.title} -{' '}
							<span className="text-muted font-weight-light">
								{job.company}
							</span>
						</Card.Title>
						<Card.Subtitle className="text-muted mb-2">
							{new Date(job.created_at).toLocaleDateString()}
						</Card.Subtitle>
						<Badge variant="secondary" className="mr-2">{job.type}</Badge>
						<Badge variant="secondary">{job.location}</Badge>
						<div style={{ wordBreak: 'bread-all' }}>
							<ReactMarkdown source={job.how_to_apply} />
						</div>
					</div>
				</div>
			</Card.Body>
		</Card>
	);
};

export default Job;
