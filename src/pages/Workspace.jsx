import { GlobalStyle } from "@chakra-ui/react";
import Board from "../components/Board";

import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

export default function Workspace() {
  return (
   <>
      <DndProvider backend={HTML5Backend}>
        <Board />
        <GlobalStyle />
      </DndProvider>
   </>
  )
}
