//Só pode retornar um elemento JSX, um elemento pai, ou seja, um elemento que envolva os outros elementos. Ex: <div></div>, <main></main>, <section></section>, etc.
//O nome do componente deve começar com letra maiúscula, para o React entender que é um componente e não uma tag HTML.
//É necessário conter uma div, pois o jsx te força a usar, mas podemos usar uma div vazia, ou seja, sem classe ou id, para envolver os outros elementos. Ex: <div></div>.

import './styles/theme.css'
import './styles/global.css'

import { Container } from './components/Container';
import { Logo } from './components/Logo';
import { Menu } from './components/Menu';
import { CountDown } from './components/Count';
import { DefaultInput } from './components/DefaultInput';

export function App() {
  return (
    <>
      <Container>
        <Logo />
      </Container>

      <Container>
        <Menu />
      </Container>

      <Container>
        <CountDown />
      </Container>

      <Container>
        <form className='form' action="">
          <div className='formRow'>
            <DefaultInput labelText="Demanda" id="meuInput" type='text'/>
          </div>

          <div className='formRow'>
            <p> Lorem ipsum dolor sit amet.</p>
          </div>

          <div className='formRow'>
            <p>Ciclos</p>
            <p>0 0 0 0 0 0 0</p>
          </div>

          <div className='formRow'>
            <button type='submit'>Enviar</button>
          </div>
        </form>
      </Container>
    </>
  );
}