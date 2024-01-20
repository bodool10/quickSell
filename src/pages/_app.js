import React, { useState, useEffect } from 'react';
import "@/styles/globals.css";
import BoardSection from '@/pages/BoardSection';

function App() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [fieldName, setFieldName] = useState('Status');
  const [sortName, setSortName] = useState('');
  const tickets =  [{"id":"CAM-1","title":"Update User Profile Page UI","tag":["Feature request"],"userId":"usr-1","status":"Todo","priority":4},{"id":"CAM-2","title":"Add Multi-Language Support - Enable multi-language support within the application.","tag":["Feature Request"],"userId":"usr-2","status":"In progress","priority":3},{"id":"CAM-3","title":"Optimize Database Queries for Performance","tag":["Feature Request"],"userId":"usr-2","status":"In progress","priority":1},{"id":"CAM-4","title":"Implement Email Notification System","tag":["Feature Request"],"userId":"usr-1","status":"In progress","priority":3},{"id":"CAM-5","title":"Enhance Search Functionality","tag":["Feature Request"],"userId":"usr-5","status":"In progress","priority":0},{"id":"CAM-6","title":"Third-Party Payment Gateway","tag":["Feature Request"],"userId":"usr-2","status":"Todo","priority":1},{"id":"CAM-7","title":"Create Onboarding Tutorial for New Users","tag":["Feature Request"],"userId":"usr-1","status":"Backlog","priority":2},{"id":"CAM-8","title":"Implement Role-Based Access Control (RBAC)","tag":["Feature Request"],"userId":"usr-3","status":"In progress","priority":3},{"id":"CAM-9","title":"Upgrade Server Infrastructure","tag":["Feature Request"],"userId":"usr-5","status":"Todo","priority":2},{"id":"CAM-10","title":"Conduct Security Vulnerability Assessment","tag":["Feature Request"],"userId":"usr-4","status":"Backlog","priority":1}]
  const users = [{"id":"usr-1","name":"Anoop sharma","available":false},{"id":"usr-2","name":"Yogesh","available":true},{"id":"usr-3","name":"Shankar Kumar","available":true},{"id":"usr-4","name":"Ramesh","available":true},{"id":"usr-5","name":"Suresh","available":true}];
    let todo = [], inProgress = [], backlog = [];
    let anoop = [], yogesh = [], shankar = [], ramesh = [], suresh = [];
    let p0 = [], p1 = [], p2 = [], p3 = [], p4 = [];

    todo = tickets.filter((ticket) => ticket.status === 'Todo');
    inProgress = tickets.filter((ticket) => ticket.status === 'In progress');
    backlog = tickets.filter((ticket) => ticket.status === 'Backlog');

    anoop = tickets.filter((ticket) => ticket.userId === 'usr-1');
    yogesh = tickets.filter((ticket) => ticket.userId === 'usr-2');
    shankar = tickets.filter((ticket) => ticket.userId === 'usr-3');
    ramesh = tickets.filter((ticket) => ticket.userId === 'usr-4');
    suresh = tickets.filter((ticket) => ticket.userId === 'usr-5');

    p0 = tickets.filter((ticket) => ticket.priority === 0);
    p1 = tickets.filter((ticket) => ticket.priority === 1);
    p2 = tickets.filter((ticket) => ticket.priority === 2);
    p3 = tickets.filter((ticket) => ticket.priority === 3);
    p4 = tickets.filter((ticket) => ticket.priority === 4);



  return (
  <>
  <header className="header">
        <div className="dropdown" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
          <button className="dropbtn">
            <i className="fas fa-bars"></i> Display
            <i className="fas fa-caret-down"></i>
          </button>
          {isDropdownOpen && (
            <div className="dropdown-content">
              <a href="#grouping">Grouping</a>
                <button className="fas fa-bars" onClick={() => setFieldName("Status")}>Status <i className="fas fa-caret-down"></i></button>
                <button className="fas fa-bars" onClick={() => setFieldName("User")}>User <i className="fas fa-caret-down"></i></button>
                <button className="fas fa-bars" onClick={() => setFieldName("Priority")}>Priority <i className="fas fa-caret-down"></i></button>
              <a href="#ordering">Ordering</a>
                <button className="fas fa-bars" onClick={() => setSortName("Priority")}>Priority <i className="fas fa-caret-down"></i></button>
            </div>
          )}
        </div>
     </header>
    <div className="main-layout">
         {fieldName === 'Status' && <> <BoardSection title={"Todo"} tasks={todo} />  <BoardSection title={"In Progress"} tasks={inProgress} />  <BoardSection title={"Backlog"} tasks={backlog} /> </>}
         {fieldName === 'User' && <> <BoardSection title={"Anoop sharma"} tasks={anoop} /> <BoardSection title={"Yogesh"} tasks={yogesh} /> <BoardSection title={'Shankar Kumar'} tasks={shankar} /> <BoardSection title={"Ramesh"} tasks={ramesh} /> <BoardSection title={"Suresh"} tasks={suresh} /></>}
         {fieldName === 'Priority' && sortName !== 'Priority' && <> <BoardSection title={"No priority"} tasks={p0} /> <BoardSection title={"Low"} tasks={p1} /> <BoardSection title={"Medium"} tasks={p2} /> <BoardSection title={"High"} tasks={p3} /> <BoardSection title={"Urgent"} tasks={p4} /></>}
         {fieldName === 'Priority' && sortName === 'Priority' &&<> <BoardSection title={"Urgent"} tasks={p4} /> <BoardSection title={"High"} tasks={p3} /> <BoardSection title={"Medium"} tasks={p2} /> <BoardSection title={"Low"} tasks={p1} /> <BoardSection title={"No priority"} tasks={p0} /> </>}
        </div>
    </>
  );

  }

export default App;

