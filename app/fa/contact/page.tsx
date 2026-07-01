export default function ContactFa() {
  return (
    <div className="flex items-center justify-center bg-black p-2" dir="rtl">
      <div className="w-full max-w-sm bg-zinc-900/60 backdrop-blur-md p-5 rounded-2xl border border-yellow-500/20 shadow-md">
        
        <div className="text-center mb-4">
            <h1 className="text-xl font-bold text-yellow-400 font-serif">تماس با ما</h1>
            <p className="text-[11px] text-gray-400 mt-1">فرم را پر کنید یا در واتساپ پیام دهید.</p>
        </div>

        <div className="flex items-center justify-between bg-zinc-950 p-3 rounded-xl border border-zinc-800 mb-4 hover:border-yellow-400/30 transition-all">
            <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 bg-green-500/10 rounded-full flex items-center justify-center shrink-0">
                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564c.173.087.289.129.332.202.043.073.043.423-.101.827z"/>
                    </svg>
                </div>
                <div>
                   <p className="text-[9px] text-gray-500 leading-none mb-0.5">واتساپ / تلفن</p>
                   <p className="text-xs font-bold text-yellow-400 leading-none" dir="ltr">+964 781 888 5718</p>
                </div>
            </div>
            <a href="https://wa.me/9647818885718" target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-green-600 hover:bg-green-500 text-white text-[10px] font-bold rounded-lg transition-all">
                پیام
            </a>
        </div>

        <form className="space-y-2.5">
          <input 
            type="text" 
            placeholder="نام شما" 
            className="w-full py-2.5 px-3 text-xs bg-black border border-zinc-800 rounded-xl focus:border-yellow-400 outline-none text-white placeholder-zinc-600" 
          />
          <input 
            type="email" 
            placeholder="ایمیل (اختیاری)" 
            className="w-full py-2.5 px-3 text-xs bg-black border border-zinc-800 rounded-xl focus:border-yellow-400 outline-none text-white placeholder-zinc-600" 
          />
          <textarea 
            placeholder="پیام خود را بنویسید..." 
            rows={3} 
            className="w-full py-2.5 px-3 text-xs bg-black border border-zinc-800 rounded-xl focus:border-yellow-400 outline-none text-white placeholder-zinc-600 resize-none"
          ></textarea>
          
          <button type="button" className="w-full py-2.5 mt-1 bg-yellow-500 text-black font-bold text-xs rounded-xl hover:bg-yellow-400 transition-all">
            ارسال پیام
          </button>
        </form>

      </div>
    </div>
  );
}