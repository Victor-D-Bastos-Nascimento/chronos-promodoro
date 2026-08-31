import { PlayCircleIcon} from 'lucide-react';
import { Cycles } from '../Cycles';
import { DefaultInput } from '../DefaultInput';
import { DefaultButton } from '../DefaultInput button';
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';

export function MainForm() {
  const {setState} = useTaskContext();
  function handleClick() {
    setState((prevState) => {
      return {
        ...prevState,
        formatedSecondsRemaining: '25:00',
      };
    })
  }
  return (
    <form className='form' action=''>
      <button  onClick={handleClick} type='button'>
        Clicar
      </button>
      <div className='formRow'>
        <DefaultInput
          labelText='task'
          id='meuInput'
          type='text'
          placeholder='Digite algo'
        />
      </div>

      <div className='formRow'>
        <p>Próximo intervalo é de 25 minutos</p>
      </div>

      <div className='formRow'>
        <Cycles />
      </div>

      <div className='formRow'>
        <DefaultButton icon={<PlayCircleIcon />} />
      </div>
    </form>
  );
}