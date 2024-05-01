import Nav from './component/Nav';
import Form from './component/Form';
import Map from './component/Map';
import Team from './component/Team';
// let name = "React ADIT Ramanthapur";
function App() {
  return (
  <>
    <Nav title='home'/>

    <div className="container">
    <Form/>
    <Team/>
    <Map/>
    </div>

    </>
  );

}
 
export default App;
