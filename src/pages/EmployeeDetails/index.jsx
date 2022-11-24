import { useParams } from "react-router-dom";

const EmployeeDetails = () => {
  const { id } = useParams();
  console.log(id);
  return <h1>Hahah</h1>;
};

export default EmployeeDetails;
