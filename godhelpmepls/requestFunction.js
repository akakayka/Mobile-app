

async function getRequest(url){
    const res = await fetch(`https://b25d-94-140-135-116.ngrok-free.app/${url}`,
        {method: 'GET', headers: new Headers({"ngrok-skip-browser-warning": "69420",})});
    return res;
}