import { Heading, Tag } from "@chakra-ui/react";
import { Card, CardHeader, CardBody, CardFooter, Text } from '@chakra-ui/react'
import { Table, Thead, Tbody, Tfoot, Tr, Th, Td, TableCaption, TableContainer} from '@chakra-ui/react'

export default function Ocorrencia() {
  return (
    <>
      <Heading mb={5}>Ocorrências</Heading>

      <Card mb={5}>
      <CardHeader>
        <Heading size='md'>Sobre a solicitação</Heading>
      </CardHeader>

        <CardBody>
          <Text>Recentemente, um incidente chocante ocorreu envolvendo um caminhão que foi incendiado. A ocorrência deixou marcas de destruição e levantou questões sobre a segurança dos veículos nas estradas. O incêndio consumiu completamente o caminhão, transformando-o em uma massa retorcida de metal carbonizado. As autoridades estão investigando as causas do incidente, enquanto o proprietário do veículo lida com as consequências devastadoras desse evento. Espera-se que medidas de segurança mais rigorosas sejam implementadas para evitar futuros incidentes semelhantes e proteger a vida dos motoristas e a integridade dos veículos nas vias públicas.</Text>
        </CardBody>
      </Card>

      <Heading size='md'>Materiais</Heading>
      <p>Você tem <b>4 materiais</b> para serem avaliados</p>

      <TableContainer mt={5}>
        <Table variant={"striped"}>
          <TableCaption>Lista</TableCaption>
          <Thead>
            <Tr>
              <Th><b>Nome do material</b></Th>
              <Th><b>Status</b></Th>
              <Th><b>Fotos anexadas</b></Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>Caminhão vermelho</Td>
              <Td><Tag colorScheme='orange'>Pendente</Tag></Td>
              <Td isNumeric>25.4</Td>
            </Tr>
            <Tr>
              <Td>Ocorrência de caminhão</Td>
              <Td><Tag colorScheme='green'> Recebido</Tag></Td>
              <Td isNumeric>30.48</Td>
            </Tr>
            <Tr>
              <Td>Ocorrência de caminhão</Td>
              <Td><Tag colorScheme='orange'>Pendente</Tag></Td>
              <Td isNumeric>0.91444</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>

    </>
  )
}
