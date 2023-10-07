/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */ 
// function createElement(html) {
//   const temp = document.createElement('table');
//       temp.innerHTML = html;
//       return temp.firstElementChild;
// }
import createElement from '../../assets/lib/create-element.js';

export default class UserTable {
    elem = null;
    
    rows= [];

    constructor(rows) {
      this.rows = rows || this.rows;
      
      this.render();
    }
    
    
    render() {
      this.elem = createElement(this.tableTemplate());
      
      let buttons = this.elem.querySelectorAll("button");
      for (let b of buttons) {
        b.onclick = function(event) {
        event.target.closest("tr").remove();
      }}

      
    
    }
    
    
    
    
    tableTemplate() {
      return `
      <table>
        <thead>
           <tr>
              <th>Имя</th>
              <th>Возраст</th>
              <th>Зарплата</th>
              <th>Город</th>
              <th></th> </tr>
      </thead>
      <tbody>
              ${this.rows.map(user => `<tr>
              <td>${user.name}</td>
              <td>${user.age}</td>
              <td>${user.salary}</td>
              <td>${user.city}</td>
              <td><button>X</button></td></tr>
              `).join('')}
        </tbody>
      </table>`
    }
  }


// let table = new UserTable(rows);
// document.body.appendChild(table.elem);
