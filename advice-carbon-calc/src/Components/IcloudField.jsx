
function IcloudField(props) {
    
  return (
    <label htmlFor="storage2">
            Icloud storage size in GB
            <input
              type="number"
              name="icloud-storage"
              id="icloud-storage"
              required
              placeholder="Enter a number"
              onKeyUp={props.handleIcloudChange}
            />
          </label>
  )
}

export default IcloudField