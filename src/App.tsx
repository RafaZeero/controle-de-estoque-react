import { Fragment } from 'react';
import './App.scss';
import { Header } from './components/header';
import { Form } from './components/form';
import { Table } from './components/table';

function App() {
  return (
    <Fragment>
      <Header />
      <main>
        <Form />
        <Table>
          <p>AAAAAAAa</p>
          <p>AAAAAAAa</p>
          <p>AAAAAAAa</p>
          <p>AAAAAAAa</p>
        </Table>
      </main>
    </Fragment>
  );
}

export default App;
