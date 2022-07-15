const Customer = (props) => {
  return (
      <div>
          <CustomerProfile name={props.customer.name} id={props.customer.id} image={props.customer.image} />
          <CustomerInfo birthday={props.customer.birthday} gender={props.customer.gender} job={props.customer.job} />
      </div>
  )
}
const CustomerProfile = (props) => {
  return (
      <div>
          <h2>{props.name}({props.id})</h2>
          <img src={props.image}></img>

    </div>
  )
}
const CustomerInfo = (props) => {
  return (
      <div>
          <p>{props.birthday}</p>
          <p>{props.gender}</p>
          <p>{props.job}</p>
      </div>
  )
}
export default Customer;