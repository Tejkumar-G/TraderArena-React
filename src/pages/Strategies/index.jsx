import StrategyCard from './StrategyCard';
import './style.scss';

const strategies = [
  {
    name: 'strategy 1',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit non dolore obcaecati quisquam natus, aliquam voluptatem, perspiciatis fugiat saepe ipsa sunt, culpa illo reprehenderit inventore iusto optio pariatur ex commodi?',
  },
  {
    name: 'strategy 2',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit non dolore obcaecati quisquam natus, aliquam voluptatem, perspiciatis fugiat saepe ipsa sunt, culpa illo reprehenderit inventore iusto optio pariatur ex commodi?',
  },
  {
    name: 'strategy 3',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit non dolore obcaecati quisquam natus, aliquam voluptatem, perspiciatis fugiat saepe ipsa sunt, culpa illo reprehenderit inventore iusto optio pariatur ex commodi?',
  },
  {
    name: 'strategy 4',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit non dolore obcaecati quisquam natus, aliquam voluptatem, perspiciatis fugiat saepe ipsa sunt, culpa illo reprehenderit inventore iusto optio pariatur ex commodi?',
  },
];

const Strategies = () => {
  return (
    <div className='strategy-container'>
      {strategies.map((item) => (
        <StrategyCard key={item.name} strategy={item} />
      ))}
    </div>
  );
};

export default Strategies;
