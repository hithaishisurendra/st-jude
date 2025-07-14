import '../globals.css'

export default function Privacy() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center gradient-text">
          Privacy Policy
        </h1>
        <div className="text-sm text-gray-400 mb-8 text-center">
          Effective Date: January 1, 2025 | Last Updated: January 1, 2025
        </div>

        <div className="space-y-8 text-gray-300 leading-relaxed">
          
          <section>
            <h2 className="text-2xl font-bold text-neon-cyan mb-4">1. Information We Collect</h2>
            <p className="mb-4">
              When you participate in the St. Jude GCX Challenge, we may collect the following information:
            </p>
            <div className="bg-gray-900 p-6 rounded-lg mb-4">
              <h3 className="text-xl font-bold text-neon-yellow mb-3">Personal Information:</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Name and email address</li>
                <li>Phone number (if provided)</li>
                <li>Age and location (for eligibility verification)</li>
                <li>Social media handles (if shared through platforms)</li>
              </ul>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg mb-4">
              <h3 className="text-xl font-bold text-neon-yellow mb-3">Usage Information:</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Game completion data and scores</li>
                <li>Time spent on the challenge</li>
                <li>Device and browser information</li>
                <li>IP address and general location</li>
                <li>Referral and sharing activity</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-neon-cyan mb-4">2. How We Use Your Information</h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Contest Administration:</strong> To manage entries, verify eligibility, and contact winners</li>
              <li><strong>Referral Program:</strong> To track referrals and process $10 payments or donations</li>
              <li><strong>Communications:</strong> To send updates about the contest and St. Jude's mission</li>
              <li><strong>Analytics:</strong> To improve the game experience and measure engagement</li>
              <li><strong>Legal Compliance:</strong> To meet regulatory requirements and protect against fraud</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-neon-cyan mb-4">3. Information Sharing</h2>
            <p className="mb-4">
              We respect your privacy and only share information in the following circumstances:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>St. Jude Partnership:</strong> We share basic contact information with St. Jude Children's Research Hospital for donation processing and future communications about their mission</li>
              <li><strong>Service Providers:</strong> We work with trusted third parties for email delivery, payment processing, and analytics</li>
              <li><strong>Legal Requirements:</strong> We may disclose information if required by law or to protect our rights</li>
              <li><strong>Consent:</strong> We may share information with your explicit consent</li>
            </ul>
            <div className="bg-neon-pink bg-opacity-10 border border-neon-pink rounded-xl p-4 mt-4">
              <p className="text-neon-pink font-semibold">
                We never sell your personal information to third parties for marketing purposes.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-neon-cyan mb-4">4. Data Security</h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Industry-standard encryption for data transmission and storage</li>
              <li>Secure servers and access controls to protect your information</li>
              <li>Regular security audits and updates to our systems</li>
              <li>Limited access to personal data on a need-to-know basis</li>
              <li>Incident response procedures for any potential data breaches</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-neon-cyan mb-4">5. Your Rights and Choices</h2>
            <div className="space-y-4">
              <div className="bg-gray-900 p-4 rounded-lg">
                <h3 className="text-lg font-bold text-neon-yellow mb-2">Email Communications:</h3>
                <p>You can unsubscribe from our emails at any time using the unsubscribe link or by contacting us directly.</p>
              </div>
              <div className="bg-gray-900 p-4 rounded-lg">
                <h3 className="text-lg font-bold text-neon-yellow mb-2">Data Access & Correction:</h3>
                <p>You can request to review, update, or correct your personal information by contacting us.</p>
              </div>
              <div className="bg-gray-900 p-4 rounded-lg">
                <h3 className="text-lg font-bold text-neon-yellow mb-2">Data Deletion:</h3>
                <p>You can request deletion of your personal information, though we may retain some data for legal compliance.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-neon-cyan mb-4">6. Cookies and Tracking</h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Essential Cookies:</strong> Required for the game to function properly</li>
              <li><strong>Analytics Cookies:</strong> Help us understand how users interact with the challenge</li>
              <li><strong>Social Media:</strong> Enable sharing features and track referral sources</li>
              <li><strong>Browser Settings:</strong> You can control cookies through your browser preferences</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-neon-cyan mb-4">7. Children's Privacy</h2>
            <p className="mb-4">
              The St. Jude GCX Challenge is intended for participants 18 years and older. We do not knowingly collect personal information from children under 18. If we discover we have collected information from a minor, we will delete it immediately.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-neon-cyan mb-4">8. International Users</h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>This contest is primarily targeted to US and Canadian residents</li>
              <li>Data may be processed and stored in the United States</li>
              <li>International participants acknowledge data transfer outside their country</li>
              <li>We comply with applicable privacy laws in all jurisdictions</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-neon-cyan mb-4">9. Data Retention</h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Contest data retained until prize fulfillment and legal requirements are met</li>
              <li>Email subscribers retained until unsubscribe request</li>
              <li>Analytics data may be retained in anonymized form for improvements</li>
              <li>Legal compliance may require longer retention periods</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-neon-cyan mb-4">10. Updates to This Policy</h2>
            <p className="mb-4">
              We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated "Last Updated" date. Material changes will be communicated via email to registered participants.
            </p>
          </section>

          <section className="bg-gray-900 p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-neon-pink mb-4">Contact Us</h2>
            <p className="mb-4">
              If you have questions about this Privacy Policy or how we handle your information:
            </p>
            <p className="mb-2">
              <strong>Data Protection Contact:</strong><br />
              Thropic Games<br />
              Email: privacy@thropicgames.com<br />
              Subject: St. Jude GCX Challenge Privacy Inquiry
            </p>
            <p>
              <strong>St. Jude Privacy Office:</strong><br />
              St. Jude Children's Research Hospital<br />
              262 Danny Thomas Place<br />
              Memphis, TN 38105<br />
              Phone: (866) 278-5833
            </p>
          </section>

          <div className="text-center pt-8 border-t border-gray-700">
            <p className="text-gray-400">
              Your privacy is important to us. By participating in the St. Jude GCX Challenge, you acknowledge that you have read and understood this Privacy Policy.
            </p>
            <div className="mt-6">
              <a 
                href="/"
                className="bg-neon-blue text-black px-8 py-3 rounded-lg font-bold hover:bg-opacity-80 transition-all duration-300 hover:scale-105 transform inline-block"
              >
                Back to Challenge
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
} 