import { Avatar, Typography } from "@mui/material";

const Profile = () => {
  return (
    <div className="flex flex-col items-center min-h-fit">
      <Avatar alt="Person" >
        {"User".charAt(0)}
      </Avatar>
      <Typography sx={{}} variant="h6">
        {"User"}
      </Typography>
    </div>
  );
};

export default Profile;
