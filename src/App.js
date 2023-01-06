
import './App.css';
import ProcessStage from './compornent/ProcessStage';



function App() {
  return (<div className='container'>
    <ProcessStage columnName='Todo' className='ps' taskName="Develop login page" />
    <ProcessStage columnName='Done' className='ps' />
  </div>
  );
}

export default App;
