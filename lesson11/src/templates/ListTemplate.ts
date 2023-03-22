import FullList from "../model/FullList"

interface DOMList {
  ul: HTMLUListElement,
  clear(): void,
  render(fullList: FullList): void
}

export default class ListTemplate implements DOMList {
  static instance: ListTemplate = new ListTemplate()

  ul: HTMLUListElement

  private constructor() {
    this.ul = <HTMLUListElement>document.querySelector('#listItems')
  }

  clear(): void {
    this.ul.innerHTML = ''
  }

  render(fullList: FullList): void {
    this.clear()

    fullList.list.forEach(itemObj => {
      const li = <HTMLLIElement>document.createElement('li')
      li.className = 'item'

      const check = <HTMLInputElement>document.createElement('input')
      check.type = 'checkbox'
      check.id = itemObj.id
      check.tabIndex = 0
      check.checked = itemObj.checked
      li.appendChild(check)

      check.addEventListener('change', (): void => {
        itemObj.checked = !itemObj.checked
        fullList.save()
      })

      const label = <HTMLLabelElement>document.createElement('label')
      label.htmlFor = itemObj.id
      label.textContent = itemObj.item
      li.appendChild(label)

      const button = <HTMLButtonElement>document.createElement('button')
      button.className = 'button'
      button.textContent = 'X'
      li.appendChild(button)

      button.addEventListener('click', (): void => {
        fullList.removeItem(itemObj.id)
        this.render(fullList)
      })
      
      this.ul.appendChild(li)
    })
  }
}
