export const Form = () => {
  return (
    <form className='cadastro' id='cadastro'>
      <input className='cadastro-campo' type='text' name='nome' placeholder='Nome do produto' />
      <input className='cadastro-campo' type='text' name='marca' placeholder='Marca' />
      <input className='cadastro-campo' type='number' name='qtd' placeholder='Quantidade' />
      <button className='cadastro-envio' type='submit' id='submit'>
        Cadastrar
      </button>
    </form>
  );
};
