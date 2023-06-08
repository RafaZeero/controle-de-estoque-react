import { ReactNode } from 'react';

type TableProps = {
  children: ReactNode;
};

export const Table = ({ children }: TableProps) => {
  return (
    <table className='conteudo' id='conteudo'>
      <thead className='topico'>
        <tr>
          <th>Id</th>
          <th>Nome</th>
          <th>Marca</th>
          <th>Qtd</th>
          <th>Opções</th>
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </table>
  );
};
