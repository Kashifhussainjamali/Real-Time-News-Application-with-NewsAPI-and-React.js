export const Getdata=async()=>{
    const data=await fetch('https://newsapi.org/v2/top-headlines?' +
          'country=us&' +
          'apiKey=83e78d326d1040aea904be9745539149',{method:"GET"})
    console.log(data)

    return await data.json()
}
// Getdata()

// var url = 'https://newsapi.org/v2/top-headlines?' +
//           'country=us&' +
//           'apiKey=83e78d326d1040aea904be9745539149';

// var req = new Request(url);

// fetch(req)
//     .then(function(response) {
//         return response.json();  // Return the JSON object
//     })
//     .then(function(data) {
//         console.log(data);  // Log the API response data
//     })
//     .catch(function(error) {
//         console.log('Error: ', error);
//     });
