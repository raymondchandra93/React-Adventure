import react_img from './assets/react-core-concepts.png';

const reactDescriptions = ['Core', 'Fundamental', 'Important'];

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function App() {
  // Make the path leaner
  const description = reactDescriptions[getRandomInt(reactDescriptions.length)];

  // Return statement
  return (
    <div>
      <header>
        <img src={react_img} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {description} React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
      <main>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
