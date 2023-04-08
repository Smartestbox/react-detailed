import React, {useEffect, useState} from 'react';

// const UseEffect = () => {
//
//     const [counter, setCounter] = useState(1)
//     const [fake, setFake] = useState(1)
//
//     console.log('UseEffect component')
//
//     useEffect(() => {
//         console.log('useEffect every render')
//         document.title = counter.toString()
//     })
//
//     useEffect(() => {
//         console.log('useEffect only first render ( componentDidMount)')
//         document.title = counter.toString()
//     }, [])
//
//     useEffect(() => {
//         console.log('useEffect first render and after counter change')
//         document.title = counter.toString()
//     }, [counter])
//
//     return (
//         <div>
//             <div>
//                 <span>Counter: {counter} </span>
//                 <button onClick={() => setCounter(counter + 1)}>Counter+</button>
//             </div>
//             <div>
//                 <span>FakeCounter: {fake} </span>
//                 <button onClick={() => setFake(fake + 1)}>Fake+</button>
//             </div>
//         </div>
//     );
// };
const UseEffect = () => {

    const [counter, setCounter] = useState(new Date().toLocaleTimeString())
    const [fake, setFake] = useState(1)

    // console.log('UseEffect component counter: ' + counter)



    useEffect(() => {
        setInterval(() => {
            setCounter(new Date().toLocaleTimeString())
        }, 1000)
    }, [])



    return (
        <div>
            <div>
                <span>Counter: {counter} </span>
                {/*<button onClick={() => setCounter(counter + 1)}>Counter+</button>*/}
            </div>
            <div>
                {/*<span>FakeCounter: {fake} </span>*/}
                {/*<button onClick={() => setFake(fake + 1)}>Fake+</button>*/}
            </div>
        </div>
    );
};

export default UseEffect;