import React, { useState } from 'react';
import Axios from 'axios';
import DisplayDrink from './DisplayDrink';
import styles from './LandingPage.module.css';
import barLogo from '../assets/barLogo.png';

import {
	Container,
	Row,
	Col,
	InputGroup,
	Form,
	Input,
	Button
} from 'reactstrap';

function LandingPage(props) {
	const [query, setQuery] = useState('');
	const [drinks, setDrinks] = useState([]);

	const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${query}`;

	const searchDrinks = async () => {
		try {
			const response = await Axios.get(url);
			console.log(response);
			setDrinks(response.data.drinks);
			setQuery('');
		} catch (e) {
			//setErrorMessage('Something went wrong');
			console.error(e);
		}
	};

	const onChange = (e) => setQuery(e.target.value);

	const onSubmit = (e) => {
		// if (query !== '') {
		e.preventDefault();

		searchDrinks();
		// } else {
		// 	setAlert('Please enter valid input');
		// }
	};

	return (
		<Container className=''>
			<Row className='my-5 justify-content-center'>
				<Col>
					<img src={barLogo} width='300rem' alt='bar logo' />
				</Col>
			</Row>
			<Row>
				<Col>
					<Form className='needs-validation' onSubmit={onSubmit}>
						<InputGroup className='justify-content-center mb-4'>
							<Input
								id='search'
								name='searchValue'
								onChange={onChange}
								placeholder='vodka, gin, whiskey'
								type='text'
								value={query}
								className={`form-control ${styles['input']}`}
								required
							></Input>
							<div className='invalid-feedback'>Please enter valid input</div>

							<Button onClick={onSubmit}>Search</Button>
						</InputGroup>
					</Form>
				</Col>
			</Row>

			<Row>
				<Col>
					<div>
						{drinks !== [] &&
							drinks.map((drink) => (
								<DisplayDrink key={drink.idDrink} drink={drink} />
							))}
					</div>
				</Col>
			</Row>
		</Container>
	);
}

export default LandingPage;
