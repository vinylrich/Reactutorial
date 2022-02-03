import React, {Component} from "react";

class Counter extends Component {
   state = {
        number : 0,
        fixedNum : 2
   };


    render() {
        const {number,fixedNum} = this.state;
        return (
            <div>
                <h1>{number}</h1>
                <h2>const value {fixedNum}</h2>
                <button
                    onClick={()=>{
                        this.setState(
                            {
                                number: number+1
                            },
                            //callback 함수
                           () => {
                                console.log("called setstate");
                                console.log(this.state)
                            }
                        )
                    }}>
                    +1
                </button>
            </div>
        );
    }
}

export default Counter;