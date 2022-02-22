import { SearchIcon } from "@chakra-ui/icons";
import {
  Flex,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import React from "react";

type Props = {
  filtro: string;
  setFiltro: (filtro: string) => void;
};

function Filtro({ filtro, setFiltro }: Props) {
  const handleChange = (e) => {
    setFiltro(e.target.value);
  };
  return (
    <Flex mt={4}>
      <InputGroup>
        <InputLeftElement
          color="gray.300"
          children={<SearchIcon color="gray.300" />}
        />
        <Input placeholder="Buscar..." value={filtro} onChange={handleChange} />
      </InputGroup>
    </Flex>
  );
}

export default Filtro;
