import React from 'react';

export default function ReligiousServicesEn() {
  const activities = [
    { country: "Global", tag: "Intro", icon: "✨", title: "Introduction to the Center", desc: "Program (Towards the Light) with Sheikh Ahmed Al-Fatlawi - Comprehensive overview of the center's goals.", link: "https://www.facebook.com/alrwdha/videos/1888738388507562" },
    { country: "Nigeria", tag: "Flag", icon: "🚩", title: "Arrival of Imam Hussain's Flag", desc: "The land of Nigeria is honored by the presence of the flag of Imam Hussain (AS) for blessings.", link: "https://www.facebook.com/share/r/1EcZTbMfqP/" },
    { country: "Nigeria", tag: "Academic", icon: "🎓", title: "Visit to Khatam al-Anbiya University", desc: "Visit of the international guidance delegation to Khatam al-Anbiya University.", link: "https://www.facebook.com/photo?fbid=911989808530157" },
    { country: "Guinea-Bissau", tag: "Majlis", icon: "🏴", title: "Mourning Majlis for Imam Hussain (AS)", desc: "Holding a mourning council at Abu Turab School to commemorate the Master of Martyrs.", link: "https://www.facebook.com/share/r/18dduhKRem/" },
    { country: "Guinea-Bissau", tag: "Construction", icon: "🕌", title: "Imam Mahdi Mosque Construction", desc: "The center begins the construction of the Imam Mahdi (AJ) Mosque in Guinea-Bissau.", link: "https://www.facebook.com/share/r/1BS5ZYyEFc/" },
    { country: "Guinea-Bissau", tag: "Construction", icon: "🏗️", title: "Imam Hussain Mosque & School", desc: "Establishment of Imam Hussain Mosque and an adjacent school.", link: "https://www.facebook.com/reel/757278857246463" },
    { country: "Ivory Coast", tag: "Slogan", icon: "🗣️", title: "Labaik Ya Hussain - Miaji", desc: "Students of Fatima al-Zahra (AS) School echoing the Hussaini slogan.", link: "https://www.facebook.com/share/r/18fxRCobVs/" },
    { country: "Niger", tag: "Flag", icon: "🚩", title: "Flag Presentation to Tijaniyya Leader", desc: "Presenting the flag of Imam Hussain (AS) to Sheikh Musa Abu Bakr Hashim.", link: "https://www.facebook.com/share/r/1HQdTUcy1Q/" },
    { country: "Niger", tag: "Meeting", icon: "🤝", title: "Meeting with Tijaniyya Leader", desc: "Academic visit and conveying greetings from the Hussaini Shrine.", link: "https://www.facebook.com/share/v/1FFBWsqfZJ/" },
    { country: "Niger", tag: "Preaching", icon: "📜", title: "Virtues of Khak-e-Shifa", desc: "Discussion on the sanctity and blessings of the soil of Karbala.", link: "https://www.facebook.com/share/v/17naQSWiRS/" },
    { country: "Niger", tag: "Friday Prayer", icon: "🛐", title: "Participation at Maradi Mosque", desc: "Friday prayers at the largest mosque in the economic capital, Maradi.", link: "https://www.facebook.com/reel/1446399637264363" },
    { country: "Niger", tag: "Friday Prayer", icon: "🕌", title: "Sermon at Mustafa University", desc: "Participation in Friday prayers and a speech by Sayyid Ali Al-Yasiri.", link: "https://www.facebook.com/share/r/1CFofANMje/" },
    { country: "Niger", tag: "Visit", icon: "📚", title: "Al-Mustafa University Visit", desc: "Delegation visit to encourage students in their pursuit of knowledge.", link: "https://www.facebook.com/share/v/18Xqf8jBgh/" },
    { country: "Niger", tag: "Lesson", icon: "🎙️", title: "Tradition and Salutation to Imam", desc: "Hadith of Yunus bin Zabyan and the virtues of saluting Imam Hussain (AS).", link: "https://www.facebook.com/share/v/1AMXrFM1Kq/" },
    { country: "Niger", tag: "Lesson", icon: "📖", title: "Principles of Religion (Usul al-Din)", desc: "Explaining the common principles of faith among Muslims.", link: "https://www.facebook.com/share/r/1D7hUepxWk/" },
    { country: "Niger", tag: "Theology", icon: "🛡️", title: "Refuting Doubts - Shirk (Part 1)", desc: "Explanation of various types of Shirk (Manifest and Hidden).", link: "https://www.facebook.com/share/v/18BkkS4Z7b/" },
    { country: "Niger", tag: "Theology", icon: "🛡️", title: "Refuting Doubts - Shirk (Part 2)", desc: "Continued explanation of types of Shirk and protection of Tawheed.", link: "https://www.facebook.com/share/v/18XKKrNfbR/" },
    { country: "Niger", tag: "Theology", icon: "⚖️", title: "Interpretation of Tawheed al-Ubudiyyah", desc: "Explaining Monotheism according to the School of Ahl al-Bayt (AS).", link: "https://www.facebook.com/share/v/1Dkg7K3Grr/" },
    { country: "Niger", tag: "Lesson", icon: "📘", title: "Intro to 'Bidayat al-Ma'rifah'", desc: "Introduction to the fundamental book of theology and its author.", link: "https://www.facebook.com/reel/2251701185635993" },
    { country: "Niger", tag: "Lesson", icon: "🔄", title: "Theory of 'Al-Amr bayn al-Amrayn'", desc: "Explaining the middle path between Determinism and Free Will.", link: "https://www.facebook.com/share/r/1GCgkUaLCV/" },
    { country: "Niger", tag: "Lesson", icon: "👑", title: "Research on Imamate", desc: "Scholarly research on General and Specific Imamate.", link: "https://www.facebook.com/share/v/1C28PQtun6/" },
    { country: "Niger", tag: "Lesson", icon: "✨", title: "Classification of Divine Attributes", desc: "Discussion on Attributes of Essence, Action, and Negation.", link: "https://www.facebook.com/share/v/18yYDiACZg/" },
    { country: "Niger", tag: "Lesson", icon: "🚫", title: "Refuting Ash'ari Determinism", desc: "Logical proofs against the theory of Determinism (Jabr).", link: "https://www.facebook.com/share/v/1BWo6KMiQL/" },
    { country: "Niger", tag: "Inauguration", icon: "🏫", title: "Grand Imam Hussain School Opening", desc: "Inauguration of the school in the economic capital, Maradi.", link: "https://www.facebook.com/share/r/1DzyZdC3g7/" },
    { country: "Niger", tag: "Dialogue", icon: "🏛️", title: "Dialogue with Scholars (Part 1)", desc: "Discussion on holding fast to the Quran and Ahl al-Bayt (AS).", link: "https://www.facebook.com/share/v/18tBrwPZtd/" },
    { country: "Niger", tag: "Dialogue", icon: "🏛️", title: "Dialogue with Scholars (Part 2)", desc: "Ahl al-Bayt as the true interpretation of the Word of Allah.", link: "https://www.facebook.com/share/v/1981fxTJas/" },
    { country: "Niger", tag: "Foundation", icon: "🏗️", title: "Imam Hasan al-Zaki School", desc: "Laying the foundation stone for the new school in Niamey.", link: "https://www.facebook.com/photo?fbid=894338630295275" },
    { country: "Niger", tag: "Education", icon: "📖", title: "Imam al-Baqir School (Hifz)", desc: "Programs and activities for memorizing and teaching the Holy Quran.", link: "https://www.facebook.com/share/r/1HebzEwdtc/" },
    { country: "Niger", tag: "Education", icon: "🎙️", title: "Student Quran Recitation", desc: "A student reciting the Holy Quran before the visiting delegation.", link: "https://www.facebook.com/share/r/1CddRrwdTb/" },
    { country: "Niger", tag: "Inauguration", icon: "🏫", title: "Imam al-Baqir School Opening", desc: "Opening in Kuni city and activating theology and ethics curriculums.", link: "https://www.facebook.com/share/v/1E8zgXB87e/" },
    { country: "Niger", tag: "Speech", icon: "📜", title: "Speech to Sultan Dan Baskor", desc: "Clarifying the goals of spreading the sciences of Aal-e-Muhammad.", link: "https://www.facebook.com/share/r/1HC8j9TjEQ/" },
    { country: "Niger", tag: "Meeting", icon: "🤝", title: "Meeting with Teachers and Imams", desc: "Guidance for teachers and mosque imams to remain steadfast.", link: "https://www.facebook.com/share/r/1Adi14MSFn/" },
    { country: "Niger", tag: "Education", icon: "📚", title: "Visit to Quranic School", desc: "Observing students learning Quran on traditional wooden slates.", link: "https://www.facebook.com/reel/1226163682319681" },
    { country: "Niger", tag: "Distribution", icon: "📘", title: "400 Qurans Distributed", desc: "Distribution of printed copies of the Quran to local students.", link: "https://www.facebook.com/share/r/1ADZTzupWK/" },
    { country: "Niger", tag: "Meeting", icon: "🤝", title: "Meeting with Sultan's Advisor", desc: "Discussion on spreading Islamic teachings with the Royal Advisor.", link: "https://www.facebook.com/share/r/1JM5pSZNa7/" },
    { country: "Tanzania", tag: "Flag", icon: "🚩", title: "Hussaini Flag at Al-Zahra School", desc: "Raising the flag of Aba Abdillah (AS) at Al-Zahra School.", link: "https://www.facebook.com/share/r/1CFYaxnvV3/" },
    { country: "Tanzania", tag: "Prayer", icon: "🤲", title: "Dua al-Faraj with Students", desc: "Reciting Dua al-Faraj with the students of Al-Zahra School.", link: "https://www.facebook.com/share/r/18f9zyBtFi/" },
    { country: "Tanzania", tag: "Education", icon: "🏫", title: "Imam Jafar al-Sadiq School", desc: "Establishing a religious school for future generations.", link: "https://www.facebook.com/share/r/1GVPmwQ7y4/" },
    { country: "Indonesia", tag: "Eid", icon: "🌙", title: "Eid al-Fitr Sermon", desc: "Eid prayers in Indonesia and presenting the flag of Imam Hussain.", link: "https://www.facebook.com/share/r/18hP2NvL3Q/" },
    { country: "Indonesia", tag: "Reception", icon: "🤝", title: "Reception of Pilgrims in Karbala", desc: "Welcoming Indonesian pilgrims in Karbala and encouraging knowledge.", link: "https://www.facebook.com/photo?fbid=871259829269822" },
    { country: "Pakistan", tag: "Quran", icon: "🧕", title: "Women's Quranic Program", desc: "Ramadan Quranic program (translation and tafseer) in Northern Pakistan.", link: "https://www.facebook.com/photo/?fbid=877487521980386" },
    { country: "Pakistan", tag: "Meeting", icon: "📜", title: "Meeting with Karbala Representative", desc: "Meeting between the center director and the Pakistan representative in Karbala.", link: "https://www.facebook.com/photo/?fbid=870541036008368" },
    { country: "Cameroon", tag: "Education", icon: "🏫", title: "Al-Habib Al-Mustafa School", desc: "Middle school in Bangourain village under the center's supervision.", link: "https://www.facebook.com/photo?fbid=886410567754748" },
  ];

  return (
    <div className="min-h-screen bg-black text-white selection:bg-emerald-500 selection:text-white font-sans">
      <main className="flex-1 p-6 md:p-12 lg:px-32 bg-gradient-to-b from-[#0a0a0a] via-black to-[#050505]" dir="ltr">
        <div className="relative mb-14 text-left">
          <div className="absolute -top-10 -left-10 w-64 h-64 bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none"></div>
          <span className="inline-block text-emerald-400 text-[9px] font-bold tracking-[0.2em] bg-emerald-400/10 px-4 py-1.5 rounded-full border border-emerald-400/20 mb-5 uppercase">Religious & Preaching Activities</span>
          <h1 className="text-3xl md:text-5xl font-black mb-5 tracking-tight leading-tight italic">Religious <span className="bg-gradient-to-r from-emerald-400 to-yellow-500 bg-clip-text text-transparent">Services</span></h1>
          <p className="text-zinc-500 text-sm md:text-base max-w-2xl font-light">Promoting the sciences of Aal-e-Muhammad (AS) and establishing mosques and schools worldwide.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {activities.map((item, idx) => (
            <div key={idx} className="group relative text-left">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500/10 to-yellow-500/10 rounded-[1.5rem] blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
              <div className="relative h-full bg-[#0d0d0d] border border-zinc-800/60 rounded-[1.5rem] p-6 flex flex-col justify-between hover:bg-zinc-900/40 transition-all duration-500">
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-12 h-12 flex items-center justify-center bg-zinc-900/80 rounded-xl border border-zinc-700 text-2xl">{item.icon}</div>
                    <div className="flex flex-col items-end gap-1">
                      <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider">{item.country}</span>
                      <span className="text-[8px] font-medium text-yellow-500/60 py-0.5 px-2 border border-yellow-500/10 rounded-full bg-yellow-500/5 uppercase">{item.tag}</span>
                    </div>
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-zinc-100 mb-3 group-hover:text-yellow-400 leading-snug">{item.title}</h3>
                  <p className="text-xs text-zinc-500 leading-relaxed font-light line-clamp-3">{item.desc}</p>
                </div>
                <a href={item.link} target="_blank" className="mt-8 flex items-center justify-center gap-2 py-3 bg-zinc-800/40 border border-zinc-700/50 rounded-xl text-[9px] font-bold text-zinc-400 hover:bg-yellow-500 hover:text-black transition-all uppercase shadow-lg">View Record 🎬</a>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}