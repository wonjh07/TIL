import { useState } from 'react';
import styled from 'styled-components';

const DragTracking = () => {
  const [originPos, setOriginPos] = useState({ x: 0, y: 0 }); // 드래그 전 포지션값 (e.target.offset의 상대 위치)
  const [clientPos, setClientPos] = useState({ x: 0, y: 0 }); // 실시간 커서위치인 e.client를 갱신하는값
  const [pos, setPos] = useState({ left: 100, top: 100 }); // 실제 drag할 요소가 위치하는 포지션값

  const dragStartHandler = (e: any) => {
    const blankCanvas: any = document.createElement('canvas');
    blankCanvas.classList.add('canvas');
    document.body?.appendChild(blankCanvas); // 투명 캔버스를 생성하여 글로벌 아이콘 제거
    e.dataTransfer?.setDragImage(blankCanvas, 0, 0);
    e.dataTransfer.effectAllowed = 'move'; // 크롬의그린 +아이콘 제거

    const originPosTemp = { ...originPos };
    originPosTemp['x'] = e.target.offsetLeft;
    originPosTemp['y'] = e.target.offsetTop;
    setOriginPos(originPosTemp); //드래그 시작할때 드래그 전 위치값을 저장

    const clientPosTemp = { ...clientPos };
    clientPosTemp['x'] = e.clientX;
    clientPosTemp['y'] = e.clientY;
    setClientPos(clientPosTemp);
  };

  const dragHandler = (e: any) => {
    const PosTemp = { ...pos };
    PosTemp['left'] = e.target.offsetLeft + e.clientX - clientPos.x;
    PosTemp['top'] = e.target.offsetTop + e.clientY - clientPos.y;
    setPos(PosTemp);

    const clientPosTemp = { ...clientPos };
    clientPosTemp['x'] = e.clientX;
    clientPosTemp['y'] = e.clientY;
    setClientPos(clientPosTemp);
  };

  const dragEndHandler = () => {
    const canvases = document.getElementsByClassName('canvas');
    for (let i = 0; i < canvases.length; i++) {
      const canvas = canvases[i];
      canvas.parentNode?.removeChild(canvas);
    }
    // 캔버스로 인해 발생한 스크롤 방지 어트리뷰트 제거
    document.body.removeAttribute('style');
  };

  const dragOverHandler = (e: any) => {
    e.preventDefault();
  };

  return (
    <Component onDragOver={(e) => dragOverHandler(e)}>
      <Box
        draggable
        onDragStart={(e) => dragStartHandler(e)}
        onDrag={(e) => dragHandler(e)}
        onDragEnd={() => dragEndHandler()}
        style={{ left: pos.left, top: pos.top }}>
        HI
      </Box>
    </Component>
  );
};

export default DragTracking;

const Component = styled.div`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 3rem;
`;

const Box = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  border: 2px solid;
  border-radius: 10px;
  background-color: olive;
  cursor: move;
  &:active {
    background-color: tomato;
  }
`;
