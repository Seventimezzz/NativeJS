// async применяется к асинхроному коду чтобы он подождал пока действия в await закончатся
const postData = async (url, data) => {
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: data
    });
  
  // promis из fetch переврдим в json
    return await res.json();
  };


  // из-за библиотеки axios не обязательно
  async function getResource (url) {
    let res = await fetch(url);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    }
    
    return await res.json();
  }

  export{postData};
  export {getResource};