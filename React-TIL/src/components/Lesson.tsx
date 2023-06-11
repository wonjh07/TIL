import { useState } from 'react';
import styled from 'styled-components';

const Lesson = () => {
  const [menu, setMenu] = useState(['짜장면', '짬뽕', '탕수육', '볶음밥']);
  const [dragNow, setDragNow] = useState<number | null>(null);

  const dragAndDrop = (a: number, b: number) => {
    const lst = [...menu];
    [lst[a], lst[b]] = [lst[b], lst[a]];
    setMenu(lst);
    setDragNow(b);
  };

  const dragStartHandler = (e: any) => {
    e.dataTransfer.effectAllowed = 'move';
    e.target.id = 'dragging';
    setDragNow(e.target.dataset.dropid);
  };

  const dragEnterHandler = (e: any) => {
    if (dragNow && dragNow !== e.target.dataset.dropid) {
      dragAndDrop(dragNow, e.target.dataset.dropid);
    }
  };

  const dragOverHandler = (e: any) => {
    e.preventDefault();
  };

  const dragEndHandler = (e: any) => {
    e.target.id = '';
    setDragNow(null);
  };

  return (
    <Component onDragOver={(e) => dragOverHandler(e)}>
      <CardBox>
        {menu.map((e, idx) => (
          <Card
            draggable
            key={`${e}`}
            data-dropid={idx}
            onDragStart={(e) => dragStartHandler(e)}
            onDragEnter={(e) => dragEnterHandler(e)}
            onDragEnd={(e) => dragEndHandler(e)}>
            {e}
          </Card>
        ))}
      </CardBox>
    </Component>
  );
};

export default Lesson;

const Component = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;

  #dragging {
    transition: 0.01s;
    opacity: 0;
  }
`;

const CardBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2px;
  width: 50%;
  box-sizing: border-box;
  padding: 4rem;
  background-color: #c0c0c0;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  aspect-ratio: 5;
  box-sizing: border-box;
  border-left: 4px solid #641eaa;
  background-color: #ffffff;
  cursor: move;
`;
