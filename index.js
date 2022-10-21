fetch('https://api.github.com/users/cleison990')
.then(response => {
    return response.json();
})
.then(body => {
    console.log(`seu login é ${body.login} e seu id é ${body.id}`)
    const text = JSON.stringify(body.login)
    document.body.innerText = text
})
.catch(err =>{
    console.log(err)
})


