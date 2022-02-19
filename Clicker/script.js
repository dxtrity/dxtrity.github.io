let count = 0

$(document).ready(function () {
    $('.button').on('click', function () {
        count += 1
        $('.text').html(`${count} Clicks`);
    });
});