import { Center, Flex, SimpleGrid, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { data } from "../data/data";
import { IAcceso } from "../types/accesos";
import AccesoCard from "./components/AccesoCard";
import Filtro from "./components/Filtro";

export default function Home() {
  const [filtro, setFiltro] = useState<string>();
  const [seleccion, setSeleccion] = useState<number | null>(null);
  const filtrarAcceso = (acceso: IAcceso, filtro: string) => {
    if (!filtro) return true;

    const filterstrings = [filtro.split(".")];

    const regex = new RegExp(filterstrings.join("|"), "i");
    const prueba = [
      acceso.nombre,
      acceso.cliente,
      acceso.entorno,
      acceso.tipo,
    ].join(" ");

    return regex.test(prueba);
  };

  return (
    <Center>
      <VStack spacing={4}>
        <Filtro filtro={filtro} setFiltro={setFiltro} />
        <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing="5px">
          {data
            .filter((acceso) => filtrarAcceso(acceso, filtro))
            .map((acceso) => (
              <AccesoCard
                onClick={() =>
                  setSeleccion(seleccion === acceso.id ? null : acceso.id)
                }
                key={acceso.id}
                acceso={acceso}
                ver={true}
                seleccionada={seleccion === acceso.id}
              />
            ))}
        </SimpleGrid>
      </VStack>
    </Center>
  );
}
