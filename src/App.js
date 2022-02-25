import logo from './logo.png';
import './App.css';

// import Greet from './components/Greet';
import Welcome from './components/Welcome';
// import Counter from './components/Counter';
// import FunctionClick from './components/FunctionClick';
// import ClassClick from './components/ClassClick';
// import EventBind from './components/EventBind';
// import ParentComponent from './components/ParentComponent';
// import NameList from './components/NameList';
// import StyleSheet from './components/StyleSheet';
// import InlineStyle from './components/InlineStyle';


import './styles/newStyles.css';
// import Form from './components/Form';
// import LifeCycleA from './components/LifeCycleA';
// import FragmentDemo from './components/FragmentDemo';
import MeetApp from './components/MeetApp';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// const api = new JitsiMeetExternalAPI(domain, options);

// import styles from './styles/newStyle.module.css'
// import Hello from './components/Hello';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/aiv-neet" exact element={ <MeetApp /> }/>
          <Route path="/aiv-neet/thank-you" exact element={ <Welcome />} />
        </Routes>
    </BrowserRouter>

      {/* <h2 className="error">Thank YOu.</h2> */}
      {/* <h2 className={styles.success}>Success</h2> */}
      {/* <Greet></Greet> 
      <Welcome></Welcome> */}
      {/* <Hello></Hello> */}
       {/* <Greet name="ANURAG" heroName="superFly">
        <p>this is child element</p>
      </Greet> */}
      {/*
      <Greet name="AKHIL">
        <button>Action</button>
      </Greet> */}
      {/* <Welcome name="Clark" heroName="Superman"></Welcome> */}

      {/* <FunctionClick></FunctionClick> */}

      {/* <ClassClick></ClassClick> */}
      {/* <Welcome name="Bruce" heroName="Batman"></Welcome> */}

      {/* <Counter></Counter> */}
      <hr></hr>
      {/* <EventBind></EventBind> */}

      {/* <ParentComponent></ParentComponent> */}

      {/* <NameList></NameList>

      <StyleSheet primary={true}></StyleSheet>

      <hr></hr> */}
      {/* <Form></Form> */}
      {/* <InlineStyle></InlineStyle> */}
      {/* <LifeCycleA></LifeCycleA> */}
      {/* <FragmentDemo></FragmentDemo> */}
    </div>
  );
}

export default App;
