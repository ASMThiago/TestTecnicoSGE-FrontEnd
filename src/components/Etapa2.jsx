import useInput from '../hooks/useInput';

export default function Etapa2({onChange}) {
  const [name, setName] = useInput('');
  const [lastName, setLastName] = useInput('');

  return (
    <div>
      <label>
        Nome
        <input type="text" value={name} onChange={setName} />
      </label>
      <label>
        Sobrenome
        <input type="text" value={lastName} onChange={setLastName} />
      </label>
      <label>
        Data de Nascimento
        <input type="date" />
      </label>
    </div>
  );
}
