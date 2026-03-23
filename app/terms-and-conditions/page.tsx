export default function TermsAndConditions() {
  return (
    <div className="flex flex-col flex-1">
      <main className="flex-1">
        <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-extrabold text-gray-900 mb-8">Terms and Conditions</h1>

            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Terms</h2>
              <p className="text-gray-600 mb-6">
                By accessing the website at www.accessively.com, you agree to be bound by these Terms and Conditions, all applicable laws and regulations, and acknowledge that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this website. All materials contained on this website are protected by applicable copyright and trademark laws.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Use License</h2>
              <p className="text-gray-600 mb-4">
                Permission is granted to temporarily access the materials (information or resources) on Accessively's website for personal, non-commercial use only. This is the grant of a license, not a transfer of ownership. Under this license, you may not:
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose or public display</li>
                <li>Attempt to reverse engineer or decompile any software on the website</li>
                <li>Remove any copyright or proprietary notations</li>
                <li>Transfer or mirror the materials on another server</li>
              </ul>
              <p className="text-gray-600 mb-6">
                This license will automatically terminate if you violate any of these restrictions and may be terminated by Accessively at any time. Upon termination, you must destroy any downloaded materials in your possession.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Disclaimer</h2>
              <p className="text-gray-600 mb-6">
                All materials on Accessively's website are provided on an "as is" basis. Accessively makes no warranties, expressed or implied, and disclaims all warranties including, without limitation, merchantability, fitness for a particular purpose, or non-infringement of intellectual property.
              </p>
              <p className="text-gray-600 mb-6">
                Accessively does not guarantee the accuracy, reliability, or results from the use of materials on this website or on any linked sites.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Limitations of Liability</h2>
              <p className="text-gray-600 mb-6">
                In no event shall Accessively or its team be liable for any damages, including but not limited to loss of data, loss of profits, or business interruption arising from the use or inability to use the materials or services on this website, even if Accessively has been advised of the possibility of such damages.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Accuracy of Materials</h2>
              <p className="text-gray-600 mb-6">
                The materials appearing on Accessively's website may include technical, typographical, or visual errors. We do not warrant that any content is accurate, complete, or current. Accessively may update or change content at any time without prior notice.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Links to Third-Party Sites</h2>
              <p className="text-gray-600 mb-6">
                Accessively may include links to external websites. We have not reviewed all linked sites and are not responsible for their content or practices. The inclusion of any link does not imply endorsement. Use of any external website is at your own risk.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">7. Modifications</h2>
              <p className="text-gray-600 mb-6">
                Accessively may revise these Terms and Conditions at any time without notice. By continuing to use this website, you agree to be bound by the current version of these terms.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">8. Governing Law</h2>
              <p className="text-gray-600 mb-6">
                These Terms and Conditions are governed by and interpreted in accordance with the laws of the Republic of the Philippines. Any disputes arising from the use of this website shall be subject to the exclusive jurisdiction of the courts of the Philippines.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">9. Contact Information</h2>
              <p className="text-gray-600 mb-4">
                For any questions regarding these Terms and Conditions, you may contact us at:
              </p>

              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-gray-900 font-medium">Email:</span>
                  <span className="text-gray-600">Solutions@accessively.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-gray-900 font-medium">Website:</span>
                  <span className="text-gray-600">www.accessively.com</span>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <p className="text-sm text-gray-500">
                  <strong>Effective Date:</strong> March 23, 2026
                </p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <a
                href="/"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Back to Home
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}