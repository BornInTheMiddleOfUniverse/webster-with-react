import { DragDropContext, DropResult } from "react-beautiful-dnd";
import styled from "styled-components";
import { toDoState } from "./atoms";
import { useRecoilState } from "recoil";
import Board from "./components/Board";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  max-width: 680px;
  width: 100vw;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
const Boards = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  gap: 10px;
  grid-template-columns: repeat(3, 1fr);
`;

function App() {
  const [toDos, setToDos] = useRecoilState(toDoState);
  const onDragEnd = (info: DropResult) => {
    console.log("", info);
    const { destination, draggableId, source } = info;
    if (destination?.droppableId === source.droppableId) {
      setToDos((allBoards) => {
        const boardCopy = [...allBoards[source.droppableId]];
        console.log("ALLBOARDS", allBoards);
        console.log("BOARDCOPY", boardCopy);
        console.log("", boardCopy.splice(source.index, 1));
        // boardCopy.splice(source.index, 1);
        return {
          ...allBoards,
        };
      });
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Wrapper>
        <Boards>
          {Object.keys(toDos).map((boardId) => (
            <Board boardId={boardId} key={boardId} toDos={toDos[boardId]} />
          ))}
        </Boards>
      </Wrapper>
    </DragDropContext>
  );
}

export default App;
