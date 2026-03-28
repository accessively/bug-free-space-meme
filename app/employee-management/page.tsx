"use client";

import { useLanguage } from "@/app/contexts/LanguageContext";
import { pageTexts } from "@/app/pageTexts";

export default function EmployeeManagement() {
  const { language } = useLanguage();
  const t = pageTexts[language].employeeManagementPage;

  return (
    <div className="flex flex-col flex-1">
      <main className="flex-1">
        <div className="bg-white">
          <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
                {t.title}
              </h1>
              <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
                {t.subtitle}
              </p>
            </div>
            <div className="mt-16 max-w-lg mx-auto">
              <form action="#" method="POST" className="grid grid-cols-1 gap-y-6">
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700">
                    {t.yourCompany}
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="company"
                      id="company"
                      className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="position" className="block text-sm font-medium text-gray-700">
                    {t.requiredPosition}
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="position"
                      id="position"
                      className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="skills" className="block text-sm font-medium text-gray-700">
                    {t.requiredSkills}
                  </label>
                  <div className="mt-1">
                    <textarea
                      id="skills"
                      name="skills"
                      rows={4}
                      className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md"
                      placeholder={t.requiredSkillsPlaceholder}
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="duration" className="block text-sm font-medium text-gray-700">
                    {t.projectDuration}
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="duration"
                      id="duration"
                      className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                      placeholder={t.projectDurationPlaceholder}
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="contact" className="block text-sm font-medium text-gray-700">
                    {t.contactEmail}
                  </label>
                  <div className="mt-1">
                    <input
                      id="contact"
                      name="contact"
                      type="email"
                      autoComplete="email"
                      className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                    />
                  </div>
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    {t.submit}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}