import React, { Component } from 'react';
import { Link} from 'react-router-dom';
import '../Profile/App.css';
import Navbar from '../navbar/navbar';
import axios from 'axios';


class Createprofile extends Component {
  constructor() {
    super();
    this.state = {
        name: '',
        branch:'',
        club:'',
        links:'',
        skills:'',
        year:'',
        description:'',
        userId:''
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const data = {
      name: this.state.name,
      branch: this.state.branch,
      club: this.state.club,
      links: this.state.links,
      skills: this.state.skills,
      year: this.state.year,
      description: this.state.description,
      userId: this.state.userId
    };

    axios
      .post('http://localhost:4000/profiles', data)
      .then(res => {
        this.setState({
          name: '',
          branch:'',
          club:'',
          links:'',
          skills:'',
          year:'',
          description:'',
          userId:''

        })
        this.props.history.push('/');
      })
      .catch(err => {
        console.log("Error in Profiles!");
      })
  };

  render() {
    return (
      <div className="CreateBook">
        <Navbar />
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <br />
              <Link to="/showprofile" className="btn btn-outline-warning float-left">
                  Show Profile List
              </Link>
            </div>
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Add Profile</h1>
              <p className="lead text-center">
                  Create new Profile
              </p>

              <form noValidate onSubmit={this.onSubmit}>
                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='name'
                    name='name'
                    className='form-control'
                    value={this.state.name}
                    onChange={this.onChange}
                  />
                </div>
                <br />

                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='branch'
                    name='branch'
                    className='form-control'
                    value={this.state.branch}
                    onChange={this.onChange}
                  />
                </div>

                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='club'
                    name='club'
                    className='form-control'
                    value={this.state.club}
                    onChange={this.onChange}
                  />
                </div>

                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='links'
                    name='links'
                    className='form-control'
                    value={this.state.links}
                    onChange={this.onChange}
                  />
                </div>

                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='skills'
                    name='skills'
                    className='form-control'
                    value={this.state.skills}
                    onChange={this.onChange}
                  />
                </div>
                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='year'
                    name='year'
                    className='form-control'
                    value={this.state.year}
                    onChange={this.onChange}
                  />
                  <div className='form-group'>
                    <input
                    type='text'
                    placeholder='description'
                    name='description'
                    className='form-control'
                    value={this.state.description}
                    onChange={this.onChange}
                  />
                  </div>
                  <div className='form-group'>
                     <input
                    type='text'
                    placeholder='userId'
                    name='userId'
                    className='form-control'
                    value={this.state.userId}
                    onChange={this.onChange}
                  />
                  </div>
                </div>

                <input
                    type="submit"
                    className="btn btn-outline-warning btn-block mt-4"
                    onChange={this.onChange}
                />
              </form>
          </div>
          <div>
                <svg class="waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
                    <defs>
                        <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
                    </defs>
                    <g class="parallax">
                        <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7" />
                        <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
                        <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
                        <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
                    </g>
                </svg>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Createprofile;