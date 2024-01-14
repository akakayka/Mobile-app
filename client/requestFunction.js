

export default async function getRequest(url){
    const res = await fetch(`http://akakayka231243.ddns.net/${url}`,
        {method: 'GET'});
    return res;
    //projakakayka
    //http://projakakayka.ddns.net
}