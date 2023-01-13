import React, { Component } from 'react'
import StoreService from '../services/StoreService'

class ViewStoreComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            store: {}
        }
    }

    componentDidMount(){
        StoreService.getStoreById(this.state.id).then( res => {
            this.setState({store: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Store Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Sucursal: </label>
                            <div> { this.state.store.sucursal }</div>
                        </div>
                        <div className = "row">
                            <label> Direccion: </label>
                            <div> { this.state.store.direccion }</div>
                        </div>
                        <div className = "row">
                            <label> Encargado: </label>
                            <div> { this.state.store.encargado }</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewStoreComponent
