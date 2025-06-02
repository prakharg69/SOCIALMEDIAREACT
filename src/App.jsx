import './App.css'
import FuturisticNavbar from './component/nvbar.jsx'
import BlurText from "./BlurText";
const handleAnimationComplete = () => {
  console.log('Animation completed!');
};


function App() {
  return <div className= 'h-[20rem] bg-black'>
      <FuturisticNavbar />
      <BlurText
  text="Isn't this so cool?!"
  delay={150}
  animateBy="words"
  direction="top"
  onAnimationComplete={handleAnimationComplete}
  className="text-[10rem] mb-8 text-white"
/>

  </div>;
}

export default App
