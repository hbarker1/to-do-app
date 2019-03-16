$(() => {
    const BASE_ID = 'appiKVLGJsMVX7wlJ'; // TODO Put your Base ID here 
    const Airtable = {
      API_KEY: 'keyDLKrik0ApWqzIJ',  // TODO Put your API_KEY here
      API: `https://api.airtable.com/v0/${BASE_ID}`,
    };
  
  
  $.get({
    url: `${Airtable.API}/To%20Do`,
    headers: {
      authorization: `Bearer ${Airtable.API_KEY}`
  
    }
    
  
  
  
  }).fail(() => {
    console.error("You failed");
  }).done ((response) =>{
    console.log(response);
   
    
  })
  
    // Start your $.get here
      // on fail, console.error out the error you recieve
      // on done, log out each individual response
  
    function submit() {
      console.log($('#toDoNameInput').val());
      console.log($('#toDoNotesInput').val());
      console.log($('#toDoDoneSelect option:selected').text());
  
  
    $.post({
      url: `${Airtable.API}/To%20Do`,
      headers: {
        authorization: `Bearer ${Airtable.API_KEY}`,
        contentType: "application/json"
    
      },
      
      data: {
      "fields": {
        "Name": $(`#toDoNameInput`).val(),
        "Notes": $(`#toDoNotesInput`).val(),
        "Done": $(`#toDoDoneSelect option:selected`).text(),
  
      },
    }
     
  
    })
    .fail(() => {
      console.error("You failed");
    })
    .done ((response) =>{
    console.log(response);
      
    })
  
   
      // Start your $.post here
        // on fail, console.error out the error you recieve
        // on done, log out the response
    }
    
    $('#btnSubmit').on('click', submit);
  });