
export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#0D3B2E] text-white">
      <section className="px-6 py-24 text-center">
        <h1 className="text-6xl font-bold mb-6">
          Golf Links Network
        </h1>

        <p className="text-xl max-w-2xl mx-auto mb-10">
          Connecting business professionals through golf, networking,
          and exclusive tee-time experiences.
        </p>

        <div className="flex gap-4 justify-center">
          <button className="bg-[#C89B3C] px-6 py-3 rounded-xl text-black font-semibold">
            Join the Network
          </button>

          <button className="border border-white px-6 py-3 rounded-xl">
            Book Tee Time
          </button>
        </div>
      </section>

      <section className="bg-white text-black py-20 px-8">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
          <div className="shadow-xl rounded-2xl p-6">
            <h2 className="text-2xl font-bold mb-3">Business Networking</h2>
            <p>
              Meet entrepreneurs and executives on and off the course.
            </p>
          </div>

          <div className="shadow-xl rounded-2xl p-6">
            <h2 className="text-2xl font-bold mb-3">Tee Time Booking</h2>
            <p>
              Reserve rounds and invite members to exclusive golf events.
            </p>
          </div>

          <div className="shadow-xl rounded-2xl p-6">
            <h2 className="text-2xl font-bold mb-3">Member Community</h2>
            <p>
              Build partnerships through a premium golf-focused network.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
