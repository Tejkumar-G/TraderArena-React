import { Card, CardContent, Typography } from '@mui/material';
import "./style.scss";
import { useNavigate } from 'react-router';

const StrategyCard = ({ strategy, handleClick }) => {
  return (
    <Card className='strategy-card' onClick={()=>handleClick(strategy?.id)}>
      <CardContent className='content'>
        <Typography gutterBottom variant='h5' component='div' className='name'>
          {strategy.name}
        </Typography>
        <Typography variant='body2' color='text.secondary' className='description'>
          {strategy.description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default StrategyCard;

// StrategyCard.
