import { Faq, FaqContainer } from "../../assets/styled/FaqStyled";

function FAQ(props) {
  return (
    <Faq>
      <FaqContainer>
        <p>{props.title}</p>
        <p>{props.description}</p>
      </FaqContainer>
    </Faq>
  );
}

export default FAQ;
