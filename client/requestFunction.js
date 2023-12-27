

export default async function getRequest(url){
    const res = await fetch(`http://127.0.0.1:8000/${url}`,
        {method: 'GET'});
    return res;
}