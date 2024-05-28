import React from 'react';
import ReactDOM from 'react-dom/client'

const parent = React.createElement("div",{id:"parent"},React.createElement("div",{id:"child"},React.createElement("h1",{},"I love React js")));


const root= ReactDOM.createRoot(document.getElementById('root'));

console.log(root);
root.render(parent);