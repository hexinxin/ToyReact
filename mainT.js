import {createElement,Component,render} from "./toy-react"
class MyComponent extends Component{
    constructor() {
        super();
        this.state={
            a: 1111,
            b:222
        }
    }
    render(){
        return  <div>
            <h1>my component</h1>
            <button onClick={() => { /*this.state.a++ ; this.rerender()*/ this.setState({a:this.state.a+1})}}>add</button>
            <p>{this.state.a.toString()}</p>
            <p>{this.state.b.toString()}</p>
            {this.child}
        </div>
    }
}

render(<MyComponent id='a' class='b'>
    <div>123456</div>
    <div></div>
    <div></div>
</MyComponent>,document.body)