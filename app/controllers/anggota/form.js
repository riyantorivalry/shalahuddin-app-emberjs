import Controller from '@ember/controller';
import $ from 'jquery';

export default Controller.extend({
    actions:{     
        createAnggota(model){
        console.log(model);
        console.log('+--- edit action called in form controller');
        $.ajax({
            type: "POST",
            headers:{
                'Content-Type': 'application/json'
            },
            url:"http://localhost:8181/com.shalahuddin.api/anggota/create",
            data:JSON.stringify({
                nama : model.nama,
                alamat:model.alamat,
                angkatan:model.angkatan,
                prodi:model.prodi,
                kontak:model.kontak,
                email:model.email,
                keanggotaan:model.keanggotaan,
                tanggal_lahir:model.tanggal_lahir,
                kota_lahir:model.kota_lahir,
                is_active:model.is_active,
                universitas:model.universitas,
                created_by:'admin',
                created_terminal:'127.0.0.1',
                updated_by:'admin',
                updated_terminal:'127.0.0.1',
            })
        }).then(function(json){
            if(json.info.status!=200){
                this.set('errorMessage',json.info.detailmessage==null?json.errorMessage:json.info.detailmessage);
            }
        }).catch(function(error){ 

        });
        // this.transitionTo('/anggota/list')
    }
}
});
