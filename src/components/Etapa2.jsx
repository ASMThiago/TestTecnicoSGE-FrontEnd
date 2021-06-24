import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';

export default function Etapa2({ name, setName, lastName, setLastName, data, setData, errors }) {
  return (
    <div>
      <FormControl>
        <TextField
          error={errors.name}
          onChange={setName}
          label="Nome"
          type="text"
          variant="outlined"
          value={name}
        />
        <TextField
          error={errors.lastName}
          onChange={setLastName}
          label="Sobrenome"
          type="text"
          variant="outlined"
          value={lastName}
        />
        <TextField
          onChange={setData}
          label="Data de Nascimento"
          type="date"
          variant="outlined"
          value={data}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </FormControl>
    </div>
  );
}
