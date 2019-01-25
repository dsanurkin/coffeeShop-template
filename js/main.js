$(document).ready(function() {
    $('#multiscroll').multiscroll({
        anchors: ['first', 'second', 'third'],
        menu: '#menu',
        navigation: true,
        navigationTooltips: ['One', 'Two', 'Three']
    });
    
});