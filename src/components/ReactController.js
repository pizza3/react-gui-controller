import React,{Component} from 'react';


class ReactController extends Component{
    constructor(props){
        super(props);
        this.state={

        }
    }

    render(){
        let style={
            "position":"fixed",
            "width":"300px",
            "height":"100vh",
            "background":"#000"
        }
        return(
            <div id='controller-body' style={style}></div>
        )
    }
}

export default ReactController;