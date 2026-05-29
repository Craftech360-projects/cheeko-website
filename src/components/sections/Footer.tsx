import Image from 'next/image';

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#020127] px-6 pb-6 pt-12 text-[#8f9bb7] sm:px-10 lg:px-16 lg:pt-16" role="contentinfo">
      <div className="mx-auto max-w-[1560px]">
        <div className="grid gap-10 lg:grid-cols-[1.45fr_1fr_1fr_1fr_1fr]">
          <div>
            <Image src="/assets/footer/cheeko-logo-yellow.png" alt="Cheeko" width={280} height={100} className="h-auto w-[170px] lg:w-[210px] -ml-2 lg:-ml-4" />
            <p className="mt-6 max-w-[440px] text-2xl leading-[1.45] text-[#8b95b0] lg:text-[19px]">
              Your child&apos;s magical AI learning companion.
              <br />
              Screen-free fun that helps kids learn, grow,
              <br />
              and thrive.
            </p>
            <div className="mt-8 flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#303b73] bg-[#1d285f] text-xl text-white/90"
              >
                f
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#303b73] bg-[#1d285f]"
              >
                <Image
                  src="/assets/footer/instagram-outline-icon.png"
                  alt="Instagram"
                  width={22}
                  height={22}
                  className="h-[22px] w-[22px] invert brightness-0"
                />
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noreferrer"
                aria-label="X (Twitter)"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#303b73] bg-[#1d285f]"
              >
                <svg aria-hidden="true" viewBox="0 0 24 24" className="h-[20px] w-[20px] fill-white">
                  <path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.461 11.461-2.282 0-4.402-.661-6.185-1.809.324.038.636.051.973.051 1.884 0 3.617-.636 4.999-1.72a4.043 4.043 0 0 1-3.768-2.803c.249.038.498.064.76.064.361 0 .723-.051 1.058-.138a4.038 4.038 0 0 1-3.231-3.956v-.051c.536.3 1.16.486 1.821.511a4.025 4.025 0 0 1-1.797-3.356c0-.748.199-1.433.548-2.032a11.467 11.467 0 0 0 8.317 4.215 4.551 4.551 0 0 1-.099-.922 4.037 4.037 0 0 1 6.983-2.761 7.87 7.87 0 0 0 2.561-.973 4.02 4.02 0 0 1-1.771 2.232 8.122 8.122 0 0 0 2.319-.624 8.676 8.676 0 0 1-2.02 2.083z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="hidden lg:block">
            <h3 className="text-[23px] font-semibold text-[#f1b865]">Product</h3>
            <ul className="mt-5 space-y-3 text-[19px] leading-[1.2] text-[#8b95b0]">
              <li>Features</li>
              <li>How It Works</li>
              <li>Pricing</li>
              <li>Try Demo</li>
            </ul>
          </div>

          <div className="hidden lg:block">
            <h3 className="text-[23px] font-semibold text-[#f1b865]">Company</h3>
            <ul className="mt-5 space-y-3 text-[19px] leading-[1.2] text-[#8b95b0]">
              <li>Contact</li>
              <li>Careers</li>
            </ul>
          </div>

          <div className="hidden lg:block">
            <h3 className="text-[23px] font-semibold text-[#f1b865]">Support</h3>
            <ul className="mt-5 space-y-3 text-[19px] leading-[1.2] text-[#8b95b0]">
              <li>FAQ</li>
              <li>Shipping</li>
              <li>Returns</li>
              <li>Help Center</li>
            </ul>
          </div>

          <div className="hidden lg:block">
            <h3 className="text-[23px] font-semibold text-[#f1b865]">Contact</h3>
            <ul className="mt-5 space-y-3 text-[19px] leading-[1.2] text-[#8b95b0]">
              <li>✉ info@altio.me</li>
              <li>⌖ Bangalore, India</li>
            </ul>
          </div>

          <div className="grid gap-6 lg:hidden">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="text-[24px] font-semibold text-[#f1b865]">Product</h3>
                <ul className="mt-4 space-y-2 text-[19px] leading-[1.25] text-[#8b95b0]">
                  <li>Features</li>
                  <li>How It Works</li>
                  <li>Pricing</li>
                  <li>Try Demo</li>
                </ul>
              </div>
              <div>
                <h3 className="text-[24px] font-semibold text-[#f1b865]">Company</h3>
                <ul className="mt-4 space-y-2 text-[19px] leading-[1.25] text-[#8b95b0]">
                  <li>Contact</li>
                  <li>Careers</li>
                </ul>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="text-[24px] font-semibold text-[#f1b865]">Support</h3>
                <ul className="mt-4 space-y-2 text-[19px] leading-[1.25] text-[#8b95b0]">
                  <li>FAQ</li>
                  <li>Shipping</li>
                  <li>Returns</li>
                  <li>Help Center</li>
                </ul>
              </div>
              <div>
                <h3 className="text-[24px] font-semibold text-[#f1b865]">Contact</h3>
                <ul className="mt-4 space-y-2 text-[19px] leading-[1.25] text-[#8b95b0]">
                  <li>✉ info@altio.me</li>
                  <li>⌖ Bangalore, India</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 lg:mt-[-200]">
          <Image
            src="/assets/footer/footer-team-yellow.png"
            alt="Founders illustration"
            width={880}
            height={420}
            className="mx-auto h-auto w-full max-w-[540px] lg:max-w-[880px]"
            style={{ height: 'auto' }}
          />
        </div>

        <div className="mt-4 flex flex-col gap-3 border-t border-[#1d285f] pt-4 text-[19px] text-[#8b95b0] sm:flex-row sm:items-center sm:justify-between lg:mt-0 lg:border-0 lg:pt-0 lg:text-[19px]">
          <p>© 2026 Altio AI Pvt Ltd. All rights reserved.</p>
          <div className="flex flex-wrap gap-x-5 gap-y-2 lg:gap-x-8">
            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white">
              Refund Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
