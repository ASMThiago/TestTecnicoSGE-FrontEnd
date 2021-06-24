import { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import useStyles from '../components/style';


export default function Etapa3({
  estado,
  setEstado,
  cep,
  setCep,
  rua,
  setRua,
  bairro,
  setBairro,
  numero,
  setNumero,
  errors,
}) {
  const classes = useStyles();

  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <FormControl>
      <InputLabel id="uf">
          Estado
        </InputLabel>
        <Select
          labelId="uf"
          id="uf"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={estado}
          onChange={setEstado}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="AC">Acre</MenuItem>
          <MenuItem value="AL">Alagoas</MenuItem>
          <MenuItem value="AP">Amapá</MenuItem>
          <MenuItem value="AM">Amazonas</MenuItem>
          <MenuItem value="BA">Bahia</MenuItem>
          <MenuItem value="CE">Ceará</MenuItem>
          <MenuItem value="DF">Distrito Federal</MenuItem>
          <MenuItem value="ES">Espírito Santo</MenuItem>
          <MenuItem value="GO">Goiás</MenuItem>
          <MenuItem value="MA">Maranhão</MenuItem>
          <MenuItem value="MT">Mato Grosso</MenuItem>
          <MenuItem value="MS">Mato Grosso do Sul</MenuItem>
          <MenuItem value="MG">Minas Gerais</MenuItem>
          <MenuItem value="PA">Pará</MenuItem>
          <MenuItem value="PB">Paraíba</MenuItem>
          <MenuItem value="PR">Paraná</MenuItem>
          <MenuItem value="PE">Pernambuco</MenuItem>
          <MenuItem value="PI">Piauí</MenuItem>
          <MenuItem value="RJ">Rio de Janeiro</MenuItem>
          <MenuItem value="RN">Rio Grande do Norte</MenuItem>
          <MenuItem value="RS">Rio Grande do Sul</MenuItem>
          <MenuItem value="RO">Rondônia</MenuItem>
          <MenuItem value="RR">Roraima</MenuItem>
          <MenuItem value="SC">Santa Catarina</MenuItem>
          <MenuItem value="SP">São Paulo</MenuItem>
          <MenuItem value="SE">Sergipe</MenuItem>
          <MenuItem value="TO">Tocantins</MenuItem>
        </Select>
        <div className={classes.inputs}>
        <TextField
        error={errors.cep}
        onChange={setCep}
        label="CEP"
        type="text"
        variant="outlined"
        value={cep}
        />
        </div>
        <div className={classes.inputs}>
        <TextField
        onChange={setRua}
        label="Rua/Av."
        type="text"
        variant="outlined"
        value={rua}
        />
        </div>
        <div className={classes.inputs}>
        <TextField
          onChange={setBairro}
          label="Bairro"
          type="text"
          variant="outlined"
          value={bairro}
        />
        </div>
        <div className={classes.inputs}>
        <TextField
          onChange={setNumero}
          label="Numero"
          type="text"
          variant="outlined"
          value={numero}
        />
        </div>
      </FormControl>
    </div>
  );
}
