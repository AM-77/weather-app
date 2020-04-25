import * as React from "react"
import Svg, { Path, Circle } from "react-native-svg"

function RainyWind(props) {
  return (
    <Svg viewBox="0 0 512 512" {...props}>
      <Path d="M179.49 384.766a7.5 7.5 0 00-9.802-7.031c-6.499 2.097-22.151 7.726-27.142 14.685-6.494 9.053-4.658 21.525 4.093 27.801a18.92 18.92 0 0011.092 3.568c1.25 0 2.516-.121 3.78-.365 5.136-.991 9.672-3.917 12.773-8.24 4.991-6.958 5.303-23.59 5.206-30.418zm-17.413 21.7c-.854 1.179-2.063 1.971-3.408 2.23-.695.133-2.047.226-3.289-.664-2.029-1.456-2.319-4.538-.674-6.833.995-1.212 4.718-3.259 9.382-5.304-.439 5.051-1.182 9.221-2.011 10.571zM272.49 384.766a7.497 7.497 0 00-9.803-7.03c-6.498 2.097-22.151 7.726-27.142 14.685-6.494 9.053-4.658 21.525 4.093 27.801a18.92 18.92 0 0011.092 3.568c1.25 0 2.516-.121 3.78-.365 5.136-.991 9.673-3.917 12.773-8.24 4.991-6.959 5.305-23.591 5.207-30.419zm-17.413 21.7c-.854 1.179-2.063 1.971-3.408 2.23-.694.133-2.048.226-3.289-.664-2.029-1.456-2.319-4.538-.674-6.833.994-1.212 4.716-3.258 9.378-5.302-.439 5.055-1.181 9.225-2.007 10.569zM93.49 384.766a7.5 7.5 0 00-9.802-7.031c-6.499 2.097-22.151 7.726-27.142 14.685-6.494 9.053-4.658 21.525 4.093 27.801a18.92 18.92 0 0011.092 3.568c1.25 0 2.516-.121 3.78-.365 5.136-.99 9.672-3.917 12.773-8.24 4.991-6.958 5.304-23.59 5.206-30.418zm-17.413 21.7c-.854 1.179-2.063 1.971-3.408 2.23-.694.133-2.048.226-3.289-.664-2.029-1.456-2.319-4.538-.674-6.833.995-1.212 4.718-3.259 9.382-5.304-.439 5.051-1.182 9.221-2.011 10.571zM124.49 437.766a7.503 7.503 0 00-9.802-7.031c-6.499 2.097-22.151 7.726-27.142 14.685-6.494 9.053-4.658 21.525 4.093 27.801a18.92 18.92 0 0011.092 3.568c1.25 0 2.516-.121 3.78-.365 5.136-.991 9.672-3.917 12.773-8.24 4.991-6.958 5.304-23.59 5.206-30.418zm-17.413 21.7c-.854 1.179-2.063 1.971-3.408 2.23-.695.133-2.048.226-3.289-.664-2.029-1.456-2.319-4.538-.674-6.833.995-1.212 4.718-3.259 9.382-5.304-.439 5.051-1.182 9.221-2.011 10.571zM218.49 437.766a7.503 7.503 0 00-9.802-7.031c-6.499 2.097-22.151 7.726-27.142 14.685-6.494 9.053-4.658 21.525 4.093 27.801a18.92 18.92 0 0011.092 3.568c1.25 0 2.516-.121 3.78-.365 5.136-.991 9.672-3.917 12.773-8.24 4.991-6.958 5.304-23.59 5.206-30.418zm-17.413 21.7c-.854 1.179-2.063 1.971-3.408 2.23-.694.133-2.047.226-3.289-.664-2.029-1.456-2.319-4.538-.674-6.833.995-1.212 4.718-3.259 9.382-5.304-.439 5.051-1.182 9.221-2.011 10.571zM472.5 125.5c-4.226 0-8.391.673-12.354 1.979C451.814 106.177 430.958 91.5 407.5 91.5c-14.557 0-27.844 5.536-37.871 14.61a86.768 86.768 0 00-21.129-2.61c-26.68 0-51.505 12.149-67.857 32.85-16.872-11.621-37.299-18.434-59.289-18.434a104.299 104.299 0 00-47.369 11.347c-4.515 2.296-5.511 8.305-1.93 11.886l.13.13c2.261 2.261 5.721 2.83 8.57 1.38a89.323 89.323 0 0140.599-9.743c49.508 0 89.786 40.278 89.786 89.787 0 3.378-.196 6.814-.582 10.219-.308 2.713.658 5.486 2.824 7.149a7.501 7.501 0 009.254-.067c10.667-8.482 23.508-12.965 37.134-12.965 32.936 0 59.73 26.795 59.73 59.731 0 31.222-24.378 57.385-55.498 59.563-.385.027-232.026.168-232.026.168-35.552 0-64.476-28.924-64.476-64.476 0-33.317 24.965-60.9 58.072-64.16 3.468-.342 6.264-2.989 6.698-6.447 2.014-16.069 8.25-30.716 17.502-42.894 2.252-2.964 1.998-7.125-.634-9.757l-.106-.106c-3.149-3.149-8.388-2.868-11.089.673-9.736 12.762-16.635 27.852-19.661 44.396-17.283 3.005-33.111 11.669-45.056 24.772C59.861 243.161 52.5 262.17 52.5 282.024c0 43.823 35.653 79.476 79.476 79.476 0 0 234.095-.119 234.818-.347 38.105-3.566 67.706-35.905 67.706-74.383 0-17.361-5.968-33.345-15.937-46.046a85.875 85.875 0 0015.219-36.223h37.977c21.57 0 39.72-16.984 40.23-38.548.525-22.214-17.392-40.453-39.489-40.453zm-.557 64h-44.136a7.547 7.547 0 00-1.105 0H407.5c-15.449 0-28.947-8.49-36.089-21.046a7.486 7.486 0 00-6.505-3.791h-.023c-5.79 0-9.344 6.258-6.471 11.285 9.739 17.041 28.094 28.552 49.089 28.552h11.026a70.92 70.92 0 01-10.563 25.219c-13.022-11.018-29.841-17.68-48.194-17.68-11.896 0-23.314 2.731-33.664 7.986-.74-29.337-13.599-55.714-33.745-74.309 13.52-17.149 34.062-27.216 56.139-27.216 3.49 0 6.959.259 10.385.757a56.423 56.423 0 00-3.2 6.247c-2.158 4.953 1.473 10.498 6.875 10.498 3.026 0 5.702-1.842 6.917-4.613 6.418-14.637 21.043-24.889 38.022-24.889 19.447 0 36.458 13.726 40.557 32.679.362 1.673 1.146 3.257 2.44 4.377a7.52 7.52 0 008.961.708 24.413 24.413 0 0113.042-3.765c13.369 0 24.271 10.764 24.496 24.08.233 13.705-11.346 24.921-25.052 24.921zM121.5 52.5c-4.225 0-8.391.673-12.354 1.979C100.814 33.177 79.958 18.5 56.5 18.5 25.346 18.5 0 43.846 0 75c0 20.413 10.886 38.322 27.155 48.248 4.951 3.021 11.303-.53 11.303-6.329v-.171a7.4 7.4 0 00-3.541-6.315C22.982 103.136 15 89.983 15 75c0-22.883 18.617-41.5 41.5-41.5 19.44 0 36.446 13.717 40.553 32.66.362 1.672 1.141 3.256 2.43 4.38a7.515 7.515 0 008.976.724c5.47-3.45 12.128-4.622 18.632-3.128 10.532 2.419 18.291 11.723 18.873 22.513.762 14.119-10.507 25.85-24.464 25.85H74.538a7.418 7.418 0 00-7.418 7.418v.163a7.418 7.418 0 007.418 7.418h46.221c21.57 0 39.72-16.984 40.23-38.548.525-22.211-17.392-40.45-39.489-40.45z" />
      <Circle cx={359} cy={75.5} r={13} />
      <Circle cx={298} cy={88.5} r={13} />
      <Path d="M455.5 415.5h-100c-6.893 0-12.5-5.607-12.5-12.5s5.607-12.5 12.5-12.5S368 396.107 368 403c0 4.142 3.357 7.5 7.5 7.5s7.5-3.358 7.5-7.5c0-15.164-12.337-27.5-27.5-27.5S328 387.836 328 403s12.337 27.5 27.5 27.5h100a7.5 7.5 0 007.5-7.5 7.5 7.5 0 00-7.5-7.5zM395.5 438.5h-100c-15.163 0-27.5 12.336-27.5 27.5s12.337 27.5 27.5 27.5S323 481.164 323 466c0-4.142-3.357-7.5-7.5-7.5s-7.5 3.358-7.5 7.5c0 6.893-5.607 12.5-12.5 12.5S283 472.893 283 466s5.607-12.5 12.5-12.5h100a7.5 7.5 0 007.5-7.5 7.5 7.5 0 00-7.5-7.5z" />
    </Svg>
  )
}

export default RainyWind