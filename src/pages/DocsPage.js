import { Routes, Route, useParams } from 'react-router-dom';

const DocsPage = () => {
  let { chartId } = useParams();

  return (
    <div>
      <p>This is umi docs. !{chartId}!</p>
    </div>
  );
};

export default DocsPage;
