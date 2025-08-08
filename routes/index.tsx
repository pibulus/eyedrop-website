import { Head } from "$fresh/runtime.ts";

export default function Home() {
  return (
    <>
      <Head>
        <title>Eyedrop - Look Away Sometimes</title>
        <meta name="description" content="A tiny Mac app that reminds you to look away from your screen. That's it." />
      </Head>
      
      <div class="min-h-screen bg-gradient-to-br from-orange-50 via-pink-50 to-yellow-50">
        
        {/* Hero Section */}
        <section class="px-6 py-24 text-center">
          <div class="max-w-3xl mx-auto">
            <div class="mb-12">
              <div class="inline-block p-8 bg-gradient-to-br from-orange-200 to-pink-200 border-8 border-black rounded-[3rem] shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] transform hover:rotate-3 transition-all duration-300">
                <div class="text-8xl font-black">20</div>
              </div>
            </div>
            
            <h1 class="text-7xl md:text-8xl font-black mb-8 text-gray-900">
              look away<br/>
              <span class="text-5xl md:text-6xl text-orange-500">sometimes</span>
            </h1>
            
            <p class="text-2xl md:text-3xl text-gray-700 mb-12 max-w-xl mx-auto font-medium">
              tiny mac app that taps you on the shoulder every 20 minutes
            </p>
            
            <div class="inline-block">
              <button class="px-12 py-6 bg-gradient-to-r from-green-400 to-emerald-400 hover:from-green-500 hover:to-emerald-500 text-black font-black text-2xl border-8 border-black rounded-[2rem] shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-200">
                Download
              </button>
              <p class="mt-4 text-gray-600 text-lg">macOS • free • 2mb</p>
            </div>
          </div>
        </section>

        {/* What it does */}
        <section class="px-6 py-20">
          <div class="max-w-4xl mx-auto">
            <h2 class="text-5xl font-black text-center mb-16 text-gray-900">
              what it does
            </h2>
            
            <div class="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
              <div class="p-8 bg-white border-6 border-black rounded-[2rem] shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] hover:rotate-1 transition-all duration-300">
                <div class="text-4xl font-black mb-4">⏱️</div>
                <h3 class="text-2xl font-black mb-3">counts to 20</h3>
                <p class="text-lg text-gray-700">
                  sits in your menu bar. counts minutes. that's literally it.
                </p>
              </div>
              
              <div class="p-8 bg-white border-6 border-black rounded-[2rem] shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] hover:rotate-1 transition-all duration-300">
                <div class="text-4xl font-black mb-4">💭</div>
                <h3 class="text-2xl font-black mb-3">gentle tap</h3>
                <p class="text-lg text-gray-700">
                  tiny notification that says "hey, look out the window"
                </p>
              </div>
              
              <div class="p-8 bg-white border-6 border-black rounded-[2rem] shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] hover:rotate-1 transition-all duration-300">
                <div class="text-4xl font-black mb-4">🌱</div>
                <h3 class="text-2xl font-black mb-3">no guilt</h3>
                <p class="text-lg text-gray-700">
                  skip it if you want. we're not your boss.
                </p>
              </div>
              
              <div class="p-8 bg-white border-6 border-black rounded-[2rem] shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] hover:rotate-1 transition-all duration-300">
                <div class="text-4xl font-black mb-4">✨</div>
                <h3 class="text-2xl font-black mb-3">just vibes</h3>
                <p class="text-lg text-gray-700">
                  no tracking, no cloud, no bs. just a timer.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* The science bit */}
        <section class="px-6 py-20">
          <div class="max-w-3xl mx-auto text-center">
            <div class="p-10 bg-gradient-to-r from-yellow-100 to-orange-100 border-8 border-black rounded-[2.5rem] shadow-[14px_14px_0px_0px_rgba(0,0,0,1)]">
              <h2 class="text-5xl font-black mb-8 text-gray-900">
                the science bit
              </h2>
              
              <div class="grid sm:grid-cols-3 gap-8 mb-8">
                <div class="text-center">
                  <div class="text-5xl font-black text-orange-600 mb-2">20</div>
                  <div class="text-lg font-bold text-gray-800">minutes</div>
                </div>
                
                <div class="text-center">
                  <div class="text-5xl font-black text-pink-600 mb-2">20</div>
                  <div class="text-lg font-bold text-gray-800">feet away</div>
                </div>
                
                <div class="text-center">
                  <div class="text-5xl font-black text-purple-600 mb-2">20</div>
                  <div class="text-lg font-bold text-gray-800">seconds</div>
                </div>
              </div>
              
              <p class="text-xl text-gray-700 font-medium mt-8">
                doctors say this works. we're just the messenger.
              </p>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section class="px-6 py-24 text-center">
          <div class="max-w-2xl mx-auto">
            <h2 class="text-6xl font-black mb-8 text-gray-900">
              ready?
            </h2>
            <button class="px-14 py-7 bg-gradient-to-r from-green-400 to-emerald-400 hover:from-green-500 hover:to-emerald-500 text-black font-black text-3xl border-8 border-black rounded-[2.5rem] shadow-[14px_14px_0px_0px_rgba(0,0,0,1)] hover:translate-x-2 hover:translate-y-2 hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] transition-all duration-200">
              Get It
            </button>
            <p class="mt-6 text-xl text-gray-600 font-medium">
              free forever • no sign up • 2mb download
            </p>
          </div>
        </section>

        {/* Footer */}
        <footer class="px-6 py-12 bg-black text-white">
          <div class="max-w-xl mx-auto text-center">
            <p class="text-xl font-bold mb-2">
              made in melbourne
            </p>
            <p class="text-gray-400">
              by someone who stares at screens too much
            </p>
          </div>
        </footer>
        
      </div>
    </>
  );
}