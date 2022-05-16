const redirecturl = () =>{
    const redirectUrl = 'http://127.0.0.1:3000/authorized&code_challenge_method=S256&code_challenge=7tYTZqzp4bzqfm562o7RwrvXt1nZiJE4IqgczqliyO8';
    return `http://localhost:8080/oauth2/authorize?client_id=client&scope=openid&response_type=code&redirect_uri=${redirectUrl}`;
}

export default redirecturl;