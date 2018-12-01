import React from 'react';

class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.stuff = this.props.stuff; 
  }
  
  render() {
    const headers = this.stuff.map((pane) => {
      return (<Header key={pane.id} title={pane.title} />);
    });
    
    return (
      <div className='tabs-module'> 
        <h1>Tabs</h1> 
        <ul>
          {headers}
        </ul>
      </div>
    );
  }
}

class Header extends React.Component {
  render () {
    return (
      <li>{this.props.title}</li>
    );
  }
}


export default Tabs; 