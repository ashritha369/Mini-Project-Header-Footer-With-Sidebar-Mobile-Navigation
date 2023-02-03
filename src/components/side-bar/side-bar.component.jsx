import "./side-bar.css";
// import "./side-bar dark.css";

const SideBar = () => {
  const nav = document.querySelectorAll(".nav");

  function openButton() {
    const nav = document.querySelectorAll(".nav");
    console.log("open button clicked");
    return nav.forEach((nav_el) => nav_el.classList.add("visible"));
  }

  function closeButton() {
    const nav = document.querySelectorAll(".nav");
    console.log("close button clicked");
    return nav.forEach((nav_el) => nav_el.classList.remove("visible"));
  }

  return (
    <div>
      <div className="nav nav-white">
        <button className="nav-btn close-btn" onClick={closeButton}>
          <ion-icon name="close-circle-outline"></ion-icon>
        </button>
        <ul className="list">
          <li className="team-members-sidebar-button">
            <a href="#" id="team-members-sidebar-button">
              <ion-icon name="people-outline"></ion-icon>
              <span className="side-menu-text">Team Members</span>
            </a>
          </li>
          <li>
            <a href="#">
              <ion-icon name="cube-outline"></ion-icon>Products
            </a>
          </li>
          <li>
            <a href="#">
              <ion-icon name="mail-open-outline"></ion-icon>Inbox
            </a>
          </li>
        </ul>
      </div>
      <button className="nav-btn open-btn" onClick={openButton}>
        <i className="fas fa-bars"></i>
      </button>
    </div>
  );
};
export default SideBar;
