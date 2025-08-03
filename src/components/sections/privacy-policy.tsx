export default function PrivacyPolicySection() {
  return (
    <section id="privacy-policy" className="py-12 md:py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="prose prose-invert max-w-4xl mx-auto">
          <h1>Privacy Policy</h1>
          <p>Last updated: {new Date().toLocaleDateString()}</p>

          <h2>1. Introduction</h2>
          <p>
            Welcome to AppVault ("we", "our", "us"). We are committed to
            protecting your privacy. This Privacy Policy explains how we
            collect, use, disclose, and safeguard your information when you
            visit our website.
          </p>

          <h2>2. Information We Collect</h2>
          <p>
            We may collect personal information from you such as your name,
            email address, and payment information when you register for our
            service, request support, or otherwise communicate with us.
          </p>

          <h2>3. How We Use Your Information</h2>
          <p>
            We use the information we collect to:
            <ul>
              <li>Provide, operate, and maintain our website</li>
              <li>Improve, personalize, and expand our website</li>
              <li>Understand and analyze how you use our website</li>
              <li>
                Develop new products, services, features, and functionality
              </li>
              <li>
                Communicate with you, either directly or through one of our
                partners
              </li>
              <li>Send you emails</li>
              <li>Find and prevent fraud</li>
            </ul>
          </p>

          <h2>4. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact
            us at support@appvault.com.
          </p>
        </div>
      </div>
    </section>
  );
}
