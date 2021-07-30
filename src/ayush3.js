import react from "react";
import { useState } from "react";

function App() {
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [phone, setPhone] = useState("");
  const [submit, setSubmit] = useState(false);

  const firstChange = (e) => {
    const val = e.target.value;
    //   console.log(val);
    setFirst(val);
    console.log(first);
  };

  const lastChange = (e) => {
    let val = e.target.value;
    // console.log(val);
    setLast(val);
    console.log(last);
  };
  const phoneChange = (e) => {
    let val = e.target.value;
    // console.log(val);
    setPhone(val);
    console.log(phone);
  };

  const onSubmit = () => {
    setSubmit(true);
  };
  if (submit) {
    return (
      <div className="App">
        {/* <div>
          <form>
            <input type="text" name="first" onChange={firstChange} />
            <input type="text" name="last" onChange={lastChange} />
            <input type="text" name="phone" onChange={phoneChange} />
          </form>
        </div>

        <button onClick={onSubmit}>Submit</button> */}

        <p>{last}</p>
        <p>{first}</p>
        <p>{phone}</p>
      </div>
    );
  }

  return (
    <div className="App">
      <div>
        <form>
          {/* <input onChange={firstChange}></input> */}
          <input
            type="text"
            name="first"
            placeholder="first name"
            onChange={firstChange}
          />
          <input
            type="text"
            name="last"
            placeholder="last name"
            onChange={lastChange}
          />
          <input
            type="text"
            name="phone"
            placeholder="phone number"
            onChange={phoneChange}
          />
          {/* <input onChange={phoneChange}> </input> */}
        </form>
      </div>

      <button onClick={onSubmit}>Submit</button>

      {/* <p>{last}</p>
      <p>{first}</p>
      <p>{phone}</p> */}
    </div>
  );
}

export default App;
