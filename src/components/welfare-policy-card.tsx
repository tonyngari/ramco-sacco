import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Shield } from 'lucide-react';

export function WelfarePolicyCard() {
  return (
    <Card className="max-w-4xl mx-auto">
      <CardHeader>
        <div className="flex items-center gap-2">
          <Shield className="h-6 w-6 text-primary" />
          <CardTitle>Welfare Policy</CardTitle>
        </div>
        <CardDescription>
          Monthly contribution of 400 KES per member
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="prose dark:prose-invert max-w-none">
          <p>
            Our welfare policy provides coverage for members and their families:
          </p>
          <ul>
            <li>Members (90,000 KES benefit + double deposits payout)</li>
            <li>Spouse (60,000 KES benefit)</li>
            <li>Parents & Parents-in-law</li>
            <li>Children under 18 years</li>
            <li>Students aged 18-24 years (with valid student ID)</li>
          </ul>
          
          <h3>Important Notes:</h3>
          <ul>
            <li>Death certificates must be submitted within one month</li>
            <li>False claims will result in benefit deduction from deposits</li>
            <li>Management may decline claims with false information</li>
            <li>Welfare form submission is mandatory for compensation</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}