document.addEventListener('DOMContentLoaded', () => {
    /* Création AddEvtLstnr sur btn navbar et all-site */
    
    let buttonNavbar = document.getElementById("menu-btn");

    buttonNavbar.addEventListener('click', () => {

        let navbar = document.getElementById('navnav');
        let allSite = document.getElementById('all-site');
        if (navbar.classList.contains('opened-nav')) {
            navbar.classList.remove('opened-nav');
        }
        else {
            navbar.classList.add('opened-nav');
        }

        if (allSite.classList.contains('opened-nav')) {
            allSite.classList.remove('opened-nav');
        }
        else {
            allSite.classList.add('opened-nav');
        }
    })


    /* Etablissement des règles du formulaire et de l'ouverture de la modal */

    let formName = document.getElementById('form-name');
    let formMail = document.getElementById('form-mail');
    let formMsg = document.getElementById('form-msg');
    let submitBtn = document.getElementById('submit-btn')



    submitBtn.addEventListener('click', (evt) => {
        evt.preventDefault();

        let formNameValue = formName.value.trim();
        let formMailValue = formMail.value.trim();
        let formMsgValue = formMsg.value.trim();

        let hasError = false;
        let regName = new RegExp('^[a-zA-Z -]{1,30}$');
        let regMail = new RegExp('^[a-z0-9]+@[a-zA-Z_]+\.[a-zA-Z]{2,3}$');

        
        if( !regName.test( formNameValue ) ) {
            hasError = true;
            formNameValue = '';
            formName.classList.add('error')
        }

        if( !regMail.test( formMailValue ) ) {
            hasError = true;
            formMailValue = '';
            formMail.classList.add('error')
        }

        if(formMsgValue.length <= 0) {
            formMsg.classList.add('error');
            hasError = true;
        }

        if( hasError ) return;
        
            let modal = document.getElementById('modal');
            modal.classList.remove('closed-modal');

    
        formName.value = formMail.value = formMsg.value = '';


        return;

    })

    /* Fermeture de la modal */

    let modalBtn = document.getElementById('modal-btn');
    let modal = document.getElementById('modal');

    modalBtn.addEventListener('click', () => {
        modal.classList.add('closed-modal')
    })




    /* Reset des inputs du form au click */

    const handlerRemoveError = function(){
        if (!this.classList.contains('error')) return;
        this.value = '';
        this.classList.remove('error');
    }  

    formName.addEventListener('focus', handlerRemoveError)
    formMail.addEventListener('focus', handlerRemoveError)
    formMsg.addEventListener('focus', handlerRemoveError)

})
