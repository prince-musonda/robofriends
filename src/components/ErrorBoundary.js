import React from "react";

class ErrorBoundary extends React.Component{
    constructor(props){
        super(props);
        this.state = {theyIsError: false}
    }
    componentDidCatch(error,info){
        this.setState({theyIsError:true})
    }
    render(){
        if(this.state.theyIsError === true){
            return <h1 className="tc pa5 bodoni bg-dark-red black" >Oops. something   went   Wrong!</h1>
        }else{
            return(
                <div>
                    {this.props.children}
                </div>
            )
        }
    }
}

export default ErrorBoundary