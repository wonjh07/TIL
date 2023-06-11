import { useState } from 'react';
import styled from 'styled-components';

const DragAndDrop = () => {
  const [menu1, setMenu1] = useState(['짜장면', '짬뽕', '탕수육', '볶음밥']);
  const [menu2, setMenu2] = useState(['햄버거', '피자', '파스타', '치킨']);
  const [drag, setDrag] = useState<number | null>(null);

  const getCards = (lst: string[]) =>
    lst.map((e, idx) => (
      <Card
        draggable
        key={`${e}`}
        data-dropid={idx}
        data-dropzone={'menu2'}
        onDragStart={(e) => dragStart(e)}
        onDragEnter={(e) => dragEnter(e)}
        onDragEnd={(e) => dragEnd(e)}>
        {e}
      </Card>
    ));

  const dragAndDrop = (a: number, b: number) => {
    const lst = [...menu2];
    [lst[a], lst[b]] = [lst[b], lst[a]];
    setMenu2(lst);
    setDrag(b);
  };

  const dragStart = (e: any) => {
    e.dataTransfer.effectAllowed = 'move';
    e.target.id = 'dragging';
    setDrag(e.target.dataset.dropid);
  };

  const dragEnter = (e: any) => {
    if (drag && drag !== e.target.dataset.dropid) {
      dragAndDrop(drag, e.target.dataset.dropid);
    }
  };

  const dragOver = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const dragEnd = (e: any) => {
    e.target.id = '';
    setDrag(null);
  };

  return (
    <Component onDragOver={(e) => dragOver(e)}>
      <LeftBox>{getCards(menu1)}</LeftBox>
      <RightBox>{getCards(menu2)}</RightBox>
    </Component>
  );
};

export default DragAndDrop;

const Component = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  #dragging {
    border: 4px solid #1eaa8e;
    opacity: 0.001;
  }
`;

const LeftBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  width: 50%;
  box-sizing: border-box;
  padding: 4rem;
  background-color: gray;
`;

const RightBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  width: 50%;
  box-sizing: border-box;
  padding: 4rem;
  background-color: #b5b5b5;
`;

const Card = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  aspect-ratio: 5;
  box-sizing: border-box;
  padding: 1rem;
  border: 4px solid #641eaa;
  border-radius: 10px;
  background-color: white;
  cursor: move;
`;
