import React from 'react'

function AddItems() {
  return (
    <div>
      <div class="form-group">
      <form action="/stats" enctype="multipart/form-data" method="post">
        <input type="file" class="form-control-file" name="uploaded_file" />
        <input type="text" class="form-control" placeholder="Number of speakers" name="nspeakers" />
        <input type="submit" value="Get me the stats!" class="btn btn-default" /> 
      </form>
      </div>
    </div>
  )
}

export default AddItems
