import './header.scss';

export const Header = () => {
  return (
    <header className='controle'>
      <h1 className='titulo'>Controle de estoque</h1>
      <button className='adicionar' id='adicionar-produto'>
        +
      </button>
      <input className='busca' id='busca' type='search' />
    </header>
  );
};
