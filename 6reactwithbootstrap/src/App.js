// ----------------second method with react-bootstrap--------------------

import Alert from "react-bootstrap/Alert";
import Container from "react-bootstrap/Container";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Container className="mt-5">
      <Alert variant="primary">A simple primary alert—check it out!</Alert>
    </Container>
  );
}

export default App;

// ----------------first method with cdn--------------------

// function App() {
//   return (
//     <div className="container mt-5">
//       <div className="alert alert-primary" role="alert">
//         A simple primary alert—check it out!
//       </div>
//     </div>
//   );
// }

// export default App;
