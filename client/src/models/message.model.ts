import { types } from 'mobx-state-tree';

export const Message = types.model({
    user_nickname: types.optional( types.string, "" ),
    text: types.optional( types.string, "" )
})
.actions( self => ({
    setText( newText: string ){
        self.text = newText;
        console.log( self.text );
    }
}))

