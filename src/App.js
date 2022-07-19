import Customer from './components/Customer'
import './App.css'
import Table from '@material-ui/core/Table'
import TableHead from '@material-ui/core/TableHead'
import TableBody from '@material-ui/core/TableBody'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import Paper from '@material-ui/core/Paper'

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
      <Paper >
        <Table >
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell>Profile</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Birthday</TableCell>
              <TableCell>Gender</TableCell>
              <TableCell>Job</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {customers.map(customer =>
              (<Customer key={customer.id} customer={customer}/>)
            )}
          </TableBody>
        </Table>
      </Paper>     
    </div>
  );
}

export default App;
