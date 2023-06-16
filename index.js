$(document).ready(function(){
    var url = 'http://dev.farizdotid.com/api/daerahindonesia/provinsi';
    $.get(url, function(data, status) {
        for(i = 0; i < data.provinsi.length; i++){
            var option = '<option value = '+data.provinsi[i].id + ">" +data.provinsi[i].nama + "</option>";
            $('#provinsi').append(option);
        }
    })
    $('#provinsi').change(function(){
        var id_provinsi = $('#provinsi').val();
        console.log(id_provinsi);
        var url_kabupaten = 'http://dev.farizdotid.com/api/daerahindonesia/kota?id_provinsi=' + id_provinsi;
        $('#kabupaten').empty();
        $.get(url_kabupaten, function(data, status){
            console.log(data);
            for(i = 0; i < data.kota_kabupaten.length; i++){
                var option = '<option value = '+data.kota_kabupaten[i].id + ">" +data.kota_kabupaten[i].nama + "</option>";
                $('#kabupaten').append(option);
            }
        })
    })
});