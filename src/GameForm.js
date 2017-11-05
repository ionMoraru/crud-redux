import React, { Component } from 'react';
import classnames from 'classnames';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { saveGame} from './actions/games.actions';

class GameForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            cover: '',
            errors: {},
            loading: false,
            done: false
        }
    }
    
    handleChange = (e) => {
        const { name, value } = e.target;
        if (!!this.state.errors[name]) {
            let errors = Object.assign({}, this.state.errors);
            delete errors[name];
            this.setState({ 
                [name]: value,
                errors
            });
        } else {
            this.setState({ [name]: value });
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { title, cover } = this.state;

        let errors = {};
        if (title === '') errors.title = "Can't be empty";
        if (cover === '') errors.cover = "Can't be empty";
        this.setState({ errors });

        const isValid = Object.keys(errors).length === 0;

        if (isValid) {
            this.setState({ loading: true });
            this.props.saveGame({ title, cover }).then(
                () => { this.setState({ done: true })},
                (err) => err.response.json().then(({errors}) => this.setState({ errors, loading: false }))
            );
        }
    }

    render() {
        const { title, cover, errors, loading, done } = this.state;
        const form = (
            <form className={classnames('ui', 'form', { loading: loading })} onSubmit={this.handleSubmit}>
                <h1>Add new game</h1>
                {!!errors.global && <div className="ui negative message"><p>{errors.global}</p></div>}

                <div className={classnames('field', { error: !!errors.title })}>
                    <label htmlFor="title">Title</label>
                    <input
                        name="title"
                        value={title}
                        onChange={this.handleChange}
                        id="title"
                    />
                    <span>{errors.title}</span>
                </div>
                <div className={classnames('field', { error: !!errors.cover })}>
                    <label htmlFor="cover">Cover URL</label>
                    <input
                        name="cover"
                        value={cover}
                        onChange={this.handleChange}
                        id="cover"
                    />
                    <span>{errors.cover}</span>
                </div>
                <div className="field">
                    {cover !== '' && <img src={cover} alt="cover" className="ui small bordered image" />}
                </div>
                <div className="field">
                    <button className="ui primary button">Save</button>
                </div>
            </form>
        );
        return (
            <div>
                { done ? <Redirect to='/games' /> : form}
            </div>
        );
    }
}

export default connect(null, { saveGame })(GameForm);