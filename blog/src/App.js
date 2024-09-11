import {useState} from "react";
import './App.css';

function App() {
	let post = '안양 우동 맛집';
	let [a, b] = useState('맛있는 짬뽕');
	return (
    <div className="App">
		<div className="black-nav">
			<h4 style={{color:'white', fontSize:'30px'}}>블로그임</h4>
		</div>
		<div className="list">
			<h4>{post}</h4>
			<h4>글제목</h4>
			<p>9월 11일</p>
			
		</div>
	</div>
  );
}

export default App;
