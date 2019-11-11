import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({
    nama:DS.attr('string'),
    alamat:DS.attr('string'),
    angkatan:DS.attr('string'),
    prodi:DS.attr('string'),
    kontak:DS.attr('string'),
    email:DS.attr('string'),
    keanggotaan:DS.attr('string'),
    tanggal_lahir:DS.attr('Date'),
    kota_lahir:DS.attr('string'),
    is_active:DS.attr('boolean',{ defaultValue: true }),
    universitas:DS.attr('string'),
    pic:DS.attr(),
    created_by:'admin',
    created_terminal:'127.0.0.1',
    updated_by:'admin',
    updated_terminal:'127.0.0.1',
});
