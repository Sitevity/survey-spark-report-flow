
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Logo from '@/components/Logo';
import { FileText, BarChart, Download } from 'lucide-react';

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <header className="border-b bg-white">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Logo size="md" withText={true} />
          <div className="flex items-center gap-4">
            <Button variant="ghost" onClick={() => navigate('/login')}>Log in</Button>
            <Button className="bg-surveyspark-teal hover:bg-surveyspark-teal/90" onClick={() => navigate('/register')}>Sign up</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-survey text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Create, Collect, and Analyze Surveys with Ease</h1>
            <p className="text-xl mb-8">SurveySpark helps you gather insights from your audience and generate detailed reports for informed decision-making.</p>
            <Button 
              size="lg" 
              className="bg-white text-surveyspark-darkblue hover:bg-white/90"
              onClick={() => navigate('/register')}
            >
              Get Started — It's Free
            </Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Powerful Survey Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
              <div className="w-12 h-12 bg-surveyspark-teal/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText size={24} className="text-surveyspark-teal" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Multiple Survey Types</h3>
              <p className="text-gray-600">Create various types of surveys with multiple question formats to gather exactly the data you need.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
              <div className="w-12 h-12 bg-surveyspark-teal/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart size={24} className="text-surveyspark-teal" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Detailed Reports</h3>
              <p className="text-gray-600">Generate traffic light risk analysis or accumulated answer reports for comprehensive data insights.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
              <div className="w-12 h-12 bg-surveyspark-teal/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Download size={24} className="text-surveyspark-teal" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Export Options</h3>
              <p className="text-gray-600">Download your survey results as PDF or Excel files to share with your team or stakeholders.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How SurveySpark Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 border-2 border-surveyspark-teal rounded-full flex items-center justify-center mx-auto mb-4 text-surveyspark-teal font-bold">1</div>
              <h3 className="text-xl font-semibold mb-3">Create a Survey</h3>
              <p className="text-gray-600">Design your survey with our user-friendly interface and customization options.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 border-2 border-surveyspark-teal rounded-full flex items-center justify-center mx-auto mb-4 text-surveyspark-teal font-bold">2</div>
              <h3 className="text-xl font-semibold mb-3">Collect Responses</h3>
              <p className="text-gray-600">Share your survey link with participants and watch the responses come in real-time.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 border-2 border-surveyspark-teal rounded-full flex items-center justify-center mx-auto mb-4 text-surveyspark-teal font-bold">3</div>
              <h3 className="text-xl font-semibold mb-3">Analyze Results</h3>
              <p className="text-gray-600">View detailed reports and export the data in your preferred format.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-surveyspark-darkblue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Creating Surveys?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Join thousands of users who are making data-driven decisions with SurveySpark.</p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Button 
              size="lg" 
              className="bg-surveyspark-teal hover:bg-surveyspark-teal/90"
              onClick={() => navigate('/register')}
            >
              Sign Up Now
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-surveyspark-darkblue"
              onClick={() => navigate('/login')}
            >
              Log In
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <Logo size="sm" withText={true} />
              <p className="mt-4 text-gray-400 text-sm">Helping businesses collect and analyze survey data since 2025.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Products</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>Surveys</li>
                <li>Reports</li>
                <li>Analytics</li>
                <li>Integrations</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>Documentation</li>
                <li>API</li>
                <li>Guides</li>
                <li>Support</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>About</li>
                <li>Blog</li>
                <li>Careers</li>
                <li>Contact</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
            &copy; 2025 SurveySpark. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
