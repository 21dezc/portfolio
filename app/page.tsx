import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen px-6 py-10 sm:px-12 lg:px-20" style={{ background: "#141414", color: "#F0F0F0" }}>
      <section
        className="mx-auto max-w-6xl rounded-3xl p-8 sm:p-12"
        style={{ background: "#1E1E1E", border: "0.5px solid #2A2A2A" }}
      >
        <div className="grid gap-10 lg:grid-cols-[270px_1fr] lg:items-center">
          <div
            className="mx-auto w-64 overflow-hidden rounded-3xl shadow-xl"
            style={{ border: "0.5px solid #2A2A2A", background: "#141414" }}
          >
            <Image
              src="/cat2.jpg"
              alt="Chompoo profile"
              width={400}
              height={500}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="space-y-6 text-center lg:text-left">
            <div>
              <p className="text-sm uppercase tracking-[0.3em]" style={{ color: "#555555" }}>
                Portfolio
              </p>
              <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl" style={{ color: "#FFFFFF" }}>
                Hi, I'm Chompoo
              </h1>
              <p className="mt-4 max-w-xl sm:text-lg" style={{ color: "#888888" }}>
                Student, creative thinker, and aspiring developer from KKU. I build polished digital experiences and
                love designing clean, modern interfaces.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl p-4" style={{ background: "#141414", border: "0.5px solid #2A2A2A" }}>
                <p className="text-sm uppercase tracking-[0.24em]" style={{ color: "#555555" }}>
                  Student ID
                </p>
                <p className="mt-2 text-xl font-semibold" style={{ color: "#FFFFFF" }}>
                  6767676767
                </p>
              </div>
              <div className="rounded-3xl p-4" style={{ background: "#141414", border: "0.5px solid #2A2A2A" }}>
                <p className="text-sm uppercase tracking-[0.24em]" style={{ color: "#555555" }}>
                  University
                </p>
                <p className="mt-2 text-xl font-semibold" style={{ color: "#FFFFFF" }}>
                  KKU
                </p>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl p-4" style={{ background: "#141414", border: "0.5px solid #2A2A2A" }}>
                <p className="text-sm uppercase tracking-[0.24em]" style={{ color: "#555555" }}>
                  Major
                </p>
                <p className="mt-2 text-xl font-semibold" style={{ color: "#FFFFFF" }}>
                  Computer Science
                </p>
              </div>
              <div className="rounded-3xl p-4" style={{ background: "#141414", border: "0.5px solid #2A2A2A" }}>
                <p className="text-sm uppercase tracking-[0.24em]" style={{ color: "#555555" }}>
                  Zodiac
                </p>
                <p className="mt-2 text-xl font-semibold" style={{ color: "#FFFFFF" }}>
                  Secret
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl p-6" style={{ background: "#141414", border: "0.5px solid #2A2A2A" }}>
            <h2 className="text-lg font-semibold" style={{ color: "#FFFFFF" }}>
              About Me
            </h2>
            <p className="mt-3" style={{ color: "#888888" }}>
              Passionate about learning new technologies, solving problems, and creating meaningful projects for web and
              mobile users.
            </p>
          </div>
          <div className="rounded-3xl p-6" style={{ background: "#141414", border: "0.5px solid #2A2A2A" }}>
            <h2 className="text-lg font-semibold" style={{ color: "#FFFFFF" }}>
              Skills
            </h2>
            <ul className="mt-3 space-y-2" style={{ color: "#888888" }}>
              <li>HTML & CSS</li>
              <li>JavaScript / React</li>
              <li>UI Design & Prototyping</li>
            </ul>
          </div>
          <div className="rounded-3xl p-6" style={{ background: "#141414", border: "0.5px solid #2A2A2A" }}>
            <h2 className="text-lg font-semibold" style={{ color: "#FFFFFF" }}>
              Contact
            </h2>
            <p className="mt-3" style={{ color: "#888888" }}>
              chompoo@example.com
            </p>
            <p style={{ color: "#888888" }}>Social: Secret</p>
          </div>
        </div>
      </section>
    </main>
  );
}
