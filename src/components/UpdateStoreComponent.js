import React, { Component } from 'react'
import StoreService from '../services/StoreService';

class UpdateStoreComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            sucursal: '',
            direccion: '',
            encargado: ''
        }
        this.changeSucursalHandler = this.changeSucursalHandler.bind(this);
        this.changeDireccionHandler = this.changeDireccionHandler.bind(this);
        this.UpdateStore = this.UpdateStore.bind(this);
    }

    componentDidMount(){
        StoreService.getStoreeById(this.state.id).then( (res) =>{
            let store = res.data;
            this.setState({sucursal: store.sucursal,
                direccion: store.direccion,
                encargado : store.encargado
            });
        });
    }

    UpdateStore = (e) => {
        e.preventDefault();
        let store = {sucursal: this.state.sucursal, direccion: this.state.direccion, encargado: this.state.encargado};
        console.log('store => ' + JSON.stringify(store));
        console.log('id => ' + JSON.stringify(this.state.id));
        StoreService.UpdateStore(store, this.state.id).then( res => {
            this.props.history.push('/store');
        });
    }
    
    changeSucursalHandler= (event) => {
        this.setState({sucursal: event.target.value});
    }

    changeDireccionHandler= (event) => {
        this.setState({direccion: event.target.value});
    }

    changeEncargadoHandler= (event) => {
        this.setState({encargado: event.target.value});
    }

    cancel(){
        this.props.history.push('/stores');
    }

    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center">Update Store</h3>
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Sucursal: </label>
                                            <input placeholder="Sucursal" name="sucursal" className="form-control" 
                                                value={this.state.sucursal} onChange={this.changeSucursalNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Direccion: </label>
                                            <input placeholder="Direccion" name="direccion" className="form-control" 
                                                value={this.state.direccion} onChange={this.changeDireccionHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Encargado: </label>
                                            <input placeholder="Encargado" name="encargado" className="form-control" 
                                                value={this.state.encargado} onChange={this.chan}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.UpdateStore}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default UpdateStoreComponent
