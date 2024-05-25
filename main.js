$(document).ready(function() {
    $('#activity-form').on('submit', function(event) {
        event.preventDefault();
        const activityName = $('#activity-input').val();
        if (activityName) {
            const newActivity = $('<li></li>').text(activityName);
            $('#activity-list').append(newActivity);
            $('#activity-input').val('');
        }
    });

    $('#activity-list').on('click', 'li', function() {
        $(this).toggleClass('completed');
    });
});