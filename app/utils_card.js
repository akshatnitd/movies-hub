var cardHelpers={

  getSearchCard : function(title) {
  var ans = [];
  title=title.trim();

  var searchurl="http://www.omdbapi.com/?t="+title+"&y=&plot=full&r=json";

  $.ajax({
        type: "GET",
        url: searchurl,
        async: false,
        dataType: "json",
        success: function(response,xhr) {
          if(xhr=='success')
            {
              ans=response;
            }
        },
         error: function(xhr){
          ans=JSON.parse(xhr.responseText);
          console.log('Error : ' + xhr.status + ' '+xhr.statusText);
        }
    });
    return ans;
  },
}


export default cardHelpers;