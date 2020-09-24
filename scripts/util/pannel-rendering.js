define([
    '/scripts/util/local-storage.js',
    'jquery',
],
    function (storage, $) {
        let setUpRightPannel = function (indexTemplate) {
            let template = $(indexTemplate);

            let currentValue = storage.get('right_is_close', defaultValue = "false") == "true";
            console.log(`current: ${currentValue}`);
            if (currentValue) {
                template.find('#right-toggle').addClass('right-closing');
                template.find('#right').addClass('right-closing');
                template.find('#left').addClass('right-closing');
                template.find('#content').addClass('right-closing');
            } else {
                template.find('#right-toggle').removeClass('right-closing');
                template.find('#right').removeClass('right-closing');
                template.find('#left').removeClass('right-closing');
                template.find('#content').removeClass('right-closing');
            }

            $('body').empty().append(template);

            $('#right-toggle').click(function () {
                $('#right-toggle').toggleClass('right-closing');
                $('#right').toggleClass('right-closing');
                $('#left').toggleClass('right-closing');
                $('#content').toggleClass('right-closing');

                let newValue = $('#right-toggle').hasClass('right-closing');
                console.log(`new: ${newValue}`);
                storage.set('right_is_close', newValue);
            });
        }

        return setUpRightPannel;
    });
