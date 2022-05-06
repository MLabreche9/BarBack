import React, { useState } from 'react';
import styles from './DisplayDrinks.module.css';
import { Col, Container, Row, Button } from 'reactstrap';
import DisplayDetails from './DisplayDetails';

function DisplayDrink({ drink }) {
	const [show, setShow] = useState(false);
	const {
		strDrink,
		strDrinkThumb,
		strInstructions,
		strIngredient1,
		strIngredient2,
		strIngredient3,
		strIngredient4
	} = drink;
	return (
		<Container>
			<Row className={`my-5 align-items-center ${styles['containerStyle']}`}>
				<Col className='col-sm-3 p-3'>
					<img
						src={strDrinkThumb}
						alt={strDrink}
						className={` ${styles['img']}`}
					/>
				</Col>
				<Col className='col-sm-6 justify-content-center align-items-center'>
					<h2 className='my-3'>{strDrink}</h2>
					<ul className='list-unstyled'>
						<li className='m-1'>{strIngredient1}</li>
						<li className='m-1'>{strIngredient2}</li>
						<li className='m-1'>{strIngredient3}</li>
						<li className='m-1'>{strIngredient4}</li>
					</ul>
				</Col>
				<Col className='col-12 col-sm-3'>
					<Button onClick={() => setShow(!show)} className='mb-3'>
						View Instructions
					</Button>
					{show && <DisplayDetails strInstructions={strInstructions} />}
				</Col>
			</Row>
		</Container>
	);
}

export default DisplayDrink;
