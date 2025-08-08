import { Head } from "$fresh/runtime.ts";

export default function Home() {
  return (
    <>
      <Head>
        <title>👁️ Eyedrop - Your Eyes Deserve Better</title>
        <meta name="description" content="Gentle eye care reminders following the 20-20-20 rule. Every 20 minutes, look 20 feet away for 20 seconds." />
      </Head>
      
      <div class="min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-indigo-100">
        
        {/* Hero Section */}
        <section class="px-6 py-20 text-center">
          <div class="max-w-4xl mx-auto">
            <div class="mb-8">
              <div class="inline-block p-6 bg-white border-4 border-black rounded-3xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transform hover:translate-x-1 hover:translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-200">
                <span class="text-6xl">👁️</span>
              </div>
            </div>
            
            <h1 class="text-6xl font-black mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
              Your Eyes Deserve Better
            </h1>
            
            <p class="text-2xl text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed">
              Stop the strain. Follow the <strong>20-20-20 rule</strong> with gentle reminders 
              that actually make you want to take breaks.
            </p>
            
            <div class="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
              <button class="w-full sm:w-auto px-8 py-4 bg-green-400 hover:bg-green-500 text-black font-bold text-xl border-4 border-black rounded-2xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all duration-200">
                💧 Download for macOS
              </button>
              <button class="w-full sm:w-auto px-8 py-4 bg-yellow-400 hover:bg-yellow-500 text-black font-bold text-xl border-4 border-black rounded-2xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all duration-200">
                🎥 Watch Demo
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section class="px-6 py-20 bg-white/50">
          <div class="max-w-6xl mx-auto">
            <h2 class="text-4xl font-black text-center mb-16 text-gray-800">
              Why Your Eyes Will Thank You ✨
            </h2>
            
            <div class="grid md:grid-cols-3 gap-8">
              
              <div class="p-8 bg-white border-4 border-black rounded-3xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-2 hover:translate-y-2 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-300">
                <div class="text-5xl mb-6 text-center">⏰</div>
                <h3 class="text-2xl font-bold mb-4 text-gray-800">Smart Menu Bar Timer</h3>
                <p class="text-gray-600 leading-relaxed">
                  Lives quietly in your menu bar. Every 20 minutes, gently reminds you 
                  it's break time. No annoying pop-ups, just a friendly nudge.
                </p>
              </div>

              <div class="p-8 bg-white border-4 border-black rounded-3xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-2 hover:translate-y-2 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-300">
                <div class="text-5xl mb-6 text-center">🎯</div>
                <h3 class="text-2xl font-bold mb-4 text-gray-800">Eye Movement Ritual</h3>
                <p class="text-gray-600 leading-relaxed">
                  Follow the animated dot to exercise your eyes. 20 seconds of 
                  gentle movement to reset your focus and reduce strain.
                </p>
              </div>

              <div class="p-8 bg-white border-4 border-black rounded-3xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-2 hover:translate-y-2 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-300">
                <div class="text-5xl mb-6 text-center">📊</div>
                <h3 class="text-2xl font-bold mb-4 text-gray-800">Track Your Progress</h3>
                <p class="text-gray-600 leading-relaxed">
                  See how many breaks you've completed today. Build a healthy 
                  habit with gentle accountability, not shame.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 20-20-20 Explanation */}
        <section class="px-6 py-20">
          <div class="max-w-4xl mx-auto text-center">
            <div class="p-12 bg-gradient-to-r from-blue-100 to-purple-100 border-4 border-black rounded-3xl shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
              <h2 class="text-4xl font-black mb-8 text-gray-800">
                The 20-20-20 Rule 👀
              </h2>
              
              <div class="grid sm:grid-cols-3 gap-8 mb-8">
                <div class="text-center">
                  <div class="text-4xl font-black text-blue-600 mb-2">20</div>
                  <div class="text-lg font-semibold text-gray-700">Minutes</div>
                  <p class="text-gray-600 mt-2">Every 20 minutes of screen time</p>
                </div>
                
                <div class="text-center">
                  <div class="text-4xl font-black text-purple-600 mb-2">20</div>
                  <div class="text-lg font-semibold text-gray-700">Feet</div>
                  <p class="text-gray-600 mt-2">Look at something 20+ feet away</p>
                </div>
                
                <div class="text-center">
                  <div class="text-4xl font-black text-pink-600 mb-2">20</div>
                  <div class="text-lg font-semibold text-gray-700">Seconds</div>
                  <p class="text-gray-600 mt-2">For at least 20 seconds</p>
                </div>
              </div>
              
              <p class="text-xl text-gray-700 leading-relaxed">
                Recommended by eye doctors worldwide to reduce digital eye strain, 
                dry eyes, and headaches from excessive screen time.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section class="px-6 py-20 bg-gradient-to-r from-green-100 to-blue-100">
          <div class="max-w-4xl mx-auto text-center">
            <h2 class="text-4xl font-black mb-6 text-gray-800">
              Ready to Give Your Eyes a Break?
            </h2>
            <p class="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
              Join thousands of people who've reduced eye strain and improved their 
              daily comfort with Eyedrop.
            </p>
            
            <button class="px-12 py-6 bg-orange-400 hover:bg-orange-500 text-black font-black text-2xl border-4 border-black rounded-2xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-2 hover:translate-y-2 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-200">
              🍎 Download for macOS
            </button>
            
            <div class="mt-6 text-gray-600">
              <p>✅ Free forever &nbsp; ✅ No account required &nbsp; ✅ Privacy first</p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer class="px-6 py-12 bg-gray-900 text-white">
          <div class="max-w-4xl mx-auto text-center">
            <div class="text-4xl mb-4">👁️</div>
            <p class="text-gray-400 mb-4">
              Built with love for digital workers everywhere.
            </p>
            <p class="text-gray-500 text-sm">
              Made by Pablo • Bangkok Cyberpunk Energy ⚡
            </p>
          </div>
        </footer>

      </div>
    </>
  );
}
