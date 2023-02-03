import { useState, useEffect } from "react";
import "./App.css";
// import "./App dark.css";

import SearchBox from "./components/search-box/search-box.component";

import ProfileCardList from "./components/profile-card-list/profile-card-list.component";

import SideBar from "./components/side-bar/side-bar.component";

function App() {
  const [searchField, setSearchField] = useState("");
  const [members, setMembers] = useState([]);
  const [filteredMembers, setfilteredMembers] = useState(members);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setMembers(users));
  }, []);

  useEffect(() => {
    const newfilteredMembers = members.filter((member) => {
      return member.name.toLowerCase().includes(searchField);
    });
    setfilteredMembers(newfilteredMembers);
  }, [members, searchField]);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLowerCase();
    setSearchField(searchFieldString);
  };

  return (
    <div className="App">
      <div className="sidebar">
        <SideBar />
      </div>
      <div className="header-div">
        <h1>Team Members</h1>
        <SearchBox onChangeHandler={onSearchChange} />
      </div>

      <ProfileCardList members={filteredMembers} />
      <div className="footer-div">
        <div className="light-and-dark-toggle">
          <ion-icon name="sunny-outline"></ion-icon>
          <button href="#" id="toggle-sidebar-button">
            <span id="side-menu-text">Light Mode</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
