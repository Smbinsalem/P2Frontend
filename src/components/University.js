// // Store
// import universityStore from "../store/universityStore"
// Styling
import { Wrapper } from "./Styles";

const University = (props) => {
  const university = props.universityStore.university;
  return (
    <Wrapper>
      {/* <img alt={university.name} src={university.image} /> */}
      <p>{university.name}</p>
      <p>{university.country}</p>
    </Wrapper>
  );
};

export default University;
