import Component from '@ember/component';
import $ from 'jquery';
import { timingSafeEqual } from 'crypto';

export default Component.extend({
    init(){
        this._super(...arguments);
    this.set('model', null);
    }
    // actions:{      
    //     createAnggota:function(anggota){
    //         //  let x = this.modelFor(this.model);
    //         let x = this.get('model');
    //     console.log('+--- edit action called in form controller');
    //     $.ajax({
    //         type: "POST",
    //         url:"http://localhost:8181/com.shalahuddin.api/anggota/create",
    //         data:JSON.stringify({x})}).then(function(json){
    //         if(json.info.status!=200){
    //             this.set('errorMessage',json.info.detailmessage==null?json.errorMessage:json.info.detailmessage);
    //         }
    //     }).catch(function(error){

    //     });
    //     // this.transitionTo('/anggota/list')
    // }
// }
});
