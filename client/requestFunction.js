

export default async function getRequest(url){
    const res = await fetch(`http://projakakayka.ddns.net/${url}`,
        {method: 'GET'});
    return res;
    //projakakayka
    //http://projakakayka.ddns.net
}