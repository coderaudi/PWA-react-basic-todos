import React, { Component } from 'react';

class App extends Component {

  constructor(props) {
    super(props);

    this.state={
      todos : null,
      todoLoading : false,
    }
    
  }
  


  getTodos = () => {

    let url = "https://jsonplaceholder.typicode.com/todos";
    this.setState({ todoLoading : true , todos : null});
    
     setTimeout(() => {
      fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        data = data && data.slice(0, 10);
        this.setState( { todos : data , todoLoading : false });
      })
     }, 2000);


  }

  render() {
    return (
      <div style={{ padding : "50px" }} className="base-container">

        <h1>PWA - reactjs-todo's </h1>

        <button onClick={() => this.getTodos()}>Get Todos</button>



        {this.state.todoLoading && <h2>Loading...... todo's API </h2>}


        {
          this.state.todos && this.state.todos.map( (e , i)=>{
          return <h4 key={i}>{i+1}. {e.title}</h4>
          })
        }

      </div>
    );
  }
}

export default App;