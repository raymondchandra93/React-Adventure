import { CORE_CONCEPTS } from '../data';
import CoreConcept from './CoreConcept';

function CoreConcepts() {
    return (
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

                {CORE_CONCEPTS.map((conceptItem, index) => (
                    <CoreConcept key={index} concept={conceptItem} />
                ))}
            </ul>
        </section>
    )
}

export default CoreConcepts;