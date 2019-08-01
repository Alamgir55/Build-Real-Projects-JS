(function(global, $){

    let Greetr = function(firstName, lastName, language){
        return new Greetr.init(firstName, lastName, language);
    }

    let supportedLangs = ['en', 'es'];

    let greeting = {
        en: 'Hello',
        es: 'Hola'
    };

    let formalGreeting = {
        en: 'Greeting',
        es: 'Saludos'
    };

    let logMessages = {
        en: 'Logged in',
        es: 'Inicio sesion'
    };

    Greetr.prototype = {

        fullName: function(){
            return this.firstName + ' ' + this.lastName;
        },
        validate: function(){
            if(supportedLangs.indexOf[this.language] === -1){
                throw 'Invalid language';
            }
        },
        greeting: function(){
            return greeting[this.language] + ' ' + this.firstName + '!';
        },
        formalGreeting: function(){
            return formalGreeting[this.language] + ', ' + this.fullName();
        },
        greet: function(formal){
            let msg;
            if(formal){
                msg = this.formalGreeting();
            }else{
                msg = this.greeting();
            }
            if(console){
                console.log(msg);
            }
            return this;
        },
        log: function(){
            if(console){
                console.log(logMessages[this.language] + ': ' + this.fullName());
            }
            return this;
        },

        setLang: function(lang){
            this.language = lang;

            this.validate();
            return this;
        },

        HTMLGreeting: function(selector, formal){
            if(!$){
                throw 'jQuery not loaded';
            }
            if(!selector){
                throw 'Missing jQuery selector';
            }
            let msg;
            if(formal){
                msg = this.formalGreeting();
            }else{
                msg = this.greeting();   
            }
            $(selector).html(msg);

            return this;
        }

    };

    Greetr.init = function(firstName, lastName, language){
        this.firstName = firstName || '';
        this.lastName = lastName || '';
        this.language = language || 'en';

        this.validate();
    }

    Greetr.init.prototype = Greetr.prototype;

    global.Greetr = global.G$ = Greetr;
    
}(window, jQuery));