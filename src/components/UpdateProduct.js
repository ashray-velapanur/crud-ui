import React from 'react';
import { Redirect } from 'react-router-dom'
import { Button, Form, FormGroup, Label, Input, FormText, ButtonGroup } from 'reactstrap';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

import { productDataFields } from '../productDataFields';

class UpdateProduct extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      productData: props.productData
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleChange(event) {
    this.setState({
      productData: Object.assign({}, this.state.productData, { [event.target.name]: event.target.value })
    });
  }

  handleDelete(event) {
    event.preventDefault();
    fetch('http://localhost:8000/delete/', {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.state.productData)
    })
    window.location = '/'
  }

  handleSubmit(event) {
    event.preventDefault();
    fetch('http://localhost:8000/update/', {
      method: 'PUT',
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
          productDataFields.map((field, index) => {
            switch(field.type) {
              case 'text':
              case 'number': return (
                <FormGroup key={index}>
                  <Label>{field.label}</Label>
                  <Input value={this.state.productData[field.name]} placeholder={field.placeholder} type={field.type} name={field.name} onChange={this.handleChange} />
                </FormGroup>
              )
              case 'select': return (
                <FormGroup key={index}>
                  <Label>{field.label}</Label>
                  <Input value={this.state.productData[field.name]} type={field.type} name={field.name} onChange={this.handleChange}>
                    {field.items.map((item) => (
                      <option>{item}</option>
                    ))}
                  </Input>
                </FormGroup>
              )
            }
          }
        )}
        <div>
          <Button style={{marginRight: '12px'}} color='primary' onClick={this.handleSubmit}>Submit</Button>
          <Button color='danger' onClick={this.handleDelete}>Delete</Button>
        </div>
      </Form>
    );
  }
}
export default UpdateProduct
