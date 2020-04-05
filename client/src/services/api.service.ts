import axios from 'axios';

export class Service{

    private path = "http://localhost:5000";

    public async getMessages(){
        let response = await axios.get( `${ this.path }/messages`, { withCredentials: true } );
        return response.data;
    }

    public async sendMessage( data ){
        let response = await axios.post( `${ this.path }/messages`, data );
        return response.data;
    }

    public async login ( data ){
        let response = await axios.post( `${ this.path }/login`, data, { withCredentials: true } );
        return response;
    }

    public async isAuthenticated(){
        let response = await axios.get( `${this.path}/login `, { withCredentials: true } );
        return response.data;
    }

    public async logout(){
        let response = await axios.get( `${this.path}/logout`, { withCredentials: true } );
        return response.data;
    }
}