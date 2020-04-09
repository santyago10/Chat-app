import { types, unprotect } from 'mobx-state-tree';
import { User } from '../models/user.model';
import { Service } from '../services/api.service';

let service: Service = new Service();

export const Store = types.model({
    nickname: types.optional( types.string, "" ),
    password: types.optional( types.string, "" )
})
.actions( self => ({
    async login( e, inputNickname, inputPassword ){
        e.preventDefault();

        let data = {
            nickname: inputNickname,
            password: inputPassword
        }

        let response = await service.login( data );

        if( !response  ){
            alert("Uncorrect nickname or password");
        }        
        else{
        window.location.href = "/";
        }
    },

    async isAuthenticated(){
        let result = await service.isAuthenticated();
        if( result )
        self.nickname = result.nickname;
        else
        window.location.href = '/error';

    },

    async logout(){
        await service.logout();
        window.location.href = "/login";
    }
}) )

export const userStore = Store.create({});
unprotect( userStore );

export const userModel = User.create({});
