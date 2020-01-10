import React, { useCallback } from "react";
import Input from "../../shared/components/FormElements/Input";
import { VALIDATOR_REQUIRE } from "../../shared/utils/validators";
import "./NewPlace.css";

const NewPlace = () => {
  const titleInputHandler = useCallback((id, value, isValid) => {}, []);
  return (
    <form className="place-form">
      <Input
        type="text"
        label="Title"
        element="input"
        validators={[VALIDATOR_REQUIRE()]}
        onInput={titleInputHandler}
        errorText="please enter a valid title"
      />
    </form>
  );
};

export default NewPlace;
