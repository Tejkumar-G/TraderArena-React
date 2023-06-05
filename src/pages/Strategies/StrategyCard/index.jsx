import { Card, CardContent, Typography } from '@mui/material';

const StrategyCard = ({ strategy }) => {
  return (
    <Card className='strategy-card'>
      <CardContent>
        <Typography gutterBottom variant='h5' component='div'>
          {strategy.name}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          {strategy.desc}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default StrategyCard;

// StrategyCard.
