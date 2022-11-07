import { createRoot } from 'react-dom/client';


import './index.css';
import MojeApp from './App';


const container = document.getElementById('result');
const root = createRoot(container); // 

root.render(<MojeApp tab="home" />);
