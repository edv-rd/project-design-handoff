import React from 'react'
import './index.css'
import * as ReactDOMClient from 'react-dom/client';
import { App } from './App'

const container = document.getElementById('root');

// Create a root.
const root = ReactDOMClient.createRoot(container);

// Initial render: Render an element to the root.
root.render(<App tab="home" />);
