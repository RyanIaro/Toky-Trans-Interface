import './App.css';
import { Card } from './Component/Card';
import { Price } from './Component/Price';

function App() {
	return (
		<>
			<div className="header">
				<h1>Toky Trans</h1>
				<p>"Voyagez au-dela de l'horizon"</p>
				<nav>
					<a href='#'>Menu</a>
					<a href='#'>Voyages</a>
					<a href='#'>Offres</a>
					<a href='#'>Réservation</a>
				</nav>
			</div>
			<div className='body'>
				<Card/>
				{/* <Price/> */}
			</div>
			<div className='footer'>
			</div>
		</>
	);
}

export default App;
