import { useNavigate } from "react-router-dom";
function Navigation(Component) {
  return (props) => <Component {...props} navigate={useNavigate()} />;
}
export default Navigation;
