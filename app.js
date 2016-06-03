(function(){
    var app = angular.module('Wix Salon', ['firebase']);

    app.controller('cutController', function(){
        this.services = cuts;
    });

    app.controller('highlightController', function(){
        this.services = highlights;
    });

    app.controller('servicePanelController', function () {
        this.tab = 1;

        this.selectTab = function (setTab) {
            this.tab = setTab;
        };
        
        this.isSelected = function (checkTab) {
            return this.tab === checkTab;
        };
    });

    app.controller('headerPanelController', function () {
        this.tab = 1;

        this.selectTab = function (setTab) {
            this.tab = setTab;
        };

        this.isSelected = function (checkTab) {
            return this.tab === checkTab;
        };
    });

    app.controller('registrationController', ['$scope', '$firebaseAuth', function ($scope, $firebaseAuth) {

        var config = {
            apiKey: "AIzaSyDwxYBPo1MoQrGZVvtuCU-evf5Uo_f3_oY",
            authDomain: "myfirstangular-a1460.firebaseapp.com",
            databaseURL: "https://myfirstangular-a1460.firebaseio.com",
            storageBucket: "myfirstangular-a1460.appspot.com",
        };
        firebase.initializeApp(config);

        var rootRef = firebase.ref();

        var auth = $firebaseAuth(rootRef);

        $scope.registrationMsgFunc = function () {
            auth.$createUser({
                email: $scope.user.email,
                firstName: $scope.user.firstName,
                lastName: $scope.user.lastName,
                password: $scope.user.password
            }).then(function(regUser){
                $scope.registrationMsg = "Welcome " + $scope.user.firstName;
            }).catch(function (error) {
                $scope.registrationMsg = error.message;
            });
        };

    }]);

    app.controller('reviewFormController', function () {
        this.allReviews = [];

        this.review = {}; //property
        
        this.addReview = function () {
            this.allReviews.push(this.review);
            this.review = {};
        };
    });
    
    app.controller('makeAnAppointmentController', function () {
        this.choice = {};
    })

    app.directive('serviceDisplay', function () {
        return {
            restrict: 'E',
            templateUrl: "services-display.html"
        };
    });

    app.directive('serviceDisplayAtt', function () {
        return{
            restrict: 'A',
            templateUrl: "services-display.html"
        };
    });
    
    var cuts = [
        {
            name: 'WOMEN’S CUT & BLOW-DRY',
            price: '65',
            duration: '1 hour 30 min.',
            description: 'Every appointment at Salon U starts with a beverage service and a professional consultation. ' +
            'Not only will your stylist suggest a cut that will compliment you, they will also advise how a cut will look on you and how it will grow.' +
            ' Our stylists are trained to work with all hair types using only the best quality tools, sheers and scissors for precision. ' +
            'Whether your hair is too fine, too short, too thin or too damaged, ' +
            'we encourage you to let one of our stylists suggest a hairstyle that will compliment your style and lifestyle.' +
            ' They can accommodate angled cuts, stacked cuts, layered cuts or blunt cuts, executed with precision and care.' +
            'Before you settle for a Hair Cut service, you will be treated to a luxurious shampoo and conditioner with stress relieving Aveda products that is perfect for your hair and scalp. ' +
            'Women’s Hair Cut will finish with a blow dry and style.' +
            'At Salon U, we pride our self on treating each client as if you’re our only client and believe that beauty is individual.',
            appointment: true
        },
        {
            name:'WOMEN’S WET CUT',
            price:'55',
            duration: '1 hour',
            description:'Every appointment begins with a beverage service and a consultation by one of our premier hair stylists.' +
            'We understand that many women have demanding schedules and a lifestyle that is mobile. If you’re one of those whose daily ' +
            'routine requires being constantly mobile we offer a wet cut, at a reduced price, for our clients who are on have time restraints. ' +
            'Although we prefer to see the finished cut by styling your hair, we realize there will be occasion that warrants a quick Wet Cut without blow dry or styling. ' +
            'If your time only allows a Wet Cut appointment, we will advise how to achieve the style at home and recommend Aveda hair care products suited to your particular type ' +
            'hair so that you’re guaranteed to have a good hair day, every day.',
            appointment: true
        },
        {
            name: 'MEN’S CUT',
            price: '40',
            duration: '30 min',
            description: 'Salon U’s stylists will deliver an exceptional haircut. While most people don’t realize a short cut is much a more difficult cut because it’s not as ' +
            'forgiving Before cutting we will consult and suggest a flattering cut that will suit your personal style and lifestyle. Salon U has an extensive male clientele and' +
            ' master stylists who will work to achieve a haircut that commiserates with your hair’s texture to fit your look and lifestyle.',
            appointment: true
        }
    ];

    var highlights = [
        {
            name: 'HIGHLIGHTS & LOWLIGHTS',
            price: '140',
            duration: '2 hours 30 min',
            description: 'For a subtle effect, but dramatic change, let our color technician add dimension to your strands with ' +
            'highlights and lowlights. If you’re looking to brighten with highlights, or to add depth with lowlights, let our colorist can give your ' +
            'tresses the natural effect. Our color artist will create a palette to compliment your skin tone and skillfully apply so that highlights or lowlights ' +
            'will naturally blend to compliment your hair and skin. ' +
            'We understand that every individual head of hair is unique and the manner it absorbs color is individual. ' +
            'From highlights, to lowlights, chunk foils to full foils, part foils to partial foils and a variety of other ways, our colorist ' +
            'will consult with you the color and the method that will best benefit your hair for results that will accentuate your beauty, and the color that you’ll love. ' +
            'At Salon U we don’t think that there is a one-set prescription for everyone, highlights are tailored to the individual. ' +
            'Color pricing varies based on length/texture of hair and time requirements and supplies for each specific color service.',
            appointment: true
        },
        {
            name: 'HIGHLIGHTS & BASE COLOR ',
            price: '180',
            duration: '2 hours',
            description: 'Your highlight session will start with a consultation so that our color expert can study your natural color. ' +
            'At Salon U we always use your base color by the premise to build on pulling from a spectrum of color options The choice of color we make depends on your ' +
            'shape of your face, features and your personal preferences and style. If it’s time to reinvent yourself through a new color let us enhance your color by creating ' +
            'a look that will be gratifying to you and unique for you. ' +
            'At Salon U we don’t think that there is a one-set prescription for everyone, highlights and base color is tailored to the individual.' +
            ' Color pricing varies based on length/texture of hair and time requirements and supplies for each specific color service.',
            appointment: true
        },
        {
            name: 'SOLID COLOR ',
            price: '80',
            duration: '1 hour 30 min',
            description: 'Every color appointment starts with a consultation. Salon U’s skilled colorist will combine professional products to tailor a' +
            ' hair color that is a perfect match for you. We will ensure a color that not only suits your skin tone but suggest an ideal match for your lifestyle, ' +
            'personality and profession. Whether you’re looking to drastically change your hair color or masking new gray. The right hair color can give confidence, and ' +
            'make you feel good about your appearance. We also offer color correction services. Our color artist will create new, vibrant colors that are more suitable for you.' +
            ' At Salon U we don’t think that there is a one-set prescription for everyone, colors are tailored to the individual. ' +
            'Color pricing varies based on length/texture of hair and time requirements and supplies for each specific color service. At Salon U, we ' +
            'offer an entire line of color-treated Aveda hair products that will prolong your color and protect your hair.',
            appointment: true
        }
    ];
})();