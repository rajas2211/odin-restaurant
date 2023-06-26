import Welcome from './welcome.jpeg'

export default function homepage () {
  const element = document.querySelector('#content')

  const heading = document.createElement('h1')
  heading.textContent = 'Welcome to City Nibbles Restaurant'
  element.appendChild(heading)

  const image = new Image()
  image.src = Welcome
  element.appendChild(image)

  const subHeading = document.createElement('h2')
  subHeading.textContent = 'About Us'
  element.appendChild(subHeading)

  for (let index = 0; index < 5; index++) {
    const para = document.createElement('p')
    para.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt quibusdam numquam voluptates reprehenderit eaque voluptate magni a, ad vitae? Rerum soluta harum tempora consequuntur repellat impedit! Sunt, illum. Repudiandae, magni.'
    element.appendChild(para)
  }

  return element
}
