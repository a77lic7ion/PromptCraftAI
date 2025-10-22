import React from 'react';

export interface SuggestedTextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  suggestions?: string[];
}

const SuggestedTextarea = React.forwardRef<
  HTMLTextAreaElement,
  SuggestedTextareaProps
>(({ className, suggestions = [], ...props }, ref) => {
  const listId = React.useId();
  return (
    <>
      <textarea
        className={`flex min-h-[80px] w-full rounded-md border border-brand-border bg-brand-surface/50 px-3 py-2 text-sm text-brand-text-primary ring-offset-background placeholder:text-brand-text-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
        ref={ref}
        list={listId}
        {...props}
      />
      <datalist id={listId}>
        {suggestions.map((suggestion, i) => (
          <option key={i} value={suggestion} />
        ))}
      </datalist>
    </>
  );
});
SuggestedTextarea.displayName = 'SuggestedTextarea';

export default SuggestedTextarea;
