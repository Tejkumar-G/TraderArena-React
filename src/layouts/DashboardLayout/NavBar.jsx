import { Avatar, Divider, Typography } from '@mui/material';

const NavBar = () => {
  return (
    <div>
      <div className='flex flex-col items-center justify-center h-fit'>
        <Avatar alt='Person' className='w-14 h-14'>{'vetri'.charAt(0)}</Avatar>
        <Typography variant='h4'>{'vetrivel'}</Typography>
      </div>
      <Divider />
      <nav>
        {['strategies'].map((list) => (
          <h3 key={list}>{list}</h3>
        ))}
      </nav>
    </div>
  );
};

export default NavBar;
