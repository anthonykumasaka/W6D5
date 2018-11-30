import React from 'react';

class Clock extends React.Component {
  constructor(props){
    super(props);
    
    this.state = {
      time: new Date()
    };
  }
  
  tick() {
    this.setState({time: new Date()});
  }
  
  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }
  
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  
  render() {
    return (
      <div className='clock-module'>
        <h1 className='clock'>Clock</h1>
        <h2 className='time'>Time: {this.state.time.getHours()}:{this.state.time.getMinutes()}:{this.state.time.getSeconds()} PDT</h2>
      </div>
    );
  }
}

export default Clock;