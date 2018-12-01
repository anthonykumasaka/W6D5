import React from 'react';
import Clock from './clock';
import Tabs from './tabs';

const panes = [
  {id: "1", title: 'one', content: 'I am the first'},
  {id: "2", title: 'two', content: 'Second pane here'},
  {id: "3", title: 'three', content: 'Third pane here'}
];

const Root = () => (
  <div>
    <Clock />
    <Tabs stuff={panes}/>
  </div>
);


export default Root;