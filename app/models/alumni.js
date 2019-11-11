import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({
    anggota_id:DS.attr('number'),
    nama:DS.attr('string'),
    alamat:DS.attr('string'),
    kontak:DS.attr('string'),
    email:DS.attr('string'),
    profesi:DS.attr('string'),
    pic:DS.attr(),
    created_by:'admin',
    created_terminal:'127.0.0.1',
    updated_by:'admin',
    updated_terminal:'127.0.0.1',
});
