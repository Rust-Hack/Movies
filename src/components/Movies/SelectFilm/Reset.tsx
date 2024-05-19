import './Reset.css';

interface ResetProps {
    onReset: () => void;
    onGenreReset: () => void;
    onYearReset: () => void;
}

const Reset: React.FC<ResetProps> = ({ onReset, onGenreReset, onYearReset }) => {
  const reset = () => {
    onReset();
    onGenreReset();
    onYearReset();
  };

  return (
    <div className='resetBlock'>
      <button className='reset' onClick={reset}>Reset filters</button>
    </div>
  );
};

export default Reset;
