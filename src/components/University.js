// Store
import universityStore from "../store/universityStore";
import { observer } from "mobx-react";
// Styling
import { Wrapper } from "./Styles";

const University = () => {
  return (
    <Wrapper>
      {universityStore.universities.map((university) => {
        return (
          <>
            <p>{university.name}</p>
            <p>{university.country}</p>
          </>
        );
      })}
      {/* <img alt={university.name} src={university.image} /> */}
    </Wrapper>
  );
};

export default observer(University);
