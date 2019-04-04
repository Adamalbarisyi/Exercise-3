
function tampilkanResult(){
      $.getJSON('https://swapi.co/api/films/',function(data){
          let results = data.results;
          $.each(results,function(i,data){
              $('#table-list').append(`
                <tr>
                    <td>`+ data.title +`</td>
                    <td>`+ data.director +`</td>
                    <td>`+ data.episode_id +`</td>
                    <td>`+ data.opening_crawl +`</td>
                    <td>`+ data.producer +`</td>
                    <td>`+ data.release_date +`</td>

                </tr>  

              `);
          });
      });
    }
tampilkanResult();

$(document).ready(function(){
  $("#search").on("keyup", function() {
    //   console.log($(this).val().toLowerCase());
      
    var value = $(this).val().toLowerCase();
    
    $("#table-list tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});