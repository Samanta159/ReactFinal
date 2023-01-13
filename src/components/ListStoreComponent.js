import React, { Component } from 'react'
import StoreService from '../services/StoreService'

class ListStoreComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            stores: []
        }
        this.addStore = this.addStore.bind(this);
        this.editStore = this.editStore.bind(this);
        this.deleteStore = this.deleteStore.bind(this);
    }

    deleteStore(id){
        StoreService.deleteStore(id).then( res => {
            this.setState({stores: this.state.stores.filter(store => store.id !== id)});
        });
    }
    viewStore(id){
        this.props.history.push(`/view-store/${id}`);
    }
    editStore(id){
        this.props.history.push(`/add-store/${id}`);
    }

    componentDidMount(){
        StoreService.getStores().then((res) => {
            this.setState({ stores: res.data});
        });
    }

    addStore(){
        this.props.history.push('/add-store/_add');
    }

    render() {
        return (
            <div>
                 <h2 className="text-center">Store List</h2>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.addStore}> Add Store</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> Sucursal</th>
                                    <th> Direccion</th>
                                    <th> Encargado</th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.stores.map(
                                        store => 
                                        <tr key = {store.id}>
                                             <td> {store.sucursal} </td>   
                                             <td> {store.direccion}</td>
                                             <td> {store.encargado}</td>
                                             <td>
                                                 <button onClick={ () => this.editStore(store.id)} className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteStore(store.id)} className="btn btn-danger">Delete </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewStore(store.id)} className="btn btn-info">View </button>
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>

            </div>
        )
    }
}

export default ListStoreComponent
