

export default function HelloWorld() {
    return <div id="hello-world">
        <h1>Hello World</h1>
        <button>
            clicked 1
        </button>
        <Greetings/>
    </div>
}
export function HiWorld() {
    return <div id="hello-world">
        Hii
        <input type="text" id="hello-world-2"/>
    </div>
}

 function Greetings(){
    return <div id="greetings">
        Greetings
    </div>
}