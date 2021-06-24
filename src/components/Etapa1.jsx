import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import useStyles from '../components/style';

export default function Etapa1({
  email,
  setEmail,
  password,
  setPassword,
  confirm,
  setConfirm,
  errors,
}) {
  const classes = useStyles();

  return (
    <div>
      <FormControl>
        <div className={classes.inputs}>
          <TextField
            error={errors.email}
            onChange={setEmail}
            label="Email"
            type="email"
            variant="outlined"
            value={email}
          />
        </div>
        <div className={classes.inputs}>
        <TextField
          error={errors.password}
          onChange={setPassword}
          label="Senha"
          type="password"
          variant="outlined"
          value={password}
        />
        </div>
        <div className={classes.inputs}>
        <TextField
          error={errors.confirm}
          onChange={setConfirm}
          label="Confirmação de Senha"
          type="password"
          variant="outlined"
          value={confirm}
        />
        </div>
      </FormControl>
    </div>
  );
}
