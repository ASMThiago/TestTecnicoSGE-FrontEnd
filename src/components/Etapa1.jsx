import useInput from '../hooks/useInput';

export default function Etapa1() {
  const [email, setEmail] = useInput('');
  const [password, setPassword] = useInput('');
  const [confirm, setConfirm] = useInput('');

  return (
    <div>
      <label>
        Email
        <input type="email" value={email} onChange={setEmail} />
      </label>
      <label>
        Senha
        <input type="text" value={password} onChange={setPassword} />
      </label>
      <label>
        Confirmar Senha
        <input type="text" value={confirm} onChange={setConfirm} />
      </label>
    </div>
  );
}
