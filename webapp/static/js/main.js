var fileInput = $('#fileElem');

$(document).ready(function () {
  const dropArea = $('#drop-area');
  const form = $('#upload-form');


  const preview = $('<div class="text-center mt-3" id="preview"></div>');
  form.append(preview);


  ['dragenter', 'dragover'].forEach(event => {
    dropArea.on(event, function (e) {
      e.preventDefault();
      e.stopPropagation();
      dropArea.addClass('dragover');
    });
  });

  ['dragleave', 'drop'].forEach(event => {
    dropArea.on(event, function (e) {
      e.preventDefault();
      e.stopPropagation();
      dropArea.removeClass('dragover');
    });
  });

  
  dropArea.on('drop', function (e) {
    const files = e.originalEvent.dataTransfer.files;
    if (files.length > 0) {
      fileInput[0].files = files;
      showPreview(files[0]);
    }
  });


  fileInput.on('change', function () {
    const file = this.files[0];
    if (file) {
      showPreview(file);
    }
  });


function showPreview(file) {
  const reader = new FileReader();
  reader.onload = function (e) {
    dropArea.hide(); // Hide drop area
    preview.html(`
      <div class="position-relative d-inline-block">
        <img src="${e.target.result}" class="img-fluid rounded shadow" style="max-height: 300px;">
        <button id="remove-btn" class="btn btn-sm btn-danger position-absolute top-0 end-0 m-2" title="Remove">
          <i class='bx bx-x'></i>
        </button>
      </div>
      <div class="mt-3">
        <button id="analyze-btn" class="btn btn-success">Proceed to Analyze</button>
      </div>
      <div id="analysis-result" class="mt-3 text-center"></div>
    `);
  };
  reader.readAsDataURL(file);
}



  preview.on('click', '#remove-btn', function () {
    preview.empty();
    fileInput.val('');       
    dropArea.show();         
  });
});
