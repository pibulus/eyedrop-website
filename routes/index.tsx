import { Head } from "$fresh/runtime.ts";

// ===================================================================
// DAYPAUSE LANDING PAGE - Soft Stack Redesign 
// ===================================================================
// Warm, conspiratorial, chunky design with breathing animations
// Color palette: warm cream bg, saturated pastels, breathing gradients
// Typography: Large, chonky headers with soft line-heights
// Copy tone: Casual Soft Stack voice, friend energy

export default function Home() {
  return (
    <>
      <Head>
        <html lang="en" />
        <title>DayPause - Break Reminders That Don't Suck</title>
        <meta name="description" content="Smart break reminders for people who actually work. Your back, eyes, and brain will thank you." />
        <meta name="keywords" content="break reminder, productivity, health, eye strain, back pain, work breaks, wellness, focus, desktop app, macOS" />
        <meta name="author" content="Dennis & Pablo" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://daypause.app" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://daypause.app" />
        <meta property="og:title" content="DayPause - Break Reminders That Don't Suck" />
        <meta property="og:description" content="Smart break reminders for people who actually work. Your back, eyes, and brain will thank you." />
        <meta property="og:image" content="https://daypause.app/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="DayPause" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://daypause.app" />
        <meta name="twitter:title" content="DayPause - Break Reminders That Don't Suck" />
        <meta name="twitter:description" content="Smart break reminders for people who actually work. Your back, eyes, and brain will thank you." />
        <meta name="twitter:image" content="https://daypause.app/og-image.jpg" />
        <meta name="twitter:creator" content="@pablomurdoch" />
        
        {/* Favicons */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#FFE08A" />
        
        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "DayPause",
            "description": "Smart break reminders for people who actually work. Your back, eyes, and brain will thank you.",
            "url": "https://daypause.app",
            "applicationCategory": "ProductivityApplication",
            "operatingSystem": "macOS",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            },
            "author": {
              "@type": "Organization",
              "name": "Dennis & Pablo",
              "url": "https://daypause.app"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "5.0",
              "ratingCount": "1"
            }
          })}
        </script>
        
        <style>
          {`
            @keyframes breathe {
              0%, 100% { 
                transform: scale(1) translateX(0) translateY(0); 
                opacity: 0.4; 
              }
              50% { 
                transform: scale(1.1) translateX(10px) translateY(-10px); 
                opacity: 0.6; 
              }
            }
          `}
        </style>
      </Head>
      
      {/* ===================================================================
          MAIN CONTAINER - Warm cream background with breathing gradients
          =================================================================== */}
      <div class="min-h-screen relative overflow-hidden bg-[#FFF8F0]">
        
        {/* Animated background gradients with breathing effect */}
        <div class="absolute inset-0">
          <div class="absolute inset-0 opacity-40">
            <div 
              class="absolute top-0 -left-40 w-96 h-96 rounded-full blur-3xl" 
              style="background: linear-gradient(135deg, #FF99B7, #FFE08A); animation: breathe 8s ease-in-out infinite;"
            ></div>
            <div 
              class="absolute top-40 right-0 w-[500px] h-[500px] rounded-full blur-3xl" 
              style="background: linear-gradient(225deg, #FFE08A, #A0D9FF); animation: breathe 10s ease-in-out infinite; animation-delay: 2s;"
            ></div>
            <div 
              class="absolute bottom-0 left-1/3 w-[600px] h-[600px] rounded-full blur-3xl" 
              style="background: linear-gradient(45deg, #FF99B7, #A7F3D0); animation: breathe 12s ease-in-out infinite; animation-delay: 4s;"
            ></div>
            <div 
              class="absolute top-1/2 right-1/4 w-80 h-80 rounded-full blur-3xl" 
              style="background: linear-gradient(315deg, #A7F3D0, #FF99B7); animation: breathe 9s ease-in-out infinite; animation-delay: 1s;"
            ></div>
          </div>
        </div>
        
        {/* ===================================================================
            CONTENT WRAPPER - All content sits above background
            =================================================================== */}
        <div class="relative z-10">
        
          {/* ===================================================================
              HERO SECTION - Immediate impact with chunky design
              =================================================================== */}
          <section class="px-6 py-16 text-center">
            
            {/* Friendly waving icon with gradient background */}
            <div 
              class="inline-block p-10 rounded-3xl border-6 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] mb-12 hover:scale-105 hover:-rotate-2 transition-all duration-700 ease-out group" 
              style="background: linear-gradient(135deg, #FF99B7, #FFE08A);"
            >
              <div class="w-28 h-28 flex items-center justify-center">
                <img 
                  src="/daypause-icon.png" 
                  alt="DayPause" 
                  class="w-28 h-28 object-contain group-hover:scale-110 transition-transform duration-500 ease-out"
                />
              </div>
            </div>
            
            {/* Main headline - chunky and friendly */}
            <h1 
              class="text-7xl md:text-9xl lg:text-[10rem] font-black mb-8 text-black" 
              style="line-height: 1.1;"
            >
              DayPause
            </h1>
            
            {/* Hero tagline - natural confident energy */}
            <p 
              class="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-black max-w-5xl mx-auto" 
              style="line-height: 1.3;"
            >
              Break reminders that don't suck.
            </p>
            
            {/* Supporting copy */}
            <p 
              class="text-xl md:text-2xl text-gray-700 mb-12 max-w-3xl mx-auto" 
              style="line-height: 1.4;"
            >
              Smart reminders for people who actually work. Your back, eyes, and brain will thank you.
            </p>
            
            {/* Primary CTA with tooltip easter egg */}
            <div class="space-y-6">
              <button 
                class="px-16 py-6 bg-yellow-400 hover:bg-yellow-500 text-black font-black text-2xl md:text-3xl rounded-full border-6 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:translate-x-2 hover:translate-y-2 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 active:scale-95 mb-4" 
                title="Click me, I dare you"
              >
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

          {/* ===================================================================
              PROBLEM STATEMENT - Conspiratorial friend energy
              =================================================================== */}
          <section 
            class="px-6 py-16 border-y-8 border-black" 
            style="background: linear-gradient(to right, #FF99B7, #FFE08A);"
          >
            <div class="max-w-4xl mx-auto text-center">
              <h2 
                class="text-5xl md:text-7xl lg:text-8xl font-black mb-8 text-black" 
                style="line-height: 1.2;"
              >
                You work. We remind.
              </h2>
              <p 
                class="text-2xl md:text-3xl text-gray-800" 
                style="line-height: 1.4;"
              >
                Hours disappear. Your spine curves. Your eyes dry out. Sometimes you need someone looking out for you.
              </p>
            </div>
          </section>
          
          {/* ===================================================================
              SOLUTION BENEFITS - Three chunky benefit cards
              =================================================================== */}
          <section class="px-6 py-20">
            <div class="max-w-5xl mx-auto text-center">
              <h2 
                class="text-5xl md:text-7xl lg:text-8xl font-black mb-10 text-black" 
                style="line-height: 1.2;"
              >
                Built for how you actually work.
              </h2>
              
              <div class="grid md:grid-cols-3 gap-8 mt-12">
                {/* Mental Reset Card */}
                <div 
                  class="p-8 bg-white rounded-3xl border-6 border-black shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] hover:translate-x-2 hover:translate-y-2 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 cursor-pointer group"
                >
                  <div class="text-4xl mb-4 group-hover:animate-bounce">🧠</div>
                  <h3 class="text-3xl font-black mb-4 text-black" style="line-height: 1.3;">Mental Reset</h3>
                  <p class="text-gray-700 text-xl" style="line-height: 1.4;">Clear the mental clutter. Come back with fresh eyes and sharper focus.</p>
                </div>
                
                {/* Body Care Card */}
                <div 
                  class="p-8 bg-white rounded-3xl border-6 border-black shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] hover:translate-x-2 hover:translate-y-2 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 cursor-pointer group"
                >
                  <div class="text-4xl mb-4 group-hover:animate-pulse">🫁</div>
                  <h3 class="text-3xl font-black mb-4 text-black" style="line-height: 1.3;">Body Care</h3>
                  <p class="text-gray-700 text-xl" style="line-height: 1.4;">Stretch that spine. Roll those shoulders. Breathe like a human, not a machine.</p>
                </div>
                
                {/* Flow Return Card */}
                <div 
                  class="p-8 bg-white rounded-3xl border-6 border-black shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] hover:translate-x-2 hover:translate-y-2 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 cursor-pointer group"
                >
                  <div class="text-4xl mb-4 group-hover:animate-spin">⚡</div>
                  <h3 class="text-3xl font-black mb-4 text-black" style="line-height: 1.3;">Flow Return</h3>
                  <p class="text-gray-700 text-xl" style="line-height: 1.4;">Small pauses → Better focus. You'll come back stronger, not scattered.</p>
                </div>
              </div>
            </div>
          </section>

          {/* ===================================================================
              FEATURES SECTION - Casual language, demo placeholder
              =================================================================== */}
          <section 
            class="px-6 py-20 border-y-8 border-black" 
            style="background: linear-gradient(to right, #A7F3D0, #A0D9FF);"
          >
            <div class="max-w-6xl mx-auto">
              <h2 
                class="text-5xl md:text-7xl lg:text-8xl font-black mb-14 text-center text-black" 
                style="line-height: 1.2;"
              >
                How it works
              </h2>
              
              <div class="grid md:grid-cols-2 gap-12 items-center">
                <div class="space-y-8">
                  {/* Custom Timing Feature */}
                  <div class="p-6 bg-white rounded-2xl border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-2 hover:translate-y-2 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 cursor-pointer hover:bg-yellow-50">
                    <h3 class="text-3xl font-black mb-4 text-black" style="line-height: 1.3;">Your Schedule</h3>
                    <p class="text-gray-700 text-xl" style="line-height: 1.4;">15 minutes, 2 hours, whatever works. Change it whenever you want.</p>
                  </div>
                  
                  {/* Smart Reminders Feature */}
                  <div class="p-6 bg-white rounded-2xl border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-2 hover:translate-y-2 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 cursor-pointer hover:bg-green-50">
                    <h3 class="text-3xl font-black mb-4 text-black" style="line-height: 1.3;">Smart Reminders</h3>
                    <p class="text-gray-700 text-xl" style="line-height: 1.4;">Gentle suggestions like "stretch" or "hydrate." Never pushy, never annoying.</p>
                  </div>
                  
                  {/* Focus Mode Feature */}
                  <div class="p-6 bg-white rounded-2xl border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-2 hover:translate-y-2 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 cursor-pointer hover:bg-red-50">
                    <h3 class="text-3xl font-black mb-4 text-black" style="line-height: 1.3;">Focus Mode</h3>
                    <p class="text-gray-700 text-xl" style="line-height: 1.4;">No skip button when you really need to step away. <span class="text-red-600 font-bold">Use wisely.</span></p>
                  </div>
                </div>
                
                {/* Demo placeholder with breathing animation */}
                <div class="text-center">
                  <div 
                    class="p-12 rounded-3xl border-6 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]" 
                    style="background: linear-gradient(135deg, #FF99B7, #FFE08A); animation: breathe 6s ease-in-out infinite;"
                  >
                    <div class="text-6xl mb-4">⏰</div>
                    <p class="text-2xl font-black text-black">Demo loading...</p>
                    <p class="text-gray-700 mt-2">Hold up... catching our breath</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ===================================================================
              FINAL CTA SECTION - Last chance conversion
              =================================================================== */}
          <section class="px-6 py-20 text-center">
            <div class="max-w-4xl mx-auto">
              <h2 
                class="text-5xl md:text-7xl lg:text-8xl font-black mb-10 text-black" 
                style="line-height: 1.2;"
              >
                Ready to be human again?
              </h2>
              
              <button 
                class="px-20 py-8 bg-yellow-400 hover:bg-yellow-500 text-black font-black text-3xl md:text-4xl rounded-full border-8 border-black shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] hover:translate-x-3 hover:translate-y-3 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 active:scale-95 mb-6" 
                title="Seriously, your back needs this"
              >
                Download DayPause
              </button>
              
              <p class="text-xl text-gray-600 font-bold">
                Free • 2mb • macOS • Yours forever
              </p>
            </div>
          </section>

          {/* ===================================================================
              FOOTER - Easter egg copy with maker credits
              =================================================================== */}
          <footer class="px-6 py-8 text-center border-t-4 border-black bg-gradient-to-r from-gray-100 to-gray-200">
            <p class="text-gray-600 text-lg font-bold mb-2">
              Made by humans for humans who sometimes forget they're human.
            </p>
            <p class="text-gray-500 text-sm">
              Dennis & Pablo • Melbourne, Australia • Currently avoiding our own breaks
            </p>
          </footer>
          
        </div>
      </div>
    </>
  );
}