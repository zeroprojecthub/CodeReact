import { useState } from "react"

function App() {
  // let [name,setname] = useState("");
  // let [email,setemail] = useState("");
  let [form, setForm] = useState({});
  let [data, setData] = useState([]);

  // function handleChange(event) {
  //   const name = event.target.name;
  //   const value = event.target.value;
  //   setform(values => ({ ...values, [name]: value }))
  // }

  function adddata() {
    setData([...data, form]);
    setForm(form);
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((prevState) => ({ ...prevState, [name]: value }));
  }
function remove(index){
  let dataval=data;
  dataval.splice(index,1);
  setData([...dataval])
}
  return (
    <>
      <div className="form">
        <label htmlFor="name">Enter Name::</label>

        <input type="text" name="name" value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} />

        <label htmlFor="email">Enter Email::</label>
        <input type="text" name="email" value={form.email} onChange={(event) => setForm({ ...form, email: event.target.value })} />

        <button type="button" onClick={adddata}>Click Me</button>
      </div>
      <div className="data_value">
        {
          data.map((item, index) => {
            return (
              <div key={index}>
                <h4>{item.name}</h4>
                <h4>{item.email}</h4>
                <button onClick={remove}>Remove</button>
              </div>
            );
          })
        }
      </div>

    </>
  )
}
export default App
