
import './App.css';
import ProcessStage from './compornent/ProcessStage';

function App() {
  return (<div className='a'>
    <ProcessStage columnName='Todo' className='ps' />
    <ProcessStage columnName='Done' className='ps' />
  </div>
  );
}

export default App;
