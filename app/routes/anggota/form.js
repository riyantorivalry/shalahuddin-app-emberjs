import Route from '@ember/routing/route';
import $ from 'jquery';
import Ember from 'ember';

export default Route.extend({

//     actions:{
//         // let x = this.get('model'),
//         createAnggota:function(model){
//         console.log('+--- edit action called in form route');
//         $.ajax({
//             type: "POST",
//             url:"http://localhost:8181/com.shalahuddin.api/anggota/create",
//             data:JSON.stringify({model})}).then(function(json){
//             if(json.info.status!=200){
//                 this.set('errorMessage',json.info.detailmessage==null?json.errorMessage:json.info.detailmessage);
//             }
//         }).catch(function(error){

//         });
//         // this.transitionTo('/anggota/list')
//     }
// }
model() {
    return this.store.createRecord('anggota');
  }
});
