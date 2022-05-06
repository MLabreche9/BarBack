import React from 'react';
import { Container, Row, Col } from 'reactstrap';

function DisplayDetails({ strInstructions }) {
	return (
		<Container>
			<Row>
				<Col>
					<p>{strInstructions}</p>
				</Col>
			</Row>
		</Container>
	);
}

export default DisplayDetails;
