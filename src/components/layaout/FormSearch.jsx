import React from 'react';
import Input from './Input';
import FontAwesome from 'react-fontawesome';

class FormSearch extends React.Component {
  state = {
    data: '',
    error: false,
    touch: false,
  };

  handleChange = (event) => {
    const { value } = event.target;

    const isValid = (value) => value.length > 1;

    this.setState({
      data: value,
      error: !isValid,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.state.data.length > 1
      ? console.log(this.props)
      : this.setState({ error: true, touch: true });
  };

  render() {
    const { data, error, touch } = this.state;
    return (
      <form onSubmit={this.handleSubmit} className="form-inline my-2 my-lg-0">
        <div className="input-group mb-3">
          <Input
            type="text"
            name="search"
            value={data}
            onChange={this.handleChange}
            onBlur={this.handleBlur}
            error={error}
            touch={touch}
            label={false}
            placeholder={'Search'}
          />
          <div className="input-group-append">
            <button className="btn btn-secondary" type="submit">
              <FontAwesome name="search" />
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default FormSearch;