import DS from 'ember-data';

export default DS.JSONSerializer.extend({
    primaryKey(response){
        return response.content.id;
    },
    serialize(snapshot,options){
        var json = this._super(...arguments);

        return json.content;
    }
   
});
