import React, { useState, useEffect } from 'react';

// eslint-disable-next-line no-unused-vars
function useStateExemple() {
  const [tech, setTech] = useState(['React', 'Node']);
  const [newTech, setNewTech] = useState('');

  // function handleAdd() {
  //   setTech([...tech, 'NodeJS']);
  // }

  function handleAdd() {
    setTech([...tech, newTech]);
  }

  return (
    <>
      <ul>
        {tech.map(t => (
          <li key={t}>{t}</li>
        ))}
      </ul>

      {/* e.target.value é o valor digitado no input */}
      <input value={newTech} onChange={e => setNewTech(e.target.value)} />

      <button type="button" onClick={handleAdd}>
        Adicionar
      </button>
    </>
  );
}

// eslint-disable-next-line no-unused-vars
function useEffectExemple() {
  const [tech, setTech] = useState([]);
  const [newTech, setNewTech] = useState('');

  function handleAdd() {
    setTech([...tech, newTech]);

    // reseta o valor do input
    setNewTech('');
  }

  /*
    COMPONENTDIDMOUNT
  */
  useEffect(() => {
    const storageTech = localStorage.getItem('tech');

    if (storageTech) {
      setTech(JSON.parse(storageTech));
    }

    /*
      COMPONENTDIDUNMOUNT
    */
    // return () => {
    //  document.removeEventListener();
    // }; => PARA EVENT LISTNER
  }, []);

  /*
    COMPONENTDIDUPDATE
  */
  // primeiro parâmetro é a função que será executada
  // o segundo parâmetro é quando ela vai ser executada (array de dependências)
  useEffect(() => {
    localStorage.setItem('tech', JSON.stringify(tech));
  }, [tech]);

  return (
    <>
      <ul>
        {tech.map(t => (
          <li key={t}>{t}</li>
        ))}
      </ul>

      <input value={newTech} onChange={e => setNewTech(e.target.value)} />
      
      <button type="button" onClick={handleAdd}>
        Adicionar
      </button>
    </>
  );
}

export default useEffectExemple;
