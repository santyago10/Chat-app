import { types } from 'mobx-state-tree';

export const User = types.model({
    nickname: types.optional( types.string, "john" ),
    password: types.optional( types.string, "")
})
.actions( self => ({
    setNickname( newNickname ){
        self.nickname = newNickname;
    },

    setPassword( newPassword ){
        self.password = newPassword;
    },
}))

