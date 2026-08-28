1. Explain how and why you divided the app’s UI into components
   - แบ่ง component แยกเป็น Navbar, UserView, Admin, และ Table เพื่อจะได้ Reusable ได้ ไม่ต้องเขียนซ้ำ
2. What state variables did you created and why?,
   - ใน app.jsx มี members เก็บ array ของข้อมูลที่ดึงมาจาก api
     - view เก็บสถานะขอจอที่กำลังเปิด เช่น home user admin owner เพื่อทำ Condition Rendering
   - ใน Admin.jsx มี name, lastname, position จัดการ input เพื่อเก็บค่าที่ user กรอก และสร้าง member ใหม่ ก่อน post
   - ใน table.jsx มี editId เก็บ id ของแถว members ที่กำลังแก้ในตาราง
     - editFormData เก็บข้อมูลที่กำลังพิมพ์แก้ไข แต่ละช่อง ก่อน save
3. How did you manage these states? Was it via Passing Props or React Context, why?
   - passing prop ลงไป เพราะมี components ไม่เยอะ และจะได้ติดตามข้อมูลที่ส่งไปได้ไม่ยาก
4. Explain how and why you used the useEffect hook?
   - useEffect ใช้สำหรับจัดการ side effects ก็คือดึงข้อมูลจาก api หลังจากที่ render components ขึ้นหน้าจอ
5. Explain whether you could and why, you would use fetch() without using useEffect?
   - ได้ แต่ต้องใส่ใน event handlers เช่น onClick แต่ถ้าอยู่ใน components body ตรงๆ ไม่ได้ เพราะ มันจะ re-render ใหม่ จนติด infinite loop
6. Explain whether the use of fetch() should be synchronous or asynchronous JavaScript, why?

- ต้องเป็น Async เพราะ การ fetch ต้องใช้เวลาติดต่อกับ servers

7. Include any other notes about React and Frontend Web Development you want to use to summarize your understanding of this technical domain . You can also note down questions you have.

-
