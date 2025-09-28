import { cn } from '@/lib/utils';
import React from 'react';
const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({
  className,
  ...props
}, ref) => <div ref={ref} className={cn('rounded-lg border bg-card text-card-foreground shadow-sm', className)} {...props} data-unique-id="aa4b3ec2-fe81-4567-ad73-694a9dddb4f4" data-file-name="components/ui/card.tsx" />);
Card.displayName = 'Card';
const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({
  className,
  ...props
}, ref) => <div ref={ref} className={cn('flex flex-col space-y-1.5 p-6', className)} {...props} data-unique-id="c0bd0118-6819-4652-b3cc-5d704637291b" data-file-name="components/ui/card.tsx" />);
CardHeader.displayName = 'CardHeader';
const CardTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(({
  className,
  ...props
}, ref) => <h3 ref={ref} className={cn('text-2xl font-semibold leading-none tracking-tight', className)} {...props} data-unique-id="8edbce81-d052-4a5b-909c-87d928ea0074" data-file-name="components/ui/card.tsx" />);
CardTitle.displayName = 'CardTitle';
const CardDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(({
  className,
  ...props
}, ref) => <p ref={ref} className={cn('text-sm text-muted-foreground', className)} {...props} data-unique-id="49d04d7f-7d16-4fe1-9180-50eb89842357" data-file-name="components/ui/card.tsx" />);
CardDescription.displayName = 'CardDescription';
const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({
  className,
  ...props
}, ref) => <div ref={ref} className={cn('p-6 pt-0', className)} {...props} data-unique-id="100c746a-3d45-4823-9479-a9a3da380763" data-file-name="components/ui/card.tsx" />);
CardContent.displayName = 'CardContent';
const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({
  className,
  ...props
}, ref) => <div ref={ref} className={cn('flex items-center p-6 pt-0', className)} {...props} data-unique-id="e2946e5d-7d14-4f4e-8555-2a8f961bcb43" data-file-name="components/ui/card.tsx" />);
CardFooter.displayName = 'CardFooter';
export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };