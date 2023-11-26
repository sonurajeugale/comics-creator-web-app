import React from 'react';
import './App.css';
import ComicForm from './ComicForm';
//Hello Sir, My name is Prathamesh Ugale and I am from Indian Institute of Technology, due to time constraints I was not able to registerd in our system for your company, but i have done my assigned which were assigned to us, please considered my this request, to be part of next process of placement for your company.
// App: The main component of the Comic Creator Web App.
function App() {
  return (
    <div className="app-container">
      {/* Header section with the application title */}
      <header className="app-header">
        <h1>Comic Creator Web App</h1>
      </header>
      {/* ComicForm component where the main functionality of the app is located */}
      <ComicForm />
    </div>
  );
}

export default App;
