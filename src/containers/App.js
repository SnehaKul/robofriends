import React, { useState, useEffect} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';

import './App.css';

function App (){
	
const[robot,setRobot] = useState([]);
const[searchfield, setSearchfield] = useState('');
const[count, setCount] = useState(0);	
	useEffect(() =>{
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => response.json())
		.then(users => setRobot(users));
		console.log(count);
	},[count])
	const onSearchChange =(event) =>{
		setSearchfield(event.target.value)
     }
	
		
		const filteredRobots = robot.filter(robot =>{
      	return robot.name.toLowerCase().includes(searchfield.toLowerCase());
      })
		if(!robot.length){
			return <h1 className = 'tc'>Loading</h1>
		}else {
		return(
		<div className='tc'>
		  <h1 className='f1'>RoboFriends</h1>
		  <button onClick={() => setCount(count+1)}>Click Me</button>
		  <SearchBox searchChange = {onSearchChange}/>
		  <Scroll>
		 <ErrorBoundary>
		  <CardList robot={filteredRobots}/>
		 </ErrorBoundary>
		  </Scroll>
		</div>
		);
	}
	
	
}
export default App;