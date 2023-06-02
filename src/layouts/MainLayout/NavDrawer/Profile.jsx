import { Avatar, Typography } from "@mui/material";

const Profile = () => {
  return (
    <div className="profile">
      <Avatar alt="Person" sizes='lg'>
        {"User".charAt(0)}
      </Avatar>
      <Typography sx={{}} variant="h6" className='username'>
        {"User"}
      </Typography>
    </div>
  );
};

export default Profile;
