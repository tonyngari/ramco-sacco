import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { UserCircle } from 'lucide-react';

interface BoardMemberCardProps {
  name: string;
  position: string;
  description?: string;
}

export function BoardMemberCard({ name, position, description }: BoardMemberCardProps) {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader className="space-y-4">
        <div className="flex justify-center">
          <UserCircle className="h-20 w-20 text-muted-foreground" />
        </div>
        <div className="space-y-1 text-center">
          <CardTitle>{name}</CardTitle>
          <CardDescription className="text-primary font-medium">
            {position}
          </CardDescription>
        </div>
      </CardHeader>
      {description && (
        <CardContent>
          <p className="text-center text-muted-foreground">{description}</p>
        </CardContent>
      )}
    </Card>
  );
}