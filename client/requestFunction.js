

export default async function getRequest(url){
    const res = await fetch(`https://08d0-31-28-113-222.ngrok-free.app/${url}`,
        {method: 'GET', headers: new Headers({
                "ngrok-skip-browser-warning": "69420",
            })});
    return res;
    //projakakayka
    //http://projakakayka.ddns.net
}