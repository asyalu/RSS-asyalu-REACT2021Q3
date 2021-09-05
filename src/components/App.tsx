import React, { useState } from 'react';
import '../styles/App.scss';
import shortid from 'shortid';
import Card from './Card';
import Form from './Form';

const App = (): JSX.Element => {
  const [formValues, setFormValues] = useState([]);

  return (
    <main className="main">
      <Form setFormValues={setFormValues} />
      <div className="main__cards-wrapper">
        {formValues.map((el) => (
          <Card data={el} key={shortid.generate()} />
        ))}
      </div>
    </main>
  );
};

export default App;
