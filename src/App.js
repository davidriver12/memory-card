import './styles/App.css'
import Card from './components/Card';
import react, {useState} from 'react';
import Scoreboard from './components/Scoreboard';

function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex !== 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

function App() {
  const [weapons, setWeapons] = useState([
    'axe',
    'broadsword',
    'claymore',
    'crossbow',
    'dagger',
    'greatsword',
    'longbow',
    'longsword',
    'shortbow',
    'shortsword',
    'starscourge',
    'zweihander'
  ]);
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [currentClicked, setCurrentClicked] = useState('');
  const [clickedWeapons, setclickedWeapons] = useState([]);

  shuffle(weapons);

  function returnShuffledWeapons(){
    let newWeapons = weapons;
    shuffle(newWeapons);
    return newWeapons
  }


  function handleClick(){
    let newWeapons = returnShuffledWeapons();
    setWeapons([...newWeapons]);
  }

  let newCurrentClicked = '';
  let newClickedWeapons = [];
  let newBestScore = 0;

  function findClickedWeapon(e){
    e.stopPropagation();
    newCurrentClicked = e.target.alt;
    setCurrentClicked(newCurrentClicked);
    updateScore();
    return false;
  }

  function updateScore(){
    let newCurrentScore = currentScore;
    if (clickedWeapons.includes(newCurrentClicked)){
      setCurrentScore(0);
      setclickedWeapons([]);
    } else {
      newCurrentScore = newCurrentScore + 1;
      setCurrentScore(currentScore + 1);
      newClickedWeapons = [...clickedWeapons, newCurrentClicked];
      setclickedWeapons([...clickedWeapons, newCurrentClicked]);
      if (newCurrentScore > bestScore){
        setBestScore(newCurrentScore);
      }
    }
  }

  return (
    <div className="App"  onClick={(e) =>{
      if(e.target.parentNode.className === 'card') {
        findClickedWeapon(e);
      }
    }}>
      <div id='header'>Elden Ring <br></br> Memory Game</div>
      <Scoreboard currentScore={currentScore} bestScore={bestScore}/>
      <div id='content'>
        <Card weapon={weapons[0]} handler={handleClick} id='card1'/>
        <Card weapon={weapons[1]} handler={handleClick} id='card2'/>
        <Card weapon={weapons[2]} handler={handleClick} id='card3'/>
        <Card weapon={weapons[3]} handler={handleClick} id='card4'/>
        <Card weapon={weapons[4]} handler={handleClick} id='card5'/>
        <Card weapon={weapons[5]} handler={handleClick} id='card6'/>
        <Card weapon={weapons[6]} handler={handleClick} id='card7'/>
        <Card weapon={weapons[7]} handler={handleClick} id='card8'/>
        <Card weapon={weapons[8]} handler={handleClick} id='card9'/>
        <Card weapon={weapons[9]} handler={handleClick} id='card10'/>
        <Card weapon={weapons[10]} handler={handleClick} id='card11'/>
        <Card weapon={weapons[11]} handler={handleClick} id='card12'/>
      </div>
    </div>
  );
}

export default App;
