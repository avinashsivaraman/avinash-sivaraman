export const color = [
  '#55efc4',
  '#3c40c6',
  '#74b9ff',
  '#a29bfe',
  '#00b894',
  '#ff7675',
  '#fc5c65',
  '#fd9644',
  '#fed330',
  '#26de81',
  '#2bcbba',
  '#fa8231',
  '#f7b731',
  '#20bf6b',
  '#0fb9b1',
  '#45aaf2',
  '#4b7bec',
  '#a55eea',
  '#8854d0',
  '#3867d6',
  '#2d98da',
]

const randomIndex = () => Math.round(Math.random() * 5)

const randomHeight = () => Math.random() * (100 - 20) + 20

const randomOpacity = () => Math.random() * (0.8 - 0.4) + 0.4

export const randomlySetStyle = (cells, heart, highlight) => {
  const tempColor = color[randomIndex()]
  heart.style.color = tempColor
  highlight.style.backgroundColor = tempColor
  cells.forEach((cell) => {
    cell.style.backgroundColor = tempColor
    // cell.style.backgroundColor = color[randomIndex()]
    cell.style.height = `${randomHeight()}%`
    cell.style.opacity = randomOpacity()
  })
}
