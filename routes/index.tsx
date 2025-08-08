import { Head } from "$fresh/runtime.ts";
import BouncyCard from "../islands/BouncyCard.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>Breather - The Gentle Tap You Need</title>
        <meta name="description" content="A chill Mac app for humans who forget to stretch, breathe, and be kind to themselves." />
      </Head>
      
      <div class="min-h-screen relative overflow-hidden bg-gradient-to-br from-rose-50/80 via-orange-50/60 to-amber-50/80">
        {/* Layered yummy mesh gradient */}
        <div class="absolute inset-0">
          <div class="absolute inset-0 opacity-60">
            <div class="absolute top-0 -left-40 w-96 h-96 bg-gradient-to-br from-rose-200/70 to-pink-300/50 rounded-full blur-3xl animate-pulse" style="animation-duration: 4s"></div>
            <div class="absolute top-40 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-orange-200/60 to-amber-300/70 rounded-full blur-3xl animate-pulse" style="animation-duration: 6s; animation-delay: 1s"></div>
            <div class="absolute bottom-0 left-1/3 w-[600px] h-[600px] bg-gradient-to-tr from-purple-200/40 to-pink-200/60 rounded-full blur-3xl animate-pulse" style="animation-duration: 5s; animation-delay: 2s"></div>
            <div class="absolute top-1/2 right-1/4 w-80 h-80 bg-gradient-to-br from-amber-200/50 to-orange-300/60 rounded-full blur-3xl animate-pulse" style="animation-duration: 7s; animation-delay: 1.5s"></div>
          </div>
        </div>
        
        {/* Content wrapper */}
        <div class="relative z-10">
        
        {/* Hero Section */}
        <section class="px-6 py-24 text-center">
          <div class="max-w-3xl mx-auto">
            <div class="mb-12">
              <div class="inline-block p-6 bg-gradient-to-br from-pink-300 to-orange-400 rounded-3xl border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-200">
                <div class="w-16 h-16 flex items-center justify-center">
                  <div class="w-8 h-8 bg-black rounded-full animate-pulse" style="animation-duration: 2s"></div>
                </div>
              </div>
            </div>
            
            <h1 class="text-6xl md:text-8xl font-black mb-6 text-black leading-tight">
              take a<br/>
              breather
            </h1>
            
            <p class="text-lg md:text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
              for humans who get lost in the flow and forget to stretch their back, pat the cat, or make that tea
            </p>
            
            <div class="inline-block">
              <button class="px-12 py-4 bg-yellow-400 hover:bg-yellow-500 text-black font-bold text-lg rounded-full border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 active:scale-95">
                Download Breather
              </button>
              <p class="mt-4 text-gray-500 text-sm">macOS • free • 2mb • yours</p>
            </div>
          </div>
        </section>

        {/* What it does */}
        <section class="px-6 py-20">
          <div class="max-w-5xl mx-auto">
            <h2 class="text-5xl md:text-6xl font-black text-center mb-16 text-black">
              your rhythm, your rules
            </h2>
            
            <div class="space-y-8">
              {/* Big feature - Set Your Pace */}
              <div class="flex flex-col md:flex-row items-center gap-8 p-8 bg-gradient-to-r from-orange-200 to-amber-200 rounded-3xl border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
                <div class="text-8xl">⏰</div>
                <div class="text-center md:text-left">
                  <h3 class="text-3xl font-black mb-3 text-black">Set Your Own Pace</h3>
                  <p class="text-lg text-gray-700 mb-4">15 minutes? 45? You decide. Change it anytime.</p>
                  <div class="inline-block px-6 py-2 bg-white rounded-full border-2 border-black text-sm font-bold">No judgement zone</div>
                </div>
              </div>
              
              {/* Two medium features */}
              <div class="grid md:grid-cols-2 gap-8">
                <div class="p-6 bg-gradient-to-br from-green-200 to-teal-200 rounded-2xl border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-200">
                  <div class="text-5xl mb-4">☕</div>
                  <h3 class="text-xl font-black mb-2 text-black">Gentle Nudges</h3>
                  <p class="text-sm text-gray-700">"stretch that back" or "make some tea" - warm reminders, not demands</p>
                </div>
                
                <div class="p-6 bg-gradient-to-br from-purple-200 to-pink-200 rounded-2xl border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-200">
                  <div class="text-5xl mb-4">🎛️</div>
                  <h3 class="text-xl font-black mb-2 text-black">Custom Break Length</h3>
                  <p class="text-sm text-gray-700">30 seconds or 5 minutes? Totally up to you and your vibe</p>
                </div>
              </div>
              
              {/* Danger zone feature */}
              <div class="p-6 bg-gradient-to-r from-red-200 to-pink-200 rounded-2xl border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-center">
                <div class="text-6xl mb-4">🚫</div>
                <h3 class="text-2xl font-black mb-3 text-black">The No-Skip Challenge</h3>
                <p class="text-gray-700 mb-4">Feeling brave? Remove the skip button and lock yourself into actually taking breaks</p>
                <div class="inline-block px-4 py-2 bg-red-500 text-white rounded-full border-2 border-black text-sm font-bold">Danger Zone</div>
              </div>
            </div>
          </div>
        </section>

        {/* Why breaks work */}
        <section class="px-6 py-20 bg-gradient-to-br from-blue-100 to-purple-100">
          <div class="max-w-4xl mx-auto text-center">
            <h2 class="text-4xl md:text-5xl font-black mb-12 text-black">
              the magic of micro-breaks
            </h2>
            
            <div class="grid md:grid-cols-3 gap-8 mb-12">
              <div class="p-8 bg-white rounded-2xl border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                <div class="text-6xl mb-4">🧠</div>
                <h3 class="text-xl font-black mb-2">Mental Reset</h3>
                <p class="text-gray-600 text-sm">Clear the mental clutter</p>
              </div>
              
              <div class="p-8 bg-white rounded-2xl border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                <div class="text-6xl mb-4">💪</div>
                <h3 class="text-xl font-black mb-2">Body Care</h3>
                <p class="text-gray-600 text-sm">Stretch, breathe, move</p>
              </div>
              
              <div class="p-8 bg-white rounded-2xl border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                <div class="text-6xl mb-4">✨</div>
                <h3 class="text-xl font-black mb-2">Flow Return</h3>
                <p class="text-gray-600 text-sm">Come back stronger</p>
              </div>
            </div>
            
            <div class="p-6 bg-yellow-300 rounded-2xl border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <p class="text-2xl font-black text-black">
                Small pauses → Better focus → Happier humans
              </p>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section class="px-6 py-20 text-center">
          <div class="max-w-2xl mx-auto">
            <h2 class="text-3xl md:text-4xl font-black mb-8 text-black">
              ready to be kinder to yourself?
            </h2>
            <button class="px-14 py-5 bg-yellow-400 hover:bg-yellow-500 text-black font-bold text-xl rounded-full border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-2 hover:translate-y-2 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 active:scale-95">
              Start Being Nice to Yourself
            </button>
            <p class="mt-6 text-sm text-gray-500 font-medium">
              free forever • no tracking • your rules
            </p>
          </div>
        </section>

        {/* Footer */}
        <footer class="px-6 py-12 text-center">
          <div class="max-w-xl mx-auto">
            <p class="text-gray-500 text-sm mb-2">
              Made with ❤️ by Dennis & Pablo
            </p>
            <p class="text-gray-400 text-xs">
              © 2025 Breather • Melbourne, Australia
            </p>
          </div>
        </footer>
        
        </div>
      </div>
    </>
  );
}