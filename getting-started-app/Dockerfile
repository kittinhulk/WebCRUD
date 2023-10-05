# ใช้ภาพเริ่มต้น Python 3.9
FROM python:3.9

# สร้างโฟลเดอร์เพื่อเก็บโปรเจกต์
WORKDIR /app

# คัดลอกไฟล์โปรเจกต์ของคุณเข้าสู่โฟลเดอร์ที่เปิดใช้งานสำหรับแอปพลิเคชัน
COPY . .

# ติดตั้ง Flask และ SQLAlchemy
RUN pip install -r requirements.txt

# กำหนดพอร์ตที่แอปพลิเคชันจะทำงาน
EXPOSE 5000

# คำสั่งเริ่มต้นแอปพลิเคชัน
CMD ["python", "app.py"]