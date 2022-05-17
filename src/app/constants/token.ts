const tokenUrl = (code:string) =>{

    const redirectUrl = `http://127.0.0.1:3000/authorized&grant_type=authorization_code&code=${code}&code_verifier=FZQmifV-mfRdzK4mfnzBGdE.H3~oW-hryYk67vtXpGgj7x6ZrqUb~sHISvaU2VAW0NmK3xNX9fnJitdWnhSur2YhF0eEGBN2rciStrT_aPtuHuZ-SxPU~CyX89gvHGAc`;
    return `https://idptr.bnsf.com/mga/sps/oauth/oauth20/token?client_id=T5GoOraW6DOa79fVXrA2&redirect_uri=${redirectUrl}`;
}

export default tokenUrl;