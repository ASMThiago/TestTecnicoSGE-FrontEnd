export default function Etapa3() {


  return (
    <div>
      <form>
        <div>
          <label for="cep">CEP</label>
          <input id="cep" type="text" required />
        </div>
        <div>
          <label for="logradouro">Logradouro</label>
          <input id="logradouro" type="text" required />
        </div>
        <div>
          <label for="numero">Número</label>
          <input id="numero" type="text" />
        </div>
        <div>
          <label for="complemento">Complemento</label>
          <input id="complemento" type="text" />
        </div>
        <div>
          <label for="bairro">Bairro</label>
          <input id="bairro" type="text" required />
        </div>
        <label for="uf">Estado</label>
        <select id="uf">
          <option value="AC">Acre</option>
          <option value="AL">Alagoas</option>
          <option value="AP">Amapá</option>
          <option value="AM">Amazonas</option>
          <option value="BA">Bahia</option>
          <option value="CE">Ceará</option>
          <option value="DF">Distrito Federal</option>
          <option value="ES">Espírito Santo</option>
          <option value="GO">Goiás</option>
          <option value="MA">Maranhão</option>
          <option value="MT">Mato Grosso</option>
          <option value="MS">Mato Grosso do Sul</option>
          <option value="MG">Minas Gerais</option>
          <option value="PA">Pará</option>
          <option value="PB">Paraíba</option>
          <option value="PR">Paraná</option>
          <option value="PE">Pernambuco</option>
          <option value="PI">Piauí</option>
          <option value="RJ">Rio de Janeiro</option>
          <option value="RN">Rio Grande do Norte</option>
          <option value="RS">Rio Grande do Sul</option>
          <option value="RO">Rondônia</option>
          <option value="RR">Roraima</option>
          <option value="SC">Santa Catarina</option>
          <option value="SP">São Paulo</option>
          <option value="SE">Sergipe</option>
          <option value="TO">Tocantins</option>
        </select>
      </form>
    </div>
  );
}
