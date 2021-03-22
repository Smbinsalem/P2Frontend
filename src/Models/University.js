// Styling
import { Wrapper } from "../components/Styles";

const University = (props) => {
  const university = props.university;
  return (
    <Wrapper>
      <img alt={university.name} src={university.image} />
      <p>{university.name}</p>
      <p className="university-price">{university.price} KD</p>
    </Wrapper>
  );
};

export default University;
