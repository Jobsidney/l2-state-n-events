import React from "react";

export class CountDown extends React.Component{

    constructor(props){
        super(props)
        this.state= {countDown: 100}
    }
    componentDidMount(){ this.update()}

    update(){
        let currentCOunt=this.state.countDown=1;
        setInterval(() => this.setState({countDown: currentCOunt-1}),1000)}
        

        
        



    render(){
        return(
            <div>
                <center>
                    <h4 className="time-text">{this.state.countDown}</h4>
                </center>
            </div>
        )
    }

}