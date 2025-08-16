// 等待整個網頁載入完成後再執行
window.onload = function() {

    // 1. 建立一個儲存所有資料的陣列
    const data = [
        {
            title: "金色之光 Golden Light",
            imageUrl: "https://raw.githubusercontent.com/Clairemuzi/image/main/gold-3.jpeg",
            audioUrl: "https://raw.githubusercontent.com/Clairemuzi/music/main/Elven%20Chant%20of%20the%20Silver%20Glen.mp3",
            text: `轉化並提升你的意識，你以為過不去的事情，當意識轉化之後，你的糾結的卡點好像也都不再那麼重要了，一切的躁動也都平順過關了。

Transform your conciousness, Things are not always what you think it should be. When your mindset changes, everything feels different. The things that used to bother you don't seem to matter that much anymore.`
        },
        {
            title: "白色之光 White Light",
            imageUrl: "https://raw.githubusercontent.com/Clairemuzi/image/main/white-9.jpeg",
            audioUrl: "https://raw.githubusercontent.com/Clairemuzi/music/main/Spell%20of%20the%20North.mp3",
            text: `淨化之光！讓所有的負能量、低頻的、沈重的，都隨著白色之光淨化並排出。每日清理你自己，讓低頻意識無法沾附你，影響你的生命流動。

Let all low-frequency and negative energies be purified by the white light as it flow through your entire body, releasing them completely. Cleanse yourself daily so that negative energies can no longer affect the flow of your life.`
        },
        {
            title: "薄荷綠之光 Mint Light",
            imageUrl: "https://raw.githubusercontent.com/Clairemuzi/image/main/mint-2.jpeg",
            audioUrl: "https://raw.githubusercontent.com/Clairemuzi/music/main/Echoes%20of%20Emptiness.mp3",
            text: `由基督所帶來的薄荷綠之光，象徵著重生，一切萬象更新。

The Mint Green Light symbolizes new begging and rebirth. It's refreshing presence revitalizes your perspective. I am willing to see everything with a renewed outlook.`
        }
    ];

    // 2. 隨機選取一組資料
    const randomIndex = Math.floor(Math.random() * data.length);
    const selectedItem = data[randomIndex];

    // 3. 將選中的資料顯示在網頁上
    document.getElementById('item-title').innerText = selectedItem.title;
    document.getElementById('item-image').src = selectedItem.imageUrl;
    document.getElementById('item-image').alt = selectedItem.title; // 讓圖片的替代文字更有意義
    document.getElementById('item-text').innerText = selectedItem.text;
    document.getElementById('item-audio').src = selectedItem.audioUrl;
    
    // 處理瀏覽器自動播放政策
    const audioPlayer = document.getElementById('item-audio');
    audioPlayer.play().catch(error => {
        console.log("瀏覽器阻止了自動播放。需要用戶互動才能開始播放。");
        // 您可以在此處顯示一個提示，告訴用戶點擊頁面以播放音樂
    });
};

