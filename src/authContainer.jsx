import React, { Component } from 'react'

export default (Child) => {

    class Auth extends Component {

        UNSAFE_componentWillMount() {

            if (!localStorage.getItem('token'))
                this.props.history.push('/')                


        }

        render() {

            return <Child {...this.props} />
        }
    }

    return Auth

}