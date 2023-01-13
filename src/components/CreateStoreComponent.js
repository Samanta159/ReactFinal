import React, { Component } from 'react'
import StoreService from '../services/StoreService';

class CreateStoreComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
            sucursal: '',
            direccion: '',
            encargado: ''
        }
        this.changeSucursalHandler = this.changeSucursalHandler.bind(this);
        this.changeDireccionHandler = this.changeDireccionHandler.bind(this);
        this.saveOrUpdateStore = this.saveOrUpdateStore.bind(this);
    }

    // step 3
    componentDidMount(){

        // step 4
        if(this.state.id === '_add'){
            return
        }else{
            StoreService.getStoreById(this.state.id).then( (res) =>{
                let store = res.data;
                this.setState({sucursal: store.sucursal,
                    direccion: store.direccion,
                    encargado : store.encargado
                });
            });
        }        
    }
    saveOrUpdateStore = (e) => {
        e.preventDefault();
        let store = {sucursal: this.state.sucursal, direccion: this.state.direccion, encargado: this.state.encargado};
        console.log('store => ' + JSON.stringify(store));

        // step 5
        if(this.state.id === '_add'){
            StoreService.createStore(store).then(res =>{
                this.props.history.push('/stores');
            });
        }else{
            StoreService.updateStore(store, this.state.id).then( res => {
                this.props.history.push('/stores');
            });
        }
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

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Add Store</h3>
        }else{
            return <h3 className="text-center">Update Store</h3>
        }
    }
    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                {
                                    this.getTitle()
                                }
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Sucursal: </label>
                                            <input placeholder="Sucursal" name="sucursal" className="form-control" 
                                                value={this.state.sucursal} onChange={this.changeSucursalHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Direccion: </label>
                                            <input placeholder="Direccion" name="direccion" className="form-control" 
                                                value={this.state.direccion} onChange={this.changeDireccionHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Encargado: </label>
                                            <input placeholder="Encargado" name="encargado" className="form-control" 
                                                value={this.state.encargado} onChange={this.changeEncargadoHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.saveOrUpdateStore}>Save</button>
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

export default CreateStoreComponent
