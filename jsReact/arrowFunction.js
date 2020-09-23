// Arrow functions
// binds 'this' to the function
//

const five = () => 5;
const addFive = (a) => a + 5;
const divide = (a, b) => a / b;

function getFive() {
    return 5
}

function addfive(a) {
    return a + 5
}

function divideNum(a, b) {
    return a/b
}

//in React
function TeddyBearList({ teddyBears }) {
    return (
        <ul>
            {teddyBears.map(tBear => (
                <li key={tBear.id}>
                    <span>{tBear.name}</span>
                </li>
             )}
        </ul>
    )
}