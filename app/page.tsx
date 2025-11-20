import Image from "next/image";

export default function Home() {
  return (
    <main>
      <header className="bg-dark">
        {/* LOGO */}
        <div className="">
          <Image src="/logo.png" alt="Logo App" width={100} height={100} />
        </div>
        {/* NAVIGATION */}
        <nav>
          <ul>
            <li>Category</li>
            <li>Job</li>
            <li>How it works</li>
            <li>Testimonial</li>
          </ul>
        </nav>

        {/* BUTTON */}
        <div>
          <button>Register</button>
          <button>Sign In</button>
        </div>
      </header>
    </main>
  );
}
