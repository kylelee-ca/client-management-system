import Customer from './components/Customer'
import './App.css'
const customers = [{
  'id': 1,
  image: 'https://placeimg.com/64/64/1',
  name: 'Kyle Lee',
  birthday: '1993 02 06',
  gender: 'male',
  job: 'N/A'
},{
  'id': 2,
  image: 'https://placeimg.com/64/64/2',
  name: 'Hay Lee',
  birthday: '1993 03 26',
  gender: 'male',
  job: 'N/A'
  },
  {
    'id': 3,
    image: 'https://placeimg.com/64/64/3',
    name: 'Jin Lee',
    birthday: '1991 02 24',
    gender: 'female',
    job: 'N/A'
  }
]

function App() {
  return (
    <div className="App">
      <div className='gray-background'>
        {customers.map(customer =>
          (<Customer key={customer.id} customer={customer}/>)
        )}
      </div>
    </div>
  );
}

export default App;
