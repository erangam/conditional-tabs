document.addEventListener('DOMContentLoaded', function() {

    var element = document.querySelector('.pearson-header');
    var config = {
        user: { givenName: 'XXXXXXXXXXXXXXXX' },
        mode: 'Basic',
        courseItems: [
            { text: 'Physics', href: 'https://example.com/physics' },
            { text: 'Chemistry', href: 'https://example.com/physics' }
        ],
        courseNav: {
            heading: { text: 'Physics', href: 'https://example.com/physics' },
            items: [
                { text: 'Performance', href: 'https://example.com/performance' },
                { text: 'Assessments', href: 'https://example.com/assessments' }
            ]
        },
        onLogin: function () {
            alert('You signed in');
        },
        onLogout: function () {
            alert('You signed out');
        }

    };

    document.dispatchEvent(new CustomEvent('o.DOMContentLoaded', {
        detail: {
            element: element,
            config: config
        }
    }));
    document.dispatchEvent(new CustomEvent('o.InitContextualHelp'));

    setTimeout(function() {

        config.user = { givenName: 'Prototype User' };

        document.dispatchEvent(new CustomEvent('o.DOMContentLoaded', {
            detail: {
                element: element,
                config: config
            }
        }));
    }, 2000);



    // Event Listeners

    // Help menu
    document.addEventListener('oAppHeader.help.toggle', function () {
        console.log('oAppHeader.help.toggle');
    });

    // Sign out event
    document.addEventListener('oAppHeader.logout', function () {
        console.log('oAppHeader.logout');
    });

});
