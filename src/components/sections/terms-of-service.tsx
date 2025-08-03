export default function TermsOfServiceSection() {
  return (
    <section id="terms-of-service" className="py-12 md:py-24">
      <div className="container mx-auto px-4">
        <div className="prose prose-invert max-w-4xl mx-auto">
          <h1>Terms of Service</h1>
          <p>Last updated: {new Date().toLocaleDateString()}</p>

          <h2>1. Agreement to Terms</h2>
          <p>
            By using our services, you agree to be bound by these Terms of
            Service. If you do not agree to these terms, please do not use our
            services.
          </p>

          <h2>2. Changes to Terms or Services</h2>
          <p>
            We may modify the Terms at any time, in our sole discretion. If we
            do so, we’ll let you know either by posting the modified Terms on
            the site or through other communications.
          </p>

          <h2>3. Who May Use the Services</h2>
          <p>
            You may use the services only if you are 18 years or older and are
            not barred from using the services under applicable law.
          </p>

          <h2>4. Contact Us</h2>
          <p>
            If you have any questions about these Terms, please contact us at
            support@appvault.com.
          </p>
        </div>
      </div>
    </section>
  );
}
