import { Head } from "$fresh/runtime.ts";

export default function Home() {
  return (
    <>
      <Head>
        <title>Breather - Break Reminders for Humans</title>
        <meta name="description" content="Breathe. Blink. Stretch. Repeat. Break reminders for people who forget to be human." />
      </Head>
      
      <div class="min-h-screen relative overflow-hidden">
        {/* Oozy mesh gradient background */}
        <div class="absolute inset-0 bg-gradient-to-br from-orange-50 via-pink-50 to-yellow-50">
          <div class="absolute inset-0 opacity-60">
            <div class="absolute top-0 -left-40 w-96 h-96 bg-gradient-to-br from-orange-200 to-pink-300 rounded-full blur-3xl animate-pulse"></div>
            <div class="absolute top-40 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-yellow-200 to-orange-300 rounded-full blur-3xl animate-pulse" style="animation-delay: 1s"></div>
            <div class="absolute bottom-0 left-1/3 w-[600px] h-[600px] bg-gradient-to-tr from-pink-200 to-rose-300 rounded-full blur-3xl animate-pulse" style="animation-delay: 2s"></div>
            <div class="absolute top-1/2 right-1/4 w-80 h-80 bg-gradient-to-br from-yellow-300 to-orange-400 rounded-full blur-3xl animate-pulse" style="animation-delay: 1.5s"></div>
          </div>
        </div>
        
        {/* Content wrapper */}
        <div class="relative z-10">
        
        {/* HERO SECTION - Hit Like a Freight Train */}
        <section class="px-6 py-16 text-center">
          {/* Bigger, More Playful Logo */}
          <div class="inline-block p-6 bg-gradient-to-br from-pink-300 to-orange-400 rounded-3xl border-6 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] mb-12 animate-pulse hover:animate-bounce transition-all duration-300">
            <div class="w-16 h-16 flex items-center justify-center">
              <div class="w-8 h-8 bg-black rounded-full animate-pulse"></div>
            </div>
          </div>
          
          {/* Punchy Headlines */}
          <h1 class="text-6xl md:text-8xl lg:text-9xl font-black mb-6 text-black leading-none">
            Breather
          </h1>
          
          <p class="text-2xl md:text-3xl font-bold mb-4 text-black max-w-4xl mx-auto leading-tight">
            Breathe. Blink. Stretch. Repeat.
          </p>
          
          <p class="text-lg md:text-xl text-gray-700 mb-12 max-w-2xl mx-auto">
            Break reminders for people who forget to be human.
          </p>
          
          {/* HUGE Download Button */}
          <div class="space-y-6">
            <button class="px-16 py-6 bg-yellow-400 hover:bg-yellow-500 text-black font-black text-2xl md:text-3xl rounded-full border-6 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:translate-x-2 hover:translate-y-2 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 active:scale-95 mb-4">
              Download for macOS
            </button>
            <div class="space-y-2">
              <p class="text-gray-600 font-bold">Free • 2mb • Yours forever</p>
              <button class="text-blue-600 hover:text-blue-800 font-bold underline text-lg">
                See it in action ↓
              </button>
            </div>
          </div>
        </section>

        {/* PROBLEM STATEMENT */}
        <section class="px-6 py-16 bg-gradient-to-r from-red-200 to-pink-200 border-y-8 border-black">
          <div class="max-w-4xl mx-auto text-center">
            <h2 class="text-4xl md:text-6xl font-black mb-6 text-black">
              You forget to take breaks.
            </h2>
            <p class="text-xl md:text-2xl text-gray-800 leading-relaxed">
              Hours disappear. Your back aches. Your eyes burn. You're grinding yourself into dust, one uninterrupted session at a time.
            </p>
          </div>
        </section>
        
        {/* SOLUTION */}
        <section class="px-6 py-20">
          <div class="max-w-5xl mx-auto text-center">
            <h2 class="text-4xl md:text-6xl font-black mb-8 text-black">
              Breather interrupts you just right.
            </h2>
            
            <div class="grid md:grid-cols-3 gap-8 mt-12">
              <div class="p-8 bg-gradient-to-br from-blue-200 to-purple-200 rounded-3xl border-6 border-black shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] hover:translate-x-2 hover:translate-y-2 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 cursor-pointer group">
                <div class="text-4xl mb-4 group-hover:animate-bounce">🧠</div>
                <h3 class="text-2xl font-black mb-3 text-black">Mental Reset</h3>
                <p class="text-gray-700 text-lg">Clear the mental clutter. Come back with fresh eyes and sharper focus.</p>
              </div>
              
              <div class="p-8 bg-gradient-to-br from-green-200 to-teal-200 rounded-3xl border-6 border-black shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] hover:translate-x-2 hover:translate-y-2 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 cursor-pointer group">
                <div class="text-4xl mb-4 group-hover:animate-pulse">🫁</div>
                <h3 class="text-2xl font-black mb-3 text-black">Body Care</h3>
                <p class="text-gray-700 text-lg">Stretch that spine. Roll those shoulders. Breathe like a human, not a machine.</p>
              </div>
              
              <div class="p-8 bg-gradient-to-br from-orange-200 to-amber-200 rounded-3xl border-6 border-black shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] hover:translate-x-2 hover:translate-y-2 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 cursor-pointer group">
                <div class="text-4xl mb-4 group-hover:animate-spin">⚡</div>
                <h3 class="text-2xl font-black mb-3 text-black">Flow Return</h3>
                <p class="text-gray-700 text-lg">Small pauses → Better focus. You'll come back stronger, not scattered.</p>
              </div>
            </div>
          </div>
        </section>

        {/* FEATURES - Your Rhythm, Your Rules */}
        <section class="px-6 py-20 bg-gradient-to-r from-orange-200 to-amber-200 border-y-8 border-black">
          <div class="max-w-6xl mx-auto">
            <h2 class="text-4xl md:text-6xl font-black mb-12 text-center text-black">
              Your Rhythm, Your Rules
            </h2>
            
            <div class="grid md:grid-cols-2 gap-12 items-center">
              <div class="space-y-8">
                <div class="p-6 bg-white rounded-2xl border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-2 hover:translate-y-2 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 cursor-pointer hover:bg-yellow-50">
                  <h3 class="text-2xl font-black mb-3 text-black">Custom Intervals</h3>
                  <p class="text-gray-700 text-lg">15 minutes? 45? 2 hours? Set any interval. Change it anytime. No judgment zone.</p>
                </div>
                
                <div class="p-6 bg-white rounded-2xl border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-2 hover:translate-y-2 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 cursor-pointer hover:bg-green-50">
                  <h3 class="text-2xl font-black mb-3 text-black">Gentle Nudges</h3>
                  <p class="text-gray-700 text-lg">Warm reminders, not demands. "Stretch that back" or "make some tea" - never bossy.</p>
                </div>
                
                <div class="p-6 bg-white rounded-2xl border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-2 hover:translate-y-2 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 cursor-pointer hover:bg-red-50">
                  <h3 class="text-2xl font-black mb-3 text-black">Challenge Mode</h3>
                  <p class="text-gray-700 text-lg">Remove the skip button. Lock yourself into actually taking breaks. <span class="text-red-600 font-bold">Danger zone.</span></p>
                </div>
              </div>
              
              <div class="text-center">
                {/* Placeholder for demo gif/animation */}
                <div class="p-12 bg-gradient-to-br from-pink-300 to-orange-400 rounded-3xl border-6 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] animate-pulse">
                  <div class="text-6xl mb-4">⏰</div>
                  <p class="text-2xl font-black text-black">Demo goes here</p>
                  <p class="text-gray-700 mt-2">Looping gif of app in action</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section class="px-6 py-20 text-center">
          <div class="max-w-4xl mx-auto">
            <h2 class="text-4xl md:text-6xl font-black mb-8 text-black">
              Ready to be human again?
            </h2>
            
            <button class="px-20 py-8 bg-yellow-400 hover:bg-yellow-500 text-black font-black text-3xl md:text-4xl rounded-full border-8 border-black shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] hover:translate-x-3 hover:translate-y-3 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 active:scale-95 mb-6">
              Download Breather
            </button>
            
            <p class="text-xl text-gray-600 font-bold">
              Free • 2mb • macOS • Yours forever
            </p>
          </div>
        </section>

        {/* Footer */}
        <footer class="px-6 py-8 text-center border-t-4 border-black bg-gradient-to-r from-gray-100 to-gray-200">
          <p class="text-gray-600 text-sm font-bold">
            Made with ❤️ by Dennis & Pablo • Melbourne, Australia
          </p>
        </footer>
        
        </div>
      </div>
    </>
  );
}