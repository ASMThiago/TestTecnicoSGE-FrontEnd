import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Link } from 'react-router-dom';

export default function TopMenu({ tabActive }) {
  return (
    <Tabs value={tabActive} indicatorColor="primary" textColor="primary">
      <Link to="/">
        <Tab label="Lista de Gatos" />
      </Link>
      <Link to="/forms">
        <Tab label="Formulário" />
      </Link>
    </Tabs>
  );
}
