import "./profile-card.css";
// import "./profile-card dark.css";

const ProfileCard = (props) => {
  const { name, email, id } = props.member;
  let firstLetter = name.split(" ")[0].split("").slice(0, 1);
  let lasttLetter = name.split(" ")[1].split("").slice(0, 1);
  return (
    <div className="individual-profile-card-div" key={id}>
      <div className="avatar-div">
        <p className="initials">{firstLetter + lasttLetter}</p>
      </div>
      <div className="name-and-details-div">
        <h4 className="name-div" key={id}>
          {name}
        </h4>
        <p className="details-div">{email}</p>
      </div>
    </div>
  );
};

export default ProfileCard;
