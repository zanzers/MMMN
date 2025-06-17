
// preview.on('click', '#analyze-btn', function (e) {
//   e.preventDefault(); 


//   console.log("Sentadata")  

// //   const file = fileInput[0].files[0];
// //   if (!file) return;

// //   const formData = new FormData();
// //   formData.append('image', file);

// //   $.ajax({
// //     url: '/api/sentData',  
// //     type: 'POST',
// //     data: formData,
// //     processData: false,
// //     contentType: false,
// //     beforeSend: function () {
// //       $('#analysis-result').html(`<div class="text-secondary">Analyzing image...</div>`);
// //     },
// //     success: function (response) {
// //       $('#analysis-result').html(`
// //         <div class="alert alert-info">
// //           <strong>Result:</strong> ${response.result}
// //         </div>
// //       `);
// //     },
// //     error: function () {
// //       $('#analysis-result').html(`<div class="alert alert-danger">Failed to analyze the image.</div>`);
// //     }
// //   });
// });



$(document).on('click', '#analyze-btn', function (e) {
  e.preventDefault();

  const file = fileInput[0]?.files[0];

    if (!file) return;

    const formData = new FormData()
    formData.append('image', file)


    $.ajax({
    url: '/api/sentData',
    type: 'POST',
    data: formData,
    processData: false,
    contentType: false,
    beforeSend: function () {
        $('#analysis-result').html(`
        <div class="text-center">
            <p class="text-secondary mb-2">🔍 Analyzing image...</p>
            <div class="progress" style="height: 20px;">
            <div class="progress-bar progress-bar-striped progress-bar-animated bg-info" role="progressbar" 
                style="width: 100%">Processing</div>
            </div>
        </div>
        `);
    },
    success: function (response) {
        $('#analysis-result').html(`
        <div class="text-center">
            <p class="text-success mb-2">✅ Presenting result...</p>
            <div class="alert alert-info mt-2">
            <strong>Result:</strong> ${response.result}
            </div>
        </div>
        `);
    },
    error: function () {
        $('#analysis-result').html(`
        <div class="alert alert-danger text-center mt-2">
            ❌ Failed to analyze the image.
        </div>
        `);
    }
    });


  console.log("✅ Sentadata:", formData);
});

