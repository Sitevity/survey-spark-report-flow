
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, BarChart, Calendar, Users } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface Survey {
  id: string;
  title: string;
  description: string;
  questions: number;
  responses: number;
  createdAt: string;
  reportType: 'traffic-light' | 'accumulated';
}

interface SurveyCardProps {
  survey: Survey;
  variant?: 'default' | 'compact';
}

const SurveyCard = ({ survey, variant = 'default' }: SurveyCardProps) => {
  const navigate = useNavigate();
  
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <Card className={cn(
      "overflow-hidden transition-all duration-300 hover:shadow-md border-l-4",
      survey.reportType === 'traffic-light' ? "border-l-surveyspark-warning" : "border-l-surveyspark-teal"
    )}>
      <CardHeader className={cn(
        variant === 'compact' ? "p-4" : "p-6",
        "border-b"
      )}>
        <div className="flex justify-between items-start">
          <CardTitle className={variant === 'compact' ? "text-base" : "text-xl"}>
            {survey.title}
          </CardTitle>
          <div className={cn(
            "rounded-full px-2 py-1 text-xs",
            survey.reportType === 'traffic-light' 
              ? "bg-surveyspark-warning/20 text-surveyspark-warning"
              : "bg-surveyspark-teal/20 text-surveyspark-teal"
          )}>
            {survey.reportType === 'traffic-light' ? 'Traffic Light' : 'Accumulated'}
          </div>
        </div>
      </CardHeader>
      
      {variant === 'default' && (
        <CardContent className="p-6">
          <p className="text-muted-foreground mb-4">{survey.description}</p>
          <div className="grid grid-cols-2 gap-3 text-sm">
            <div className="flex items-center gap-2">
              <FileText size={16} className="text-surveyspark-teal" />
              <span>{survey.questions} Questions</span>
            </div>
            <div className="flex items-center gap-2">
              <Users size={16} className="text-surveyspark-teal" />
              <span>{survey.responses} Responses</span>
            </div>
            <div className="flex items-center gap-2 col-span-2">
              <Calendar size={16} className="text-surveyspark-teal" />
              <span>Created {formatDate(survey.createdAt)}</span>
            </div>
          </div>
        </CardContent>
      )}
      
      <CardFooter className={cn(
        variant === 'compact' ? "p-4" : "p-6",
        "bg-muted/30 flex justify-between"
      )}>
        <Button size="sm" variant="outline" onClick={() => navigate(`/surveys/${survey.id}`)}>
          <FileText size={16} className="mr-2" /> View
        </Button>
        <Button size="sm" variant="outline" onClick={() => navigate(`/reports/${survey.id}`)}>
          <BarChart size={16} className="mr-2" /> Reports
        </Button>
      </CardFooter>
    </Card>
  );
};

export default SurveyCard;
