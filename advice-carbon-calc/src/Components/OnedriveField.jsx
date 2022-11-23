

function OnedriveField(props) {
  return (
    <label htmlFor="storage3">
            Onedrive storage size in GB
            <input
              type="number"
              name="onedrive-storage"
              id="onedrive-storage"
              required
              placeholder="Enter a number"
              onKeyUp={props.handleOnedriveChange}
            />
          </label>
  )
}

export default OnedriveField