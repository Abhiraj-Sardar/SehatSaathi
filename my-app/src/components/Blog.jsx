import React from 'react';
export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
      <div className="max-w-3xl w-full px-6 py-12">
        {/* Header */}
        <header className="mb-6">
          <h1 className="text-4xl font-bold leading-tight mb-2">
            The Future of Healthcare: Why Online Consultations Are Here to Stay
          </h1>
          <p className="text-lg text-gray-600">
            How technology is bridging the gap between patients and doctors 🩺
          </p>
        </header>

        {/* Date / Author */}
        <div className="flex items-center text-sm text-gray-500 mb-10">
          <span>
            By <span className="font-medium text-gray-700">HealthTech Insights</span>
          </span>
          <span className="mx-2">•</span>
          <span>August 21, 2025</span>
        </div>

        {/* Blog Content */}
        <article className="prose prose-lg prose-gray max-w-none">
          <p>
            In recent years, healthcare has undergone a massive transformation.
            The rise of online video consultations has given patients faster
            access to doctors, without the need to travel long distances or sit
            in crowded waiting rooms. What was once considered an option has now
            become a necessity.
          </p>

          <h2>Why Online Consultations?</h2>
          <p>
            Online consultations provide convenience, accessibility, and safety.
            Patients can connect with doctors from the comfort of their homes,
            reducing the risk of exposure to contagious illnesses. For rural
            areas, this means life-saving access to specialists that were once
            out of reach.
          </p>

          {/* Inline Image */}
          <img
            src="https://images.unsplash.com/photo-1584515933487-779824d29309?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
            alt="Telemedicine setup"
            className="w-full rounded-lg shadow-md my-6"
          />

          <h2>Key Benefits</h2>
          <ul>
            <li>
              <strong>Accessibility:</strong> Patients in remote areas can reach
              specialists with just an internet connection.
            </li>
            <li>
              <strong>Time-Saving:</strong> No more long travel times or waiting
              in queues.
            </li>
            <li>
              <strong>Continuity of Care:</strong> Follow-ups are easier, ensuring
              better patient outcomes.
            </li>
            <li>
              <strong>Mental Health Support:</strong> People can access
              counselors and therapists discreetly.
            </li>
          </ul>

          <h2>The Role of Technology</h2>
          <p>
            Tools like <strong>WebRTC</strong> and <strong>Socket.io</strong> are
            making real-time communication seamless. Combined with secure
            platforms, patient data is protected while ensuring high-quality
            audio and video interactions.
          </p>

          {/* Inline Image */}
          <img
            src="https://images.unsplash.com/photo-1581090700227-4c4f50b2d6b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
            alt="Doctor using laptop for online consultation"
            className="w-full rounded-lg shadow-md my-6"
          />

          <h2>Challenges Ahead</h2>
          <p>
            While online consultations solve many problems, they also come with
            challenges such as internet connectivity issues, lack of digital
            literacy among older patients, and the need for secure platforms to
            protect sensitive medical data.
          </p>

          <h2>Conclusion</h2>
          <p>
            Online consultations are not just a trend—they’re the future of
            healthcare. As technology continues to evolve, patients and doctors
            will find even more innovative ways to connect, ensuring healthcare
            is accessible to everyone, everywhere.
          </p>
        </article>
      </div>
    </div>
  );
}