# Jing's Magic Book

INT203 Project that made with 💖

# <img src="./src/assets/icon.png" width="50">  Jing’s Magic Book 🍀´ˎ˗
Project INT203 Client-side Web Programming II 

## ˗ˏˋ 🍀 About's Jing's Magic Book ´ˎ˗
<img src="./src/assets/icon.png" width="200">

Jing’s Magic Book เป็น Web Application เล็ก ๆ ที่มีการนำเอาความรู้ในรายวิชา INT203 Client-side Web Programming II มาใช้ในการจัดทำเพื่อพัฒนาความรู้และความสามารถที่ได้รับในรายวิชา
โดย Jing’s Magic Book คือระบบยืมหนังสือในรูปแบบออนไลน์
ที่สามารถทำให้คุณยืมหนังสือหายากของเราไปอ่านได้ในรูปแบบของ E-Book ได้อย่างง่ายดาย เพียงแค่คลิกเลือกหนังสือที่คุณสนใจ โดยภายใน Jing’s Magic Book จะมีความสามารถซึ่งถูกแบ่งแยกเป็น component ต่าง ๆ ดังนี้
1. Login
   * จะเป็นหน้าที่สามารถเลือกผู้ใช้ในการ Login เข้าใช้งานได้
2. Home
   * จะเป็น List ของ หนังสือที่เราจะปล่อยให้เช่า และสามารถกด BORROW THIS BOOK เพื่อยืมหนังสือเล่มนั้น
   * หากหนังสือเล่มนั้นถูกยืมไปแล้วจะไม่สามารถยืมต่อได้ (รวมถึงคนอื่นด้วย)
3. AboutUs
   * จะเป็นการกล่าวถึงวัตถุประสงค์ของ Jing’s Magic Book 
4. History
   * จะเป็นประวัติการยืม
5. Cart
   * จะเป็นการแสดงหนังสือที่เราได้ทำการยืมไว้
6. Add-Book
   * สิ่งนี้จะมีเฉพาะเมื่อเรา login ด้วย user AJ-Jing เท่านั้น
   * จะสามารถ Add หนังสือที่จะลงให้ยืมเพิ่มเติมได้
   * ลบหนังสือที่ไม่อยากให้ยืมออกได้
 7. User Profile
   * จะแสดง ID และ ชื่อของ User ที่เข้าใช้งาน ณ ขณะนั้น
 ## 🍀 Prerequisites ᵎᵎ 
 * Download and install `node` per [this](https://nodejs.org/en/download/)
    * This will install npm as well
 * As an alternative to `npm` you can use `yarn`. If you choose to do so, you can find installation instructions [here](https://classic.yarnpkg.com/en/)
 * Vue CLI - You will find instructions [here](https://cli.vuejs.org/)
 ### Optional (but highly recommended)
* Install [Git](https://git-scm.com/downloads)
* Install [Visual Studio Code](https://code.visualstudio.com/)
* Install [Google Chrome](https://www.google.com/chrome/index.html)
    * Install the [Vue.js devtools](https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd?hl=en)
   
## 🍀 Getting started ⤾·˚
First `git-clone` or [download](https://github.com/dknxsmph/sec-1-group-10-JingsMagicBook.git) this repository
```
git clone https://github.com/dknxsmph/sec-1-group-10-JingsMagicBook.git
```
Then open a terminal, `cd` to the directory where you cloned this repository.

Make sure `node`/`npm` (or `yarn` if you have it installed) are in your path!
```
npm install # or `yarn install`
```
## 🍀 Running the app ♡   ·͜·♡
```
npm run dev
```
Open http://localhost:3000/ to see the site locally. Changes to assets will rebuild the site. Refresh to see your changes.

## 🍀 User Manual ✧ﾟ
* กดที่ Icon <img src="./src/assets/users-img/kim.png" width="30"> <img src="./src/assets/users-img/mint.png" width="30"> <img src="./src/assets/users-img/ny.png" width="30"> <img src="./src/assets/users-img/billy.png" width="30"> <img src="./src/assets/users-img/boy.png" width="30"> <img src="./src/assets/users-img/aj-jing.png" width="30"> เพื่อ `Login` เข้าสู่ระบบ        
* กด `Home` หรือ <img src="./src/assets/icon.png" width="20"> เพื่อมาหน้าหลักของเว็ป
  * สามารถพิมพ์ข้อความในช่อง Search และกด <img src="./src/assets/search-icon.png" width="20"> เพื่อค้นหาหนังสือได้
  * กด `BORROW THIS BOOK` เพื่อยืมหนังสือที่ต้องการ
  * หากมีคนกำลังยืมหนังสือเล่มนั้นๆอยู่จะไม่สามารถยืมได้จนกว่าคนที่กำลังยืมนำมาคืน
* กด `About` จะแสดงข้อมูลที่เกียวข้องกับที่มาของเว็ป Jing's Magic Book
  * กด <img src="./src/assets/git-icon.png" width="20"> เพื่อไปยัง GitHub this repository
* กด `History` จะแสดงประวัติของหนังสือทั้งหมดจากการถูกยืมและคืน
  * โดยจะแสดง User, รูปหนังสือ, Book ID, Status
* กด <img src="./src/assets/book-mark.png" width="20"> เพื่อเปิดดูหนังสือที่กำลังยืมอยู่
  * สามารถกด <img src="./src/assets/return-icon.png" width="20"> เพื่อคืนหนังสือได้
* กด `Icon ด้านขวาบน` <img src="./src/assets/users-img/aj-jing.png" width="20"> เพื่อดู User ID, Name
  * สามารถกด `Log out` เพื่อออกจากระบบได้

## ‧₊˚ About Us 🖐🏻 ˊˎ -
งานนี้เป็นส่วนของวิชา INT203 Client-side Web Programming II ภาคเรียนที่ 2 ปีการศึกษา 2564 คณะเทคโนโลยีสารสนเทศ มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี

🍀Team : luckyJing 𓇼
| StudentID     | Name     | 
| ------------- |:-------------:| 
|63130500022    |CHINNAWAT KAEWNONGSANG
|63130500023    |CHISANUCHA SOMBOONWANNA
|63130500024    |CHOKJAROEN TANCHAROENRAT
|63130500031    |NATTHAKAN THAWEEWATTHANAPRAYUN
|63130500054    |THARADON SAENMART
