import { Avatar, Typography } from "@mui/material";
import { useSelector } from "react-redux";

const Profile = () => {
  const { first_name,last_name } = useSelector((state) => state.user.userDetails);
  return (
    <div className="profile">
      <Avatar alt="Person" sizes="lg">
        {first_name?.charAt(0)}
      </Avatar>
      <Typography sx={{}} variant="h6" className="username">
        {`${first_name} ${last_name}`}
      </Typography>
    </div>
  );
};

export default Profile;
