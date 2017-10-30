import React, { Component } from 'react';
import classnames from 'classnames';

class GameForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            cover: '',
            errors: {}
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
    }

    render() {
        const { title, cover, errors } = this.state;
        return (
            <form className="ui form" onSubmit={this.handleSubmit}>
                <h1>Add new game</h1>

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
    }
}

export default GameForm;