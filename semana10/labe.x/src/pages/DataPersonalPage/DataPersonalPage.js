import axios from "axios";
import { useParams } from "react-router-dom";
import useForm from "../../hookcs/useForm";
import {
  PersonalMain,
  Form,
  Input,
  Button,
  Text,
} from "../../assets/styled/DataPersonalStyled";

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
      country: form.country,
    };

    axios
      .post(
        `https://us-central1-labenu-apis.cloudfunctions.net/labeX/allison-marques/trips/${pathParams.id}/apply`,
        body
      )
      .then((res) => {
        console.log(res.data)
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <PersonalMain>
      <Text>Dados Pessoais</Text>

      <Form onSubmit={applyToTrip}>
        <Input
          name="name"
          value={form.name}
          onChange={onChange}
          type="text"
          required
          placeholder="Seu nome:"
        />
        <Input
          name="age"
          value={form.age}
          onChange={onChange}
          type="text"
          required
          placeholder="Sua idade: "
        />
        <Input
          name="commit"
          value={form.commit}
          onChange={onChange}
          type="text"
          required
          placeholder="Seu feedback: "
        />
        <Input
          name="profession"
          value={form.profession}
          onChange={onChange}
          type="text"
          required
          placeholder="Sua profissão: "
        />
        <Input
          name="country"
          value={form.country}
          onChange={onChange}
          type="text"
          required
          placeholder="Seu País: "
        />
        <Button>cadastrar dados</Button>
      </Form>
    </PersonalMain>
  );
}

export default DataPersonalPage;
