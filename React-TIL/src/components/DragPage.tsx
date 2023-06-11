import styled from 'styled-components';
import DragAndDrop from './DragAndDrop';
import DragTracking from './DragTracking';

const DragPage = () => {
  return (
    <Component>
      <DragAndDrop />
      <DragTracking />
    </Component>
  );
};

export default DragPage;

const Component = styled.div`
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
  padding: 3rem;
`;
