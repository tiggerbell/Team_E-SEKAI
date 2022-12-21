const Auth = ()=>{

    const authSubmitHandler = async event =>{
        event.preventDefault();

        fetch('http://localhost:8000/api/users/singup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body : JSON.stringify({
                name,
                email,
                password
            })
        });

        auth.login();
    }
    return
}