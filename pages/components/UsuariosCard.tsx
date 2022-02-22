import {
  Accordion,
  AccordionButton,
  AccordionPanel,
  AccordionItem,
  Box,
  AccordionIcon,
  Input,
  Button,
  Text,
  useClipboard,
  VStack,
  HStack,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { IUsuarios } from "../../types/accesos";

type Props = {
  users: IUsuarios[];
};

export default function UsuariosCard({ users }: Props) {
  const [valueCopy, setValueCopy] = React.useState<string | undefined>();
  const { hasCopied, onCopy } = useClipboard(valueCopy);

  const handleCopy = (text: string) => {
    console.log("handleCopy");
    setValueCopy("");
    setValueCopy(text);
  };

  useEffect(() => {
    if (valueCopy) {
      onCopy();
    }
  }, [valueCopy]);
  return (
    <Accordion allowMultiple allowToggle>
      {users.map((user) => (
        <AccordionItem
          key={user.id}
          // border="1px"
          rounded="md"
          bgColor="white"
          mb={2}
        >
          <AccordionButton bgColor="teal.100">
            <Box flex="1" textAlign="left">
              {` ${user.nombre}`}
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4}>
            <VStack mb={2}>
              <HStack>
                <Text>Usuario</Text>
                <Input value={user.user} isReadOnly />
                <Button
                  onClick={() => {
                    handleCopy(user.user);
                  }}
                  ml={2}
                >
                  Copy
                </Button>
              </HStack>
              <HStack>
                <Text>Password</Text>
                <Input value={user.password} isReadOnly />
                <Button
                  onClick={() => {
                    handleCopy(user.password);
                  }}
                  ml={2}
                >
                  Copy
                </Button>
              </HStack>
            </VStack>
            {user.workspace && (
              <HStack>
                <Text>Workspace</Text>
                <Input value={user.workspace} isReadOnly />
                <Button
                  onClick={() => {
                    handleCopy(user.workspace);
                  }}
                  ml={2}
                >
                  Copy
                </Button>
              </HStack>
            )}
          </AccordionPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
