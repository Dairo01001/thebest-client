import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addOperators } from "../../redux/reducers/employeeSlice";
import { getOperators } from "../../services/operator";
import TableList from "../TableList";

const OperatorsTable = () => {
  const operators = useSelector((state) => state.employee.operators);
  const dispatch = useDispatch();

  useEffect(() => {
    getOperators().then((data) => {
      dispatch(addOperators(data));
    });
  }, []);

  return (
    <div style={{ paddingTop: 20 }}>
      <TableList data={operators} />
    </div>
  );
};

export default OperatorsTable;
