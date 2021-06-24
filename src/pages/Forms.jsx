import React from 'react';
import { useState, useEffect } from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import LayoutDefault from '../layouts/LayoutDefault';
import Etapa1 from '../components/Etapa1';
import Etapa2 from '../components/Etapa2';
import Etapa3 from '../components/Etapa3';
import {
  emailValidation,
  passwordValidation,
  nameValidation,
  isPasswordValid,
  cepValidation,
} from '../utils/validations';

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

export default function Forms() {
  const [tabSelected, setTabSelected] = useState(0);
  const [form, setForm] = useState({
    email: '',
    password: '',
    confirm: '',
    name: '',
    lastName: '',
    data: '',
    estado: '',
    cep: '',
    rua: '',
    bairro: '',
    numero: '',
  });
  const classes = useStyles();
  const [errors, setErrors] = useState({});
  const [open, setOpen] = useState(false);
  const [modalStyle] = useState(getModalStyle);

  useEffect(() => {
    validations()
  }, [form])


  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function handleChange(_, newValue) {
    setTabSelected(newValue);
  }

  function handleChangeEmail(e) {
    setForm({
      ...form,
      email: e.target.value,
    });
    validations();
  }

  function handleChangePassword(e) {
    setForm({
      ...form,
      password: e.target.value,
    });
    validations();
  }

  function handleChangeConfirm(e) {
    setForm({
      ...form,
      confirm: e.target.value,
    });
  }

  function handleChangeName(e) {
    setForm({
      ...form,
      name: e.target.value,
    });
  }

  function handleChangeLastName(e) {
    setForm({
      ...form,
      lastName: e.target.value,
    });
  }

  function handleChangeDate(e) {
    setForm({
      ...form,
      data: e.target.value,
    });
  }

  function handleChangeEstados(e) {
    setForm({
      ...form,
      estado: e.target.value,
    });
  }

  function handleChangeCep(e) {
    setForm({
      ...form,
      cep: e.target.value,
    });
  }

  function handleChangeRua(e) {
    setForm({
      ...form,
      rua: e.target.value,
    });
  }

  function handleChangeBairro(e) {
    setForm({
      ...form,
      bairro: e.target.value,
    });
  }

  function handleChangeNumero(e) {
    setForm({
      ...form,
      numero: e.target.value,
    });
  }

  function tabNext() {
    setTabSelected((v) => {
      if (v < 2) {
        return v + 1;
      }
      return v;
    });
  }

  function validations() {
    const detected = {};
    if (!emailValidation(form.email)) {
      detected['email'] = true;
    }
    if (!passwordValidation(form.password)) {
      detected['password'] = true;
    }
    if (!isPasswordValid(form.password, form.confirm)) {
      detected['confirm'] = true;
    }
    if (!nameValidation(form.name)) {
      detected['name'] = true;
    }
    if (!nameValidation(form.lastName)) {
      detected['lastName'] = true;
    }
    if (!cepValidation(form.cep)) {
      detected['cep'] = true;
    }
    setErrors(detected);
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
          <Etapa1
            email={form.email}
            password={form.password}
            confirm={form.confirm}
            errors={errors}
            setEmail={handleChangeEmail}
            setPassword={handleChangePassword}
            setConfirm={handleChangeConfirm}
          />
        )}
        {tabSelected === 1 && (
          <Etapa2
            name={form.name}
            lastName={form.lastName}
            data={form.data}
            errors={errors}
            setName={handleChangeName}
            setLastName={handleChangeLastName}
            setData={handleChangeDate}
          />
        )}
        {tabSelected === 2 && (
          <Etapa3
            estado={form.estado}
            cep={form.cep}
            rua={form.rua}
            bairro={form.bairro}
            numero={form.numero}
            errors={errors}
            setEstado={handleChangeEstados}
            setCep={handleChangeCep}
            setRua={handleChangeRua}
            setBairro={handleChangeBairro}
            setNumero={handleChangeNumero}
          />
        )}
        <Button variant="contained" onClick={tabNext}>
          Avançar
        </Button>
        <Button onClick={handleOpen} variant="contained" color="primary" disabled={Object.keys(errors).length > 0}>
          Enviar
        </Button>
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div style={modalStyle} className={classes.paper}>Cadastro feito com sucesso!</div>
      </Modal>
      </LayoutDefault>
    </div>
  );
}
