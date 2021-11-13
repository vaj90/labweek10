import './App.css';
import React, { Component } from "react";
import DataEntry from './DataEntry';

export default class App extends Component  {
  constructor(props){
    super(props);
    this.state = {
      dataEntry : {
        emailAddress : '',
        fullName  : '',
        address1 : '',
        address2: '',
        city: '',
        province: '',
        postalCode: ''
      },
      provinces:[
        "Alberta", "British Columbia", "Manitoba", "New Brunswick", "Newfoundland and Labrador",
        "Nova Scotia", "Ontario", "Prince Edward Island", "Quebec", "Saskatchewan"    
      ],
      isSubmit: false,
    }
    this.formSubmit = this.formSubmit.bind(this);
  }
  componentWillMount() {
    console.log("initialize");
    this.setState({isSubmit:false});
  }
  componentDidMount() {
    console.log("after loading all the object");
  }
  componentDidUpdate() {
    console.log("update");
  }
  handleChange = evt => {
    const {dataEntry} = {...this.state};
    const {name, value} = evt.target;
    const currenState = dataEntry
    currenState[name] = value;
    this.setState({dataEntry: currenState});
  }
  dummyData = e => {
    this.setState({
      dataEntry : {
        emailAddress : 'allanjohn.valiente@gmail.com',
        fullName  : 'Allan John Valiente',
        address1 : '2121 Lake Shore Blvd West',
        address2: '',
        city: 'Etobicoke',
        province: 'Ontario',
        postalCode: 'M8V 4E9'
    }})
  }
  formSubmit = e => {
    e.preventDefault();
    this.setState({isSubmit:true});
    //this.dummyData();
  }
  render(){
    return (
      <div className="App">
        <div id="dataForm">
          <form onSubmit={this.formSubmit}>
            <h3>Data Entry Form</h3>
            <div className="row">
              <div className="col">
                <label htmlFor="emailAddress" className="form-label">Email</label>
                <input type="text" className="form-control" name="emailAddress" required placeholder="Email email" onChange={this.handleChange}/>
              </div>
              <div className="col">
                <label htmlFor="fullName" className="form-label">Full Name</label>
                <input type="text" className="form-control" name="fullName" required placeholder="Full Name" onChange={this.handleChange}/>
              </div>
            </div>
            <div className="row"> 
              <div className="col">
                <label htmlFor="address1" className="form-label">Address</label>
                <input type="text" className="form-control" name="address1" required placeholder="Apartment, studio, or floor" onChange={this.handleChange}/>
              </div>
            </div>
            <div className="row"> 
              <div className="col">
                <label htmlFor="address2" className="form-label">Address 2</label>
                <input type="text" className="form-control" name="address2" placeholder="Apartment, studio, or floor" onChange={this.handleChange}/>
              </div>
            </div>
            <div className="row"> 
              <div className="col">
                <label htmlFor="city" className="form-label">City</label>
                <input type="text" className="form-control" name="city" required placeholder="" onChange={this.handleChange}/>
              </div>
              <div className="col">
                <label htmlFor="province" className="form-label">Province</label>
                <select className="form-select" name="province" required onChange={this.handleChange}>
                  <option value="">Choose...</option>
                  {
                    this.state.provinces.map( item => <option value={item}>{item}</option>)
                  }
                </select>
              </div>
              <div className="col">
                <label htmlFor="postalCode" className="form-label">Postal Code</label>
                <input type="text" className="form-control" name="postalCode" required placeholder="" onChange={this.handleChange}/>
              </div>
            </div>
            <button type="submit" className="btn btn-success">Submit</button>
          </form>     
        </div>
        {
          this.state.isSubmit ? 
            <DataEntry dataEntry={this.state.dataEntry}/>
          : null
        }
      </div>
    );
  }
}


