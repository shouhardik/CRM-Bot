<html>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="Width=device-width, initial-scale=1.0"/>
    <title>Insights</title>
  </head>
  <body>
    <input type="file" id="uploadfile" accept=".csv">
    <button id="uploadconfirm">Upload File</button>
    </input>
  <script src="https://cdn.jsdelivr.net/npm/papaparse@5.3.2/papaparse.min.js"></script>
    <script>
    const uploadconfirm = document.getElementById('uploadconfirm').addEventListener('click',()=>{Papa.parse(document.getElementById('uploadfile').files[0])})
    </script> 
  </body>
</html>