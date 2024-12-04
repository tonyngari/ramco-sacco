import { Link as RouterLink } from 'react-router-dom';
import { cn } from '@/lib/utils';

export interface LinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
}

export function Link({ href, children, className, ...props }: LinkProps) {
  return (
    <RouterLink
      to={href}
      className={cn(
        'text-sm font-medium transition-colors hover:text-primary',
        className
      )}
      {...props}
    >
      {children}
    </RouterLink>
  );
}