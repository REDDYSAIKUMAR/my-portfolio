let form = $('.formulario');
//console.log(form)

form.validate({
    errorElement: 'span', //por padrão, o error é 'label' mas span é mais visível 
    rules: { //regras de validação: 
        name: 'required', //required = é necessário!
        email: {
            required: true,  //objeto sempre passa pelo menos dois valores.
            email: true     // quando tem mais de um requisito, cria-se um objeto
        },
        phone: 'required',
        text: 'required'
    },
    messages: { //mensagens que estarão no span
        name: 'Please enter your name',
        email: {
            required: 'Please enter e-mail',
            email: 'Please enter valied email'
        },
        phone: 'please enetr your contact number',
        text: 'please write your  concern'
    }
});