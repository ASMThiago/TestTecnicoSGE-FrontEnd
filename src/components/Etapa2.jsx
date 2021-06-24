import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import useStyles from '../components/style';

export default function Etapa2({ name, setName, lastName, setLastName, data, setData, errors }) {
  const classes = useStyles();
  return (
    <div>
      <FormControl>
      <div className={classes.inputs}>
        <TextField
          error={errors.name}
          onChange={setName}
          label="Nome"
          type="text"
          variant="outlined"
          value={name}
        />
        </div>
        <div className={classes.inputs}>
        <TextField
          error={errors.lastName}
          onChange={setLastName}
          label="Sobrenome"
          type="text"
          variant="outlined"
          value={lastName}
        />
        </div>
        <div className={classes.inputs}>
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
        </div>
      </FormControl>
    </div>
  );
}
