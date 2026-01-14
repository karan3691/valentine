import { useState } from "react";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "لا",
      "متأكدة؟ 🤨",
      "صدگ؟ فكري زين! 🤔",
      "ترا.. آخر فرصة! 😒",
      "راح تندمين والله 🥹",
      "اهئ اهئ.. ليش هيج؟ 💔",
      "نرجس.. فكري بمستقبلنا 😂",
      "ترى الزر راح يختفي! 😒",
      "دوسي 'اي' وفضيها 🙄",
      "خلص زعلت.. 💔",
      "ماكو مهرب، دوسي 'اي' 🌚",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="overflow-hidden flex flex-col items-center justify-center pt-4 h-screen -mt-16 selection:bg-rose-600 selection:text-white text-zinc-900 bg-[#fff5f7]">
      {yesPressed ? (
        <>
          <img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" alt="Kiss" />
          <div className="text-4xl md:text-6xl font-bold my-4 text-pink-600 animate-bounce">
            يما فديت🥹♥
            <p className="text-lg text-gray-700 text-center mt-4 px-4 leading-relaxed">
  يمكن ما أعرف أعبر هواي، بس أعرف إن قلبي اختارج من بين الكل.<br/>
   
</p>

          </div>
        </>
      ) : (
        <>
          <img
            className="h-[230px] rounded-lg shadow-lg"
            src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif"
            alt="Bear with Roses"
          />
          <h1 className="text-4xl md:text-6xl my-4 text-center font-bold text-pink-600">
            نرجس.. تصيرين زوجتي؟ 💍✨
          </h1>
          <div className="flex flex-wrap justify-center gap-4 items-center">
            <button
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-lg transition-all"
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              اي
            </button>
            <button
              onClick={handleNoClick}
              className="bg-rose-500 hover:bg-rose-600 rounded-lg text-white font-bold py-2 px-6 transition-all"
            >
              {noCount === 0 ? "لا" : getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
