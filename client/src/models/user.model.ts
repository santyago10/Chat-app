import { types } from 'mobx-state-tree';

export const User = types.model({
    nickname: types.optional( types.string, "john" )
})
.actions( self => ({
    setNickname( newNickname ){
        self.nickname = newNickname;
        console.log(self.nickname);
    }
}))

export const userModel = User.create();