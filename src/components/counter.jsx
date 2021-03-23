import React, { Component } from 'react';
class Counter extends Component {
    state = {  
        count:0,
        imgUrl:'https://picsum/photos/200',
        tags:['tag1','tag2','tag3','tag4','tag5']
    }
    //Use this approach in the future if the alternative breaks in the future, for now we use arrow function to bind this to an event
   /** constructor(){
        super();
        this.handleIncrement=this.handleIncrement.bind(this);
    }
    **/
    Increment=()=>{
        const value=this.state.count;
        value++;
        this.setState({value});
    }
    styles={
        fontSize:20,
        fontWeight:"bold"
    }
    renderTags(){
        if(this.state.tags===0)  return <p>No Tag Found</p>;
        return <ul> {this.state.tags.map(tag=><li key={tag}>{tag}</li>)}</ul>;
    }
    handleIncrement=product=>{
        console.log(product);
        this.setState({count:this.state.count + 1})   
    }
  /**  doHandleIncrement=()=>{
        this.handleIncrement({id:1});
    }
    **/
    render() { 
        
        return(
            <React.Fragment>
                <img src={this.state.imgUrl} alt="" />
                <span className={this.getBadgeClasses()}>{this.FormatCount()}</span>
                <button onClick={()=>this.handleIncrement(product)} className="btn btn-secondary btn-sm">Increment</button>
                <div>{this.renderTags()}</div>
            </React.Fragment>
        );

    }
    getBadgeClasses(){
        let classes = "badge m-2 badge-";
        classes +=this.state.count ===0 ? "warning":"primary";
        return classes;
    }
    FormatCount(){
        const{count}=this.state;
        return count===0 ? "Zero": count;
    }
    
}
 
export default Counter;