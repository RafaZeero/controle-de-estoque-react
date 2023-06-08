export const Produto = (produto: any) => {
  return (
    <>
      <td className='produto-id'>${produto.id}</td>
      <td className='produto-nome'>${produto.nome}</td>
      <td className='produto-marca'>${produto.marca}</td>
      <td className='produto-qtd'>${produto.qtd}</td>
      <td>
        <button className='editar-item'>Editar</button>
        <button className='remover-item'>Remover item</button>
      </td>
    </>
  );
};
