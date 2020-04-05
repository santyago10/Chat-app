import axios from 'axios';

export class Service{

    private path = "http://localhost:5000";

    public async getMessages(){
        let response = await axios.get( `${ this.path }/messages` );
        return response.data;
    }

    public async sendMessage( data ){
        let response = await axios.post( `${ this.path }/messages`, data );
        return response.data;
    }
}