import Link from "next/link";

export default function Footer() {
  return (
    <div className="bg-secondary">
      <div className="container lg:grid lg:grid-cols-2 py-14">
        <div className="grid gap-4 pb-4 text-left lg:pb-0 lg-grid-cols-3">
          <div>
            <h2 className="pb-4 text-xl font-semibold uppercase">Company</h2>
            <div className="flex flex-col">
              <Link href="/" className="py-1 hover:underline">
                About Us
              </Link>
              <Link href="/" className="py-1 hover:underline">
                Products
              </Link>
              <Link href="/" className="py-1 hover:underline">
                E-wallet
              </Link>
              <Link href="/" className="py-1 hover:underline">
                Testimonials
              </Link>
            </div>
          </div>
          <div>
            <h2 className="pb-4 text-xl font-semibold uppercase">
              Help Center
            </h2>
            <div className="flex flex-col">
              <Link href="/" className="py-1 hover:underline">
                FAQs
              </Link>
              <Link href="/" className="py-1 hover:underline">
                Terms & Conditions
              </Link>
              <Link href="/" className="py-1 hover:underline">
                Join Seller
              </Link>
              <Link href="/" className="py-1 hover:underline">
                Contact
              </Link>
            </div>
          </div>

          <div>
            <h2 className="pb-4 text-xl font-semibold uppercase">Follow Us</h2>
            <div className="flex flex-col">
              <Link href="/" className="py-1 hover:underline">
                Youtube
              </Link>
              <Link href="/" className="py-1 hover:underline">
                Facebook
              </Link>
              <Link href="/" className="py-1 hover:underline">
                Instagram
              </Link>
              <Link href="/" className="py-1 hover:underline">
                X
              </Link>
              <Link href="/" className="py-1 hover:underline">
                LinkedIn
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="py-10 bg-secondary">
        <div className="container text-center lg:justify-between lg:flex">
          <div className="pb-4 lg:pb-0">
            <p>&copy; 2024, PT Mamamoon. All Rights Reserved.</p>
          </div>
          <div>
            <Link href="/" className="p-4 hover:underline">
              Terms & Conditions
            </Link>
            <Link href="/" className="p-4 hover:underline">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
