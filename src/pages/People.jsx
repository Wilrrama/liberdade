import React, { useContext, useState } from "react";
import { GiSoccerBall } from "react-icons/gi";
import { AiOutlineClear } from "react-icons/ai";
import { RiEditFill } from "react-icons/ri";
import { TiUserDelete } from "react-icons/ti";
import { IoSaveSharp } from "react-icons/io5";
import { v4 as uuidv4 } from "uuid";
import { NameContext } from "../contexts/NameContext";
import { Input } from "../fragments/Input";
import { Form } from "../fragments/Form";
import { Button } from "../fragments/Button";
import { StyledMain, BackgroundContainer } from "../styles/styledPeople";

export const People = () => {
  const [valueName, setValueName] = useState("");
  const [valueNumber, setValueNumber] = useState("");
  const [valueRole, setValueRole] = useState("");
  const [editId, setEditId] = useState(null);
  const { nameList, addName, removeName, editName, removeAll } =
    useContext(NameContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (editId) {
      editName(editId, {
        text: valueName,
        number: valueNumber,
        role: valueRole,
      });
      setEditId(null);
    } else {
      const newName = {
        id: uuidv4(),
        text: valueName,
        number: valueNumber,
        role: valueRole,
      };
      addName(newName);
    }
    setValueName("");
    setValueNumber("");
    setValueRole("");
  };

  const handleEdit = (name) => {
    setEditId(name.id);
    setValueName(name.text);
    setValueNumber(name.number);
    setValueRole(name.role);
  };

  return (
    <>
      <BackgroundContainer />
      <StyledMain>
        <h1>Lista dos Boleiros</h1>

        <Form onSubmit={handleSubmit}>
          <Input
            className="input__nome"
            label=""
            type="text"
            placeholder="Digite o nome"
            id="nome"
            value={valueName}
            setValue={setValueName}
            required
          />

          <select
            value={valueRole}
            onChange={(e) => setValueRole(e.target.value)}
          >
            <option value="" hidden>
              Função
            </option>
            <option value="Comissão">Comissão</option>
            <option value="Goleiro">Goleiro</option>
            <option value="Defensor">Defensor</option>
            <option value="Lateral">Lateral</option>
            <option value="Volante">Volante</option>
            <option value="Meia">Meia</option>
            <option value="Atacante">Atacante</option>
          </select>

          <Input
            className="input__numero"
            label=""
            type="number"
            placeholder="nº"
            id="numero"
            value={valueNumber}
            setValue={setValueNumber}
          />

          <Button type="submit">
            <GiSoccerBall />
          </Button>
          <Button type="button" onClick={removeAll}>
            <AiOutlineClear />
          </Button>
        </Form>

        {nameList && nameList.length > 0 ? (
          <ol>
            {nameList.map((name) => (
              <li key={name.id}>
                {editId === name.id ? (
                  <form onSubmit={handleSubmit}>
                    <Input
                      className="input__nome"
                      label=""
                      type="text"
                      placeholder="Digite o nome"
                      id="editNome"
                      value={valueName}
                      setValue={setValueName}
                      required
                    />

                    <select
                      value={valueRole}
                      onChange={(e) => setValueRole(e.target.value)}
                    >
                      <option value="" hidden>
                        Função
                      </option>
                      <option value="Comissão">Comissão</option>
                      <option value="Goleiro">Goleiro</option>
                      <option value="Defensor">Defensor</option>
                      <option value="Lateral">Lateral</option>
                      <option value="Volante">Volante</option>
                      <option value="Meia">Meia</option>
                      <option value="Atacante">Atacante</option>
                    </select>
                    <Input
                      className="input__numero"
                      label=""
                      type="number"
                      placeholder="nº:"
                      id="editNumero"
                      value={valueNumber}
                      setValue={setValueNumber}
                    />
                    <Button className="button__save__edit" type="submit">
                      <IoSaveSharp />
                    </Button>
                  </form>
                ) : (
                  <div>
                    <span>
                      {name.text} <span className="number__list">- </span>
                      <span className="role__list">{name.role}</span>
                      <span className="number__list"> - </span> nº :
                      <span className="list__number"> {name.number}</span>
                    </span>
                    <Button
                      className="button__edit"
                      type="button"
                      onClick={() => handleEdit(name)}
                    >
                      <RiEditFill />
                    </Button>
                    <Button
                      className="button__remove"
                      type="button"
                      onClick={() => removeName(name.id)}
                    >
                      <TiUserDelete />
                    </Button>
                  </div>
                )}
              </li>
            ))}
          </ol>
        ) : (
          <p> Nenhum boleiro na lista</p>
        )}
      </StyledMain>
    </>
  );
};
