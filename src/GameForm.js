import React, { Component } from 'react';
import classnames from 'classnames';

class GameForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            _id: this.props.game ? this.props.game._id : null,
            title: this.props.game ? this.props.game.title : '',
            cover: this.props.game ? this.props.game.cover : '',
            errors: {},
            loading: false
        }
    }
    
    componentWillReceiveProps(nextProps) {
        this.setState({
            _id: nextProps.game._id,
            title: nextProps.game.title,
            cover: nextProps.game.cover,
        })
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
        const { _id, title, cover } = this.state;

        let errors = {};
        if (title === '') errors.title = "Can't be empty";
        if (cover === '') errors.cover = "Can't be empty";
        this.setState({ errors });

        const isValid = Object.keys(errors).length === 0;

        if (isValid) {
            this.setState({ loading: true });
            this.props.saveGame({ _id, title, cover })
                .catch((err) => err.response.json().then(({errors}) => this.setState({ errors, loading: false})));
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
                {form}
            </div>
        );
    }
}

export default GameForm;