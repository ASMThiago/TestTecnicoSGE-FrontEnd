import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';

export default function Etapa1({
  email,
  setEmail,
  password,
  setPassword,
  confirm,
  setConfirm,
  errors,
}) {
  return (
    <div>
      <FormControl>
        <TextField
          error={errors.email}
          onChange={setEmail}
          label="Email"
          type="email"
          variant="outlined"
          value={email}
        />
        <TextField
          error={errors.password}
          onChange={setPassword}
          label="Senha"
          type="password"
          variant="outlined"
          
          value={password}
        />
        <TextField
          error={errors.confirm}
          onChange={setConfirm}
          label="Confirmação de Senha"
          type="password"
          variant="outlined"
          value={confirm}
        />
      </FormControl>
    </div>
  );
}
