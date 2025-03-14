export default function() {
  
  const buttonPressLink = new Audio('./sons/soundClick.wav')

  
  function pressLink() {
    buttonPressLink.play()
  }

  return pressLink
}