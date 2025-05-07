import { useState } from 'react';                   // Anything prefix with the keyword use, it is a React Hook
import { CORE_CONCEPTS, EXAMPLES } from './data';
import Header from './components/Header/Header';
import CoreConcept from './components/CoreConcept';
import TabButton from './components/TabButton';

function App() {
  // Using useState
  const [selectedTopic, setSelectedTopic] = useState("components");

  // Inner function for prop - not used anymore since I am using useState
  /**
  function handleClick(text) {
    setSelectedTopic(text);
  }
  */

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
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            {/** You can just call handleClick or using () => handleClick(args) if you want to pass argument */}
            <TabButton onClick={() => setSelectedTopic("components")}>Components</TabButton>
            <TabButton onClick={() => setSelectedTopic("jsx")}>JSX</TabButton>
            <TabButton onClick={() => setSelectedTopic("props")}>Props</TabButton>
            <TabButton onClick={() => setSelectedTopic("state")}>State</TabButton>
          </menu>
          <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>{EXAMPLES[selectedTopic].code}</code>
            </pre>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
