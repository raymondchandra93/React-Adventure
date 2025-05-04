import reactImg from './assets/react-core-concepts.png';
import componentsImg from './assets/components.png';
import { CORE_CONCEPTS } from './data';

const reactDescriptions = ['Core', 'Fundamental', 'Important'];

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function Header() {
  // Make the path leaner
  const description = reactDescriptions[getRandomInt(reactDescriptions.length)];

  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}

//function CoreConcept(props) {
function CoreConcept({concept}) {
  return (
    <li>
      <img src={concept.image} alt={concept.title} />
      <h3>{concept.title}</h3>
      <p>{concept.description}</p>
    </li>
  );
}

function App() {
  // Return statement
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Time to get started!</h2>
          <ul>
            {/* You can do this for the prop  */}
            {/* <CoreConcept
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            /> */}

            {/* You can also do this for the prop, which pulling all the key-value pair  */}
            {/* <CoreConcept {...CORE_CONCEPTS[1]} /> */}

            {/* You can also do this for the prop, which pulling all the key-value pair  */}
            {/* However, the CoreConcept component need to have {} for the argument means JS destructuring object  */}
            <CoreConcept concept={CORE_CONCEPTS[0]} />
            <CoreConcept concept={CORE_CONCEPTS[1]} />
            <CoreConcept concept={CORE_CONCEPTS[2]} />
            <CoreConcept concept={CORE_CONCEPTS[3]} />

          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
