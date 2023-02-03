import "./profile-card-list.css";
// import "./profile-card-list dark.css";
import ProfileCard from "../profile-card/profile-card.component";

const ProfileCardList = (props) => {
  const { members } = props;
  return (
    <div className="list-of-profile-cards">
      {members.map((member) => {
        return <ProfileCard member={member} />;
      })}
    </div>
  );
};
export default ProfileCardList;
