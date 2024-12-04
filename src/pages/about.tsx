import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Building, Target, Heart } from 'lucide-react';
import { CompanyList } from '@/components/company-list';

export function About() {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="py-12">
        <h1 className="text-4xl font-bold mb-8">About Ramco Group Sacco</h1>
        <div className="prose dark:prose-invert max-w-none">
          <p className="text-lg mb-6">
            Ramco Group Sacco is a regulated non-WDT Sacco that was registered in 1985. Initially known as Sink Sacco, we have grown to become a trusted financial partner for the Ramco Group of Companies community.
          </p>
          <p className="text-lg mb-12">
            Our offices are located at KCB Industrial Area along Enterprise Road, where we serve our members with dedication and commitment to their financial well-being.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="grid gap-6 md:grid-cols-3 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5" />
                Vision
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>To be the leading Sacco in fostering financial prosperity for our members.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Building className="h-5 w-5" />
                Mission
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>Together for Prosperity - Working collaboratively to enhance the financial well-being of our members.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Heart className="h-5 w-5" />
                Core Values
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>Integrity, Excellence, Innovation, and Member-Centric Service.</p>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-8">
          <h2 className="text-3xl font-bold mb-6">Member Companies</h2>
          <CompanyList />
        </div>
      </section>
    </div>
  );
}