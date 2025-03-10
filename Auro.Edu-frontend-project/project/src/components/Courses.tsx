import React from 'react';
import { Code2, Brain, Globe, Database, Layout, Smartphone } from 'lucide-react';

const courses = [
  {
    id: 1,
    title: 'JavaScript in Depth',
    icon: Code2,
    description: 'Master advanced JavaScript concepts and modern development practices',
    duration: '8 weeks',
    level: 'Advanced'
  },
  {
    id: 2,
    title: 'Front-End Libraries and Frameworks',
    icon: Layout,
    description: 'Learn popular front-end frameworks including React, Vue, and Angular',
    duration: '10 weeks',
    level: 'Advanced'
  },
  {
    id: 3,
    title: 'Building and Deploying a Web App',
    icon: Globe,
    description: 'Create and deploy full-stack web applications using modern technologies',
    duration: '12 weeks',
    level: 'Advanced'
  },
  {
    id: 4,
    title: 'Advanced jQuery Techniques',
    icon: Database,
    description: 'Master advanced jQuery concepts and DOM manipulation techniques',
    duration: '6 weeks',
    level: 'Advanced'
  },
  {
    id: 5,
    title: 'Real-World ReactJS Projects',
    icon: Brain,
    description: 'Build production-ready applications using React and related technologies',
    duration: '10 weeks',
    level: 'Advanced'
  },
  {
    id: 6,
    title: 'Advanced Flutter Development/CD',
    icon: Smartphone,
    description: 'Create cross-platform mobile applications with Flutter',
    duration: '12 weeks',
    level: 'Advanced'
  }
];

const Courses = () => {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-4">Available Courses</h2>
        <p className="text-gray-600 mb-6">
          Select one course from the list below. Complete all chapter quizzes and score at least 70% on the final exam
          to earn your accreditation certificate.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => {
            const IconComponent = course.icon;
            return (
              <div key={course.id} className="border border-gray-200 rounded-lg p-6 hover:border-indigo-500 transition-colors">
                <div className="flex items-center mb-4">
                  <IconComponent className="w-8 h-8 text-indigo-600" />
                  <h3 className="text-lg font-medium ml-3">{course.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{course.description}</p>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Duration: {course.duration}</span>
                  <span className="text-indigo-600 font-medium">{course.level}</span>
                </div>
                <button className="mt-4 w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition-colors">
                  Start Course
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Courses;