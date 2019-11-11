import Controller from '@ember/controller';

export default Controller.extend({  
    actions:{
        model(){
        console.log('+--- edit action called in edit controller');
        let id = this.get('anggota');
        // return $.getJSON("http://localhost:8181/com.shalahuddin.api/anggota/"+id).then(function(json){
        //     if(json.info.status==200){
        //         return json.content[0];
        //     }else{
        //         this.set('errorMessage',json.info.detailmessage==null?json.errorMessage:json.info.detailmessage);
        //     }
        console.log('+--- id: '+id);
        this.transitionToRoute('anggota/edit',id);
        }
    }
});
