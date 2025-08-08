import { Head } from "$fresh/runtime.ts";

export default function Home() {
  return (
    <>
      <Head>
        <title>Eyedrop - Gentle Break Reminders</title>
        <meta name="description" content="A warm little Mac app that helps you take screen breaks. No guilt, just gentle reminders." />
      </Head>
      
      <div class="min-h-screen relative overflow-hidden">
        {/* Mesh gradient background */}
        <div class="absolute inset-0 bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50">
          <div class="absolute inset-0 opacity-60">
            <div class="absolute top-0 -left-40 w-96 h-96 bg-gradient-to-br from-amber-200 to-orange-300 rounded-full blur-3xl animate-pulse"></div>
            <div class="absolute top-40 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-rose-200 to-pink-300 rounded-full blur-3xl animate-pulse" style="animation-delay: 1s"></div>
            <div class="absolute bottom-0 left-1/3 w-[600px] h-[600px] bg-gradient-to-tr from-yellow-200 to-amber-300 rounded-full blur-3xl animate-pulse" style="animation-delay: 2s"></div>
            <div class="absolute top-1/2 right-1/4 w-80 h-80 bg-gradient-to-br from-peach-200 to-coral-300 rounded-full blur-3xl animate-pulse" style="animation-delay: 1.5s"></div>
          </div>
        </div>
        
        {/* Content wrapper */}
        <div class="relative z-10">
        
        {/* Hero Section */}
        <section class="px-6 py-24 text-center">
          <div class="max-w-3xl mx-auto">
            {/* Warm break-focused graphic */}
            <div class="mb-12">
              <div class="inline-block p-8 bg-gradient-to-br from-amber-100/80 to-orange-100/80 backdrop-blur-sm border-4 border-amber-900/20 rounded-[3rem] shadow-2xl transform hover:scale-105 transition-all duration-500">
                <div class="text-7xl">☕</div>
              </div>
            </div>
            
            <h1 class="text-6xl md:text-7xl font-black mb-8 text-amber-900">
              take a moment<br/>
              <span class="text-4xl md:text-5xl bg-gradient-to-r from-amber-600 to-orange-500 bg-clip-text text-transparent">breathe deeply</span>
            </h1>
            
            <p class="text-xl md:text-2xl text-amber-800/80 mb-12 max-w-xl mx-auto font-medium">
              a warm friend that reminds you to rest your mind every 20 minutes
            </p>
            
            <div class="inline-block">
              <button class="px-12 py-6 bg-gradient-to-r from-amber-400 to-orange-400 hover:from-amber-500 hover:to-orange-500 text-white font-black text-2xl border-2 border-amber-900/20 rounded-full shadow-2xl hover:scale-105 hover:shadow-3xl transition-all duration-300 backdrop-blur-sm">
                Start Resting Better
              </button>
              <p class="mt-4 text-amber-700/70 text-lg font-medium">macOS • always free • tiny 2mb</p>
            </div>
          </div>
        </section>

        {/* What it does - super simple */}
        <section class="px-6 py-20">
          <div class="max-w-4xl mx-auto">
            <h2 class="text-5xl font-black text-center mb-16 bg-gradient-to-r from-amber-700 to-orange-600 bg-clip-text text-transparent">
              how it helps
            </h2>
            
            <div class="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
              <div class="p-8 bg-white/60 backdrop-blur-md border-2 border-amber-200 rounded-3xl shadow-xl hover:scale-105 hover:bg-white/70 transition-all duration-300">
                <div class="text-4xl mb-4">⏰</div>
                <h3 class="text-2xl font-bold mb-3 text-amber-900">gentle rhythm</h3>
                <p class="text-lg text-amber-700/80">
                  creates a healthy work rhythm. 20 minutes focus, then breathe.
                </p>
              </div>
              
              <div class="p-8 bg-white/60 backdrop-blur-md border-2 border-orange-200 rounded-3xl shadow-xl hover:scale-105 hover:bg-white/70 transition-all duration-300">
                <div class="text-4xl mb-4">🌅</div>
                <h3 class="text-2xl font-bold mb-3 text-amber-900">soft reminders</h3>
                <p class="text-lg text-amber-700/80">
                  warm nudges to stretch, breathe, or gaze into the distance
                </p>
              </div>
              
              <div class="p-8 bg-white/60 backdrop-blur-md border-2 border-rose-200 rounded-3xl shadow-xl hover:scale-105 hover:bg-white/70 transition-all duration-300">
                <div class="text-4xl mb-4">🍃</div>
                <h3 class="text-2xl font-bold mb-3 text-amber-900">your pace</h3>
                <p class="text-lg text-amber-700/80">
                  skip when you need to. it's about progress, not perfection.
                </p>
              </div>
              
              <div class="p-8 bg-white/60 backdrop-blur-md border-2 border-yellow-200 rounded-3xl shadow-xl hover:scale-105 hover:bg-white/70 transition-all duration-300">
                <div class="text-4xl mb-4">💫</div>
                <h3 class="text-2xl font-bold mb-3 text-amber-900">stays simple</h3>
                <p class="text-lg text-amber-700/80">
                  no accounts, no tracking. just you and better habits.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 20-20-20 Explanation - simplified */}
        <section class="px-6 py-20">
          <div class="max-w-3xl mx-auto text-center">
            <div class="p-10 bg-gradient-to-br from-amber-50/80 to-orange-50/80 backdrop-blur-md border-2 border-amber-200 rounded-[2.5rem] shadow-2xl">
              <h2 class="text-4xl font-black mb-8 bg-gradient-to-r from-amber-700 to-orange-600 bg-clip-text text-transparent">
                the gentle science
              </h2>
              
              <div class="grid sm:grid-cols-3 gap-8 mb-8">
                <div class="text-center">
                  <div class="text-5xl font-black bg-gradient-to-br from-amber-500 to-amber-600 bg-clip-text text-transparent mb-2">20</div>
                  <div class="text-lg font-semibold text-amber-700">minutes work</div>
                </div>
                
                <div class="text-center">
                  <div class="text-5xl font-black bg-gradient-to-br from-orange-500 to-orange-600 bg-clip-text text-transparent mb-2">20</div>
                  <div class="text-lg font-semibold text-amber-700">feet to gaze</div>
                </div>
                
                <div class="text-center">
                  <div class="text-5xl font-black bg-gradient-to-br from-rose-500 to-rose-600 bg-clip-text text-transparent mb-2">20</div>
                  <div class="text-lg font-semibold text-amber-700">seconds rest</div>
                </div>
              </div>
              
              <p class="text-xl text-amber-700/80 font-medium mt-8">
                trusted by optometrists, loved by humans who care about wellness
              </p>
            </div>
          </div>
        </section>

        {/* Simple CTA */}
        <section class="px-6 py-24 text-center">
          <div class="max-w-2xl mx-auto">
            <h2 class="text-5xl font-black mb-8 bg-gradient-to-r from-amber-700 to-orange-600 bg-clip-text text-transparent">
              ready to rest better?
            </h2>
            <button class="px-14 py-7 bg-gradient-to-r from-amber-400 to-orange-400 hover:from-amber-500 hover:to-orange-500 text-white font-black text-2xl border-2 border-amber-900/20 rounded-full shadow-2xl hover:scale-105 hover:shadow-3xl transition-all duration-300 backdrop-blur-sm">
              Download Eyedrop
            </button>
            <p class="mt-6 text-xl text-amber-700/70 font-medium">
              free forever • no accounts • just 2mb of care
            </p>
          </div>
        </section>

        {/* Footer - minimal */}
        <footer class="px-6 py-12 bg-gradient-to-t from-amber-100/50 to-transparent">
          <div class="max-w-xl mx-auto text-center">
            <p class="text-xl font-bold mb-2 text-amber-900">
              crafted with care in melbourne
            </p>
            <p class="text-amber-700/70">
              by someone learning to take breaks too
            </p>
          </div>
        </footer>
        
      </div>
      </div>
    </>
  );
}