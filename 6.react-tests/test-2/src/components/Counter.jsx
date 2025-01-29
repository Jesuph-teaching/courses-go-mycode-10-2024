import React from 'react';
export default class Counter extends React.Component {
    constructor() {
        super();
        this.state = {
            count: 0,
        }
    }
    render() {
        return(
            <div>
                <button onClick={()=>{
                    this.setState({count:this.state.count+1});
                }}>
                    Current count : {this.state.count}
                </button>
            </div>
        )
    }
}