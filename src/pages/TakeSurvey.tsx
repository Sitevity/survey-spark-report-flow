
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import Logo from '@/components/Logo';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface Question {
  id: string;
  type: 'multiple-choice' | 'text' | 'rating';
  question: string;
  options?: string[];
}

// Sample survey data
const sampleSurvey = {
  id: '1',
  title: 'Tell Us About Yourself',
  description: 'Your answers will help us improve our website to offer you a better experience',
  questions: [
    {
      id: '1',
      type: 'multiple-choice',
      question: 'What scenario describes your situation best?',
      options: [
        'I am a Graphic Designer',
        'I am a Web Developer',
        'I am a Backend Developer',
        'I am a Software Developer',
        'I am a Tester',
        'Others'
      ]
    },
    {
      id: '2',
      type: 'multiple-choice',
      question: 'What is your current Occupation?',
      options: [
        'I am a Student',
        'I am a Freelancer',
        'I work at a mid company (50-20)',
        'I own a company',
        'Others'
      ]
    },
    {
      id: '3',
      type: 'text',
      question: 'Write anything about your last conversation'
    },
    {
      id: '4',
      type: 'rating',
      question: 'Give us rating on the behalf of our last conversation'
    },
    {
      id: '5',
      type: 'multiple-choice',
      question: 'What is your age?',
      options: [
        '0-10 Years',
        '11-15 Years',
        '16-40 Years',
        '40+ Years'
      ]
    }
  ]
};

const TakeSurvey = () => {
  const navigate = useNavigate();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string | number>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const currentQuestion = sampleSurvey.questions[currentQuestionIndex];
  const totalQuestions = sampleSurvey.questions.length;
  
  const handleNext = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      // Submit final answer
      setIsSubmitting(true);
      setTimeout(() => {
        navigate('/thank-you');
      }, 1000);
    }
  };
  
  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    }
  };
  
  const handleAnswerChange = (value: string | number) => {
    setAnswers(prev => ({
      ...prev,
      [currentQuestion.id]: value
    }));
  };
  
  const renderQuestion = () => {
    switch (currentQuestion.type) {
      case 'multiple-choice':
        return (
          <RadioGroup
            value={answers[currentQuestion.id]?.toString() || ''}
            onValueChange={handleAnswerChange}
            className="space-y-3"
          >
            {currentQuestion.options?.map((option, index) => (
              <div key={index} className="option-button">
                <RadioGroupItem
                  value={option}
                  id={`option-${index}`}
                  className="absolute opacity-0"
                />
                <Label
                  htmlFor={`option-${index}`}
                  className="flex items-center cursor-pointer w-full py-3"
                >
                  {option}
                </Label>
              </div>
            ))}
          </RadioGroup>
        );
      case 'text':
        return (
          <Textarea
            value={answers[currentQuestion.id]?.toString() || ''}
            onChange={e => handleAnswerChange(e.target.value)}
            placeholder="Type your answer here..."
            className="min-h-[200px] bg-white/80"
          />
        );
      case 'rating':
        return (
          <div>
            <div className="grid grid-cols-5 gap-4 mb-4">
              {[1, 2, 3, 4, 5].map(rating => (
                <button
                  key={rating}
                  type="button"
                  onClick={() => handleAnswerChange(rating)}
                  className={`rating-button ${answers[currentQuestion.id] === rating ? 'selected' : ''}`}
                >
                  <span className="text-2xl font-semibold">{rating}</span>
                  <span className="text-yellow-500">
                    {'★'.repeat(rating)}
                    {'☆'.repeat(5 - rating)}
                  </span>
                </button>
              ))}
            </div>
            <div className="flex justify-between text-sm text-gray-600">
              <span>Dissatisfied</span>
              <span>Neutral</span>
              <span>Satisfied</span>
            </div>
          </div>
        );
      default:
        return null;
    }
  };
  
  return (
    <div className="min-h-screen survey-container flex flex-col">
      <header className="p-6">
        <Logo size="md" withText={true} />
      </header>
      
      <div className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-3xl">
          <div className="question-card">
            <div className="mb-8 text-center">
              <h1 className="text-3xl font-bold mb-2">TELL US ABOUT YOURSELF</h1>
              <h2 className="text-xl text-blue-600 mb-2">{currentQuestion.question}</h2>
              <p className="text-gray-600">
                {sampleSurvey.description}
              </p>
            </div>
            
            <div className="mb-8">
              {renderQuestion()}
            </div>
            
            <div className="flex justify-between items-center">
              <Button
                variant="outline" 
                onClick={handlePrevious}
                disabled={currentQuestionIndex === 0}
              >
                <ArrowLeft size={16} className="mr-2" /> Back
              </Button>
              
              <div className="text-center">
                <div className="text-lg font-medium">
                  {String(currentQuestionIndex + 1).padStart(2, '0')}/{String(totalQuestions).padStart(2, '0')}
                </div>
              </div>
              
              <Button
                onClick={handleNext}
                disabled={!answers[currentQuestion.id] || isSubmitting}
                className="bg-blue-600 hover:bg-blue-700"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Submitting...
                  </span>
                ) : (
                  <>
                    {currentQuestionIndex === totalQuestions - 1 ? 'Finish' : 'Next'}
                    <ArrowRight size={16} className="ml-2" />
                  </>
                )}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TakeSurvey;
