import { Card, CardContent } from '@/components/ui/card';
import { Building2 } from 'lucide-react';

const companies = [
  'Asl Credit', 'Asl Cable', 'Asl Engineering', 'Asl Packing', 'Asl Trading',
  'Asl Industrial', 'Asl Chemicals', 'Ramco Printing Works', 'Platinum Packaging',
  'Flexo World', 'Panthera', 'Print Store', 'Multi Vista', 'Sai Office Supplies',
  'Office Mart', 'Polythene Industries', 'Ovidian', 'Excel Packaging', 'Kentainers',
  'Krona Plastics', 'Die Cutting Experts', 'Ramoda', 'Trio Elevators'
];

export function CompanyList() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {companies.map((company) => (
        <Card key={company} className="hover:shadow-lg transition-shadow">
          <CardContent className="flex items-center gap-3 p-4">
            <Building2 className="h-5 w-5 text-muted-foreground" />
            <span>{company}</span>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}