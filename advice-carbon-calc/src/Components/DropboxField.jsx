function DropboxField(props) {
  return (
    <label htmlFor="storage3">
            Dropbox storage size in GB
            <input
              type="number"
              name="dropbox-storage"
              id="dropbox-storage"
              required
              placeholder="Enter a number"
              onKeyUp={props.handleDropboxChange}
            />
          </label>
  )
}

export default DropboxField