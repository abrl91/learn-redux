import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from './store/index';

const App = () => {
  const account = useSelector(state => state.account);
  const dispatch = useDispatch();
  const { depositAction, withdrawalAction } = bindActionCreators(actionCreators, dispatch);

  return (
    <div>
      <h1>Bank App with React-Redux</h1>
      <button onClick={() => depositAction(100)}>deposit</button>
      <button onClick={() => withdrawalAction(50)}>withdrawal</button>
      <p>{account}</p>
    </div>
  );
}

export default App;
