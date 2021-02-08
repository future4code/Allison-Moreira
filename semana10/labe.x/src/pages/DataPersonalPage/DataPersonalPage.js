import axios from "axios";
import { useParams } from "react-router-dom";
import useForm from "../../hookcs/useForm";

function DataPersonalPage() {
  const [form, onChange] = useForm({
    name: "",
    age: "",
    commit: "",
    profession: "",
    country: "",
  });

  const pathParams = useParams();
  
  const applyToTrip = (event) => {
    event.preventDefault();
    const body = {
      name: form.name,
      age: form.age,
      applicationText: form.commit,
      profession: form.profession,
      country: form.country ,
    };

    axios
      .post(
        `https://us-central1-labenu-apis.cloudfunctions.net/labeX/allison-marques/trips/${pathParams.id}/apply`,
        body
      )
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div>
      <div>Dados Pessoais</div>

      <form onSubmit={applyToTrip}>
        <input
          name="name"
          value={form.name}
          onChange={onChange}
          type="text"
          required
          placeholder="Seu nome:"
        />
        <input
          name="age"
          value={form.age}
          onChange={onChange}
          type="text"
          required
          placeholder="Sua idade: "
        />
        <input
          name="commit"
          value={form.commit}
          onChange={onChange}
          type="text"
          required
          placeholder="Seu feedback: "
        />
        <input
          name="profession"
          value={form.profession}
          onChange={onChange}
          type="text"
          required
          placeholder="Sua profissão: "
        />
        <input
          name="country"
          value={form.country}
          onChange={onChange}
          type="text"
          required
          placeholder="Seu País: "
        />
        <button>CADASTRAR DADOS</button>
      </form>
    </div>
  );
}

export default DataPersonalPage;
