import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Windy(props) {
  return (
    <Svg viewBox="0 0 512 512" {...props}>
      <Path d="M439.5 161.349c-15.163 0-27.5 12.337-27.5 27.5 0 4.142 3.357 7.5 7.5 7.5s7.5-3.357 7.5-7.5c0-6.893 5.607-12.5 12.5-12.5s12.5 5.607 12.5 12.5-5.607 12.5-12.5 12.5h-90c-4.143 0-7.5 3.357-7.5 7.5s3.357 7.5 7.5 7.5h90c15.163 0 27.5-12.337 27.5-27.5s-12.337-27.5-27.5-27.5zM484.5 234.349h-100c-4.143 0-7.5 3.357-7.5 7.5s3.357 7.5 7.5 7.5h100c6.893 0 12.5 5.607 12.5 12.5s-5.607 12.5-12.5 12.5-12.5-5.607-12.5-12.5c0-4.143-3.357-7.5-7.5-7.5s-7.5 3.357-7.5 7.5c0 15.163 12.337 27.5 27.5 27.5s27.5-12.337 27.5-27.5-12.337-27.5-27.5-27.5zM300 435.849H200c-4.143 0-7.5 3.357-7.5 7.5s3.357 7.5 7.5 7.5h100c6.893 0 12.5 5.607 12.5 12.5s-5.607 12.5-12.5 12.5-12.5-5.607-12.5-12.5c0-4.143-3.357-7.5-7.5-7.5s-7.5 3.357-7.5 7.5c0 15.163 12.337 27.5 27.5 27.5s27.5-12.337 27.5-27.5-12.337-27.5-27.5-27.5zM259.623 175.312c-.226-3.966-3.493-7.075-7.465-7.075h-.09c-4.296-.001-7.71 3.613-7.461 7.9 1.025 17.626.904 34.284.394 46.193-33.601-2.009-104.563-10.986-126.425-35.218-13.683-15.167-21.051-34.348-20.749-54.009.248-16.124 5.66-30.964 15.392-42.696 36.647 47.083 87.475 94.516 90.555 97.377a7.47 7.47 0 005.103 2.005 7.475 7.475 0 005.496-2.396 7.5 7.5 0 00-.39-10.6c-.752-.699-53.611-50.024-89.908-96.788 11.916-9.043 26.251-13.479 40.871-13.479 20.853 0 42.27 9.002 57.995 26.432 7.877 8.731 13.127 23.619 16.556 40.662.698 3.473 3.775 5.955 7.317 5.955h.042c4.721 0 8.277-4.329 7.332-8.955-3.919-19.195-10.19-36.715-20.11-47.71-31.979-35.442-83.93-41.435-118.978-14.906-10.851-15.139-19.263-29.521-22.774-41.314-1.123-3.77-4.955-6.205-8.801-5.377a7.5 7.5 0 00-5.635 9.456c4.049 13.745 13.769 30.269 26.112 47.364-13.388 14.743-20.852 33.888-21.172 54.741-.36 23.465 8.379 46.296 24.61 64.286 32.679 36.224 139.838 40.357 144.384 40.516a7.5 7.5 0 007.744-6.985c.144-2.11 1.707-26.376.055-55.379zM449.4 396.905c-3.251-5.257-32.509-51.524-58.701-57.246-13.389-2.923-27.066-.806-38.515 5.969-9.333 5.523-16.284 13.597-20.109 23.183-7.659-2.776-14.082-5.81-18.242-9.056a7.5 7.5 0 00-9.226 11.826c5.746 4.483 14.363 8.461 24.227 11.93-1.244 23.568 15.897 45.625 41.116 51.134 2.279.498 4.707.727 7.245.727 26.624 0 65.281-25.154 69.979-28.278a7.5 7.5 0 002.226-10.189zm-76.25 23.086c-16.517-3.608-28.204-16.946-29.291-31.8 29.629 8.242 62.792 12.552 64.903 12.821a7.502 7.502 0 008.389-6.49 7.5 7.5 0 00-6.49-8.389c-13.146-1.677-40.965-6.218-64.227-12.765 2.689-6.08 7.296-11.226 13.389-14.831 8.174-4.837 18.002-6.339 27.675-4.224 13.423 2.933 33.18 26.571 45.115 44.262-18.225 11.102-46.055 24.35-59.463 21.416zM252.452 368.866a7.5 7.5 0 00-9.688-5.606c-7.5 2.466-18.021 3.374-29.897 3.284.103-23.98-14.645-45.762-36.866-56.366-4.977-2.375-10.735 1.22-10.735 6.734v.05a7.453 7.453 0 004.246 6.732c16.933 8.057 28.225 24.347 28.357 42.285-40.502-2.57-87.971-12.976-88.657-13.127a7.499 7.499 0 10-3.245 14.644c2.813.624 48.252 10.583 89.441 13.273-3.049 8.656-8.807 16.247-16.752 21.913-10.722 7.647-24.112 10.878-37.697 9.106-21.165-2.765-52.57-37.285-67.533-56.08 13.82-10.268 37.879-26.169 58.201-33.332a7.457 7.457 0 004.98-7.04c0-5.169-5.108-8.75-9.987-7.042-10.056 3.52-21.403 9.049-33.988 16.582-19.004 11.376-33.788 23.096-34.408 23.589a7.502 7.502 0 00-1.351 10.342c.473.636 11.75 15.761 27.194 31.636 21.478 22.076 39.965 34.262 54.949 36.219a71.23 71.23 0 009.223.603c14.136 0 27.765-4.266 39.128-12.369 11.808-8.421 19.963-20.127 23.519-33.487 1.145.016 2.284.027 3.41.027 12.817 0 24.364-1.084 32.932-3.854 3.664-1.185 6.02-4.945 5.224-8.716zM60.5 234.349h-53c-4.143 0-7.5 3.357-7.5 7.5s3.357 7.5 7.5 7.5h53a7.5 7.5 0 007.5-7.5c0-4.143-3.357-7.5-7.5-7.5zM32 61.349H7.5c-4.143 0-7.5 3.357-7.5 7.5s3.357 7.5 7.5 7.5H32c4.143 0 7.5-3.357 7.5-7.5s-3.357-7.5-7.5-7.5zM359 98.349h-51.5c-4.143 0-7.5 3.357-7.5 7.5s3.357 7.5 7.5 7.5H359c4.143 0 7.5-3.357 7.5-7.5s-3.357-7.5-7.5-7.5z" />
    </Svg>
  )
}

export default Windy
