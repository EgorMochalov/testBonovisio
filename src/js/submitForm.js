let form = document.querySelector('.from')

form.addEventListener('submit', function (e) {

    e.preventDefault()

    let formData = new FormData(e.target)

    if (formData.get('name') == '') {
        e.target.querySelector("[name='name']").classList.add('error')
    }

    else {
        e.target.querySelector("[name='name']").classList.remove('error')
    }

    if (formData.get('mail') == '' || !formData.get('mail').toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
        e.target.querySelector("[name='mail']").classList.add('error')
    }

    else {
        e.target.querySelector("[name='mail']").classList.remove('error')
    }

    if (formData.get('message') == '') {
        e.target.querySelector("[name='message']").classList.add('error')
    }

    else {
        e.target.querySelector("[name='message']").classList.remove('error')
    }

    if (formData.get('name') != '' && formData.get('mail') != '' && formData.get('message') != '' && formData.get('mail').toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
        console.log("name: " + formData.get('name') + " " + "mail: " + formData.get('mail') + " " + "message: " + formData.get('message'))
    }

})