import './App.css';
import ImageToggle from './components/ImageToggle';
import img1 from './img/1.jpg';
import imgHotpot1 from './img/Hotpot1.png';
import img2 from './img/2.jpg';
import imgHotpot2 from './img/Hotpot2.png';
import img3 from './img/3.jpg';
import imgHotpot3 from './img/Hotpot3.png';
import img4 from './img/4.jpg';
import imgHotpot4 from './img/Hotpot4.png';
import img5 from './img/5.jpg';
import imgHotpot5 from './img/Hotpot5.png';

const App = () => {

  return (
    <div className="App">
      <ImageToggle primary={img1} secoundry={imgHotpot1}/>
      <ImageToggle primary={img2} secoundry={imgHotpot2}/>
      <ImageToggle primary={img3} secoundry={imgHotpot3}/>
      <ImageToggle primary={img4} secoundry={imgHotpot4}/>
      <ImageToggle primary={img5} secoundry={imgHotpot5}/>
    </div>
  );
}
export default App;