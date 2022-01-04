import { useState } from 'react';
import './App.css';
import Home from './components/Home';
import ToolInput from './components/ToolInput';
import ToolKit from './components/ToolKit';
import WorkSpace from './components/WorkSpace';

function App() {
  const [currentTool, setCurrentTool] = useState(null);
  return (
    <div className="App">
      <ToolKit setCurrentTool={setCurrentTool} />
      {currentTool ? <WorkSpace Component={<ToolInput tool={currentTool} />}/> : <WorkSpace Component={<Home />}/> }
    </div>
  );
}

export default App;
