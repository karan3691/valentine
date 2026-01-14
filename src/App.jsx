<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>هدية لمحبوبتي نرجس</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        body { background-color: #ffdef2; overflow: hidden; display: flex; align-items: center; justify-content: center; height: 100vh; font-family: 'Arial', sans-serif; }
        .container { text-align: center; background: white; padding: 2rem; border-radius: 20px; box-shadow: 0 10px 25px rgba(0,0,0,0.1); width: 95%; max-width: 450px; }
        #noButton { position: absolute; transition: all 0.3s ease; z-index: 10; }
        img { width: 180px; height: auto; margin: 0 auto 1.5rem; border-radius: 15px; }
        .btn { padding: 12px 30px; border-radius: 50px; font-weight: bold; cursor: pointer; border: none; font-size: 1.1rem; }
        .yes-btn { background-color: #ff4d6d; color: white; }
        .no-btn { background-color: #f3f4f6; color: #4b5563; }
        .poem-text { font-size: 0.95rem; color: #4b5563; line-height: 1.8; margin-top: 15px; font-style: italic; }
    </style>
</head>
<body>

    <div class="container" id="mainCard">
        <img id="statusImg" src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMmo3cjZidWp3ZXh0bmpxZzRyeGZ5amIxdG40eGZ6ZzRyeGZ5amIxdG4mZXA9djFfaW50ZXJuYWxfZ2lmX2J5X2lkJmN0PWc/c76IJLufpN762clMc5/giphy.gif" alt="Hello Kitty">
        
        <h1 id="question" class="text-2xl font-bold text-pink-600 mb-8">نرجس.. تحبين مصطفى لو لا؟ 🥺❤️</h1>
        
        <div class="flex justify-center gap-6">
            <button id="yesButton" class="btn yes-btn" onclick="celebrate()">اي</button>
            <button id="noButton" class="btn no-btn" onmouseover="moveButton()" onclick="moveButton()">لا</button>
        </div>
    </div>

    <script>
        // دالة تحريك زر "لا" للهروب
        function moveButton() {
            const x = Math.random() * (window.innerWidth - 120);
            const y = Math.random() * (window.innerHeight - 60);
            const btn = document.getElementById('noButton');
            btn.style.left = x + 'px';
            btn.style.top = y + 'px';
        }

        // دالة الاحتفال عند الضغط على "اي"
        function celebrate() {
            const card = document.getElementById('mainCard');
            card.innerHTML = 
                <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNHYxdnF4ZzRyeGZ5amIxdG40eGZ6ZzRyeGZ5amIxdG4mZXA9djFfaW50ZXJuYWxfZ2lmX2J5X2lkJmN0PWc/L4lvBpHWk_Ukg6pPh6/giphy.gif">
                <h1 class="text-2xl font-bold text-pink-600 mb-2">اعشقچ واحبچ! ❤️</h1>
                <div class="poem-text">
                    رأفت يوسف جمالك.. الأقوال وراك فانتتنت بك الغواني <br>
                    ومن الإله بلاد الجمال تجملاً.. حتى كأنك للجمال كباني
                </div>
                <button class="btn yes-btn mt-6" onclick="location.reload()">أحبك مرة ثانية</button>
            ;
        }
    </script>
</body>
</html>
