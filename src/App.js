import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCustomers } from './asyncActions/customers'
import {
  decrementCreator,
  incrementCreator,
} from './store/reducers/countReducer'
import { deleteUser } from './store/reducers/userReducer'

function App() {
  const dispatch = useDispatch()
  const count = useSelector((state) => state.countReducer.count)
  const users = useSelector((state) => state.userReducer.users)

  const removeUser = (user) => {
    dispatch(deleteUser(user.id))
  }

  return (
    <div className="App">
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={{ fontSize: '3rem' }}>{count}</div>
        <button
          style={{ margin: '0px 20px 0px 20px' }}
          onClick={() => dispatch(incrementCreator())}
        >
          ИНКРЕМЕНТ++
        </button>
        <button
          style={{ margin: '0px 20px 0px 20px' }}
          onClick={() => dispatch(decrementCreator())}
        >
          ДЕКРЕМЕНТ--
        </button>
        <button
          style={{ margin: '0px 20px 0px 20px' }}
          onClick={() => dispatch(fetchCustomers())}
        >
          ПОЛУЧИТЬ ПОЛЬЗОВАТЕЛЕЙ
        </button>
      </div>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {users.map((user) => {
          return (
            <div
              style={{
                border: '1px solid black',
                padding: '15px 10px',
                marginTop: '10px',
                minWidth: '200px',
                display: 'flex',
                justifyContent: 'space-between'
              }}
              key={user.id}
            >
              {user.name}
              <button
                onClick={() => removeUser(user)}
                style={{ margin: '0px 5px' }}
              >
                x
              </button>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default App
