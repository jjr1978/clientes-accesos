import React, { useEffect } from "react";
import {
  Box,
  Button,
  Code,
  Flex,
  Heading,
  Icon,
  IconButton,
  Input,
  Link,
  Text,
} from "@chakra-ui/react";
import { IAcceso } from "../../types/accesos";
import { ExternalLinkIcon, SearchIcon, UpDownIcon } from "@chakra-ui/icons";
import { useClipboard } from "@chakra-ui/react";
import UsuariosCard from "./UsuariosCard";
import { getColor } from "../../lib/colors";

type Props = {
  acceso: IAcceso;
  ver: boolean;
  seleccionada?: boolean;
  onClick?: () => void;
};

const AccesoCard = ({ acceso, ver, seleccionada, onClick }: Props) => {
  return (
    <Box m={2} p={2} rounded="lg" minW="64" bgColor="gray.50" shadow="md">
      <Flex>
        <Heading size="md">{`Cliente ${acceso.cliente}`}</Heading>
        <Heading
          px={2}
          size="sm"
          color={getColor(acceso.entorno)}
          ml="auto"
        >{`Entorno ${acceso.entorno}`}</Heading>
        <IconButton
          aria-label="abrir Tarjeta"
          colorScheme="blue"
          icon={<UpDownIcon onClick={onClick} />}
        ></IconButton>
      </Flex>
      <Box>
        <Text color="teal.700" fontWeight="bold">
          {acceso.nombre}
        </Text>
      </Box>
      <Box>
        <Text>{acceso.tipo}</Text>
      </Box>
      {acceso.url && (
        <Box>
          <Link href={acceso.url} isExternal>
            Link <ExternalLinkIcon mx="2px" />
          </Link>
        </Box>
      )}
      {acceso.tnsname && seleccionada && (
        <Box>
          <Code
            display="block"
            whiteSpace="pre"
            overflowX="scroll"
            children={`
         ${acceso.tnsname}`}
          />
        </Box>
      )}
      <Box>
        <UsuariosCard users={acceso.users} />
      </Box>
    </Box>
  );
};

export default AccesoCard;
