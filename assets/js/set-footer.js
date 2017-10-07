// set-footer.js

$.getJSON('/json/footer-data.json', function (data) {
    $('#footer-info').append(
        $('<p>').attr('id', 'powered-by').html('Powered by ')
    );
    for (var i in data.powered_by) {
        if (i < 1) {
            $('#powered-by').append(
                $('<a>').attr('href', data.powered_by[i].link).attr('target', '_blank').html(data.powered_by[i].name)
            );
        }
        else {
            $('#powered-by').append(' &middot; ').append(
                $('<a>').attr('href', data.powered_by[i].link).attr('target', '_blank').html(data.powered_by[i].name)
            );
        };
    };
    $('#footer-info').append(
        $('<p>').html(function () {
            return '&copy; 2016-' +  new Date().getFullYear() + ' ';
        }).append(data.organization.suffix).append(
            $('<a>').attr('href', data.organization.link).attr('target', '_blank').html(data.organization.name)
        )
    );
});
