import {createElement,Component,render} from "./toy-react"
class MyComponent extends Component{
    render(){
        return  <div>
            <h1>my component</h1>
            {this.child}
        </div>
    }
}

render(<MyComponent id='a' class='b'>
    <div>123456</div>
    <div></div>
    <div></div>
</MyComponent>,document.body)