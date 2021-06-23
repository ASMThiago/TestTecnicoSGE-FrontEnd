import React from 'react';
import { useState } from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import LayoutDefault from '../layouts/LayoutDefault';
import Etapa1 from '../components/Etapa1';
import Etapa2 from '../components/Etapa2';
import Etapa3 from '../components/Etapa3';

export default function Forms() {
  const [tabSelected, setTabSelected] = useState(0);

  function handleChange(_, newValue) {
    setTabSelected(newValue);
  }

  function tabNext() {
    setTabSelected((v) => {
      if (v < 2) {
        return v + 1;
      }
      return v;
    });
  }

  return (
    <div>
      <LayoutDefault tabActive={1}>
        <Tabs
          value={tabSelected}
          indicatorColor="primary"
          onChange={handleChange}
          textColor="primary"
          aria-label="disabled tabs example"
        >
          <Tab label="Etapa 1" />
          <Tab label="Etapa 2" />
          <Tab label="Etapa 3" />
        </Tabs>
        {tabSelected === 0 && (
          <Etapa1 />
        )}
        {tabSelected === 1 && (
          <Etapa2 />
        )}
        {tabSelected === 2 && (
          <Etapa3 />
        )}
        <button onClick={tabNext}>avnaçar</button>
        <button>enviar</button>
      </LayoutDefault>
    </div>
  );
}
