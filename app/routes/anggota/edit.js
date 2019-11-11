import Route from '@ember/routing/route';
import $ from 'jquery';

export default Route.extend({
    model(){
        console.log('+--- edit action called in edit route');
        let id = this.get('anggota');
        return $.getJSON("http://localhost:8181/com.shalahuddin.api/anggota/"+id).then(function(json){
            if(json.info.status==200){
                return json.content[0];
            }else{
                this.set('errorMessage',json.info.detailmessage==null?json.errorMessage:json.info.detailmessage);
            }
        });
    }
});
