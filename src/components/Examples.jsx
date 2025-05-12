import { useState } from 'react';                   // Anything prefix with the keyword use, it is a React Hook
import { EXAMPLES } from '../data.js';
import TabButton from './TabButton';

function Examples() {
    // Using useState
    const [selectedTopic, setSelectedTopic] = useState();

    // Inner function for prop - not used anymore since I am using useState
    /**
     function handleClick(text) {
      setSelectedTopic(text);
    }
    */

    // Selected topic
    let tabContent = <p>Please select a topic</p>;
    if (selectedTopic) {
        tabContent = (
            <div id="tab-content">
                <h3>{EXAMPLES[selectedTopic].title}</h3>
                <p>{EXAMPLES[selectedTopic].description}</p>
                <pre>
                    <code>{EXAMPLES[selectedTopic].code}</code>
                </pre>
            </div>
        );
    }

    return (
        <section id="examples">
            <h2>Examples</h2>
            <menu>
                {/** You can just call handleClick or using () => handleClick(args) if you want to pass argument */}
                <TabButton isSelected={selectedTopic === 'components'} onClick={() => setSelectedTopic("components")}>Components</TabButton>
                <TabButton isSelected={selectedTopic === 'jsx'} onClick={() => setSelectedTopic("jsx")}>JSX</TabButton>
                <TabButton isSelected={selectedTopic === 'props'} onClick={() => setSelectedTopic("props")}>Props</TabButton>
                <TabButton isSelected={selectedTopic === 'state'} onClick={() => setSelectedTopic("state")}>State</TabButton>
            </menu>
            {tabContent}
        </section>
    )
}

export default Examples;