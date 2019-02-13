import React from 'react';
import { Redirect } from 'react-router-dom'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

import { productDataFields } from '../productDataFields';

class AddProduct extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      productData: null
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      productData: Object.assign({}, this.state.productData, { [event.target.name]: event.target.value })
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    fetch('http://localhost:8000/add/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.state.productData)
    })
    window.location = '/'
  }

  render () {
    return (
      <Form>
        {
          productDataFields.map((field) => {
            switch(field.type) {
              case 'text':
              case 'number': return (
                <FormGroup key={field.title}>
                  <Label>{field.label}</Label>
                  <Input placeholder={field.placeholder} type={field.type} name={field.name} onChange={this.handleChange} />
                </FormGroup>
              )
              case 'select': return (
                <FormGroup key={field.title}>
                  <Label>{field.label}</Label>
                  <Input type={field.type} name={field.name} onChange={this.handleChange}>
                    {field.items.map((item, index) => (
                      <option key={index} selected='selected'>{item}</option>
                    ))}
                  </Input>
                </FormGroup>
              )
            }
          }
        )}
        <Button color='primary' onClick={this.handleSubmit}>Submit</Button>
      </Form>
    );
  }
}
export default AddProduct
