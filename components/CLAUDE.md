# components/CLAUDE.md - Component-Specific Context

> Component-level documentation and patterns. Keep under 200 lines.

## Component Standards

### Architecture
- Functional components only
- TypeScript strict mode
- Props interfaces defined inline or in types file

### Naming Conventions
- PascalCase for component files and names
- camelCase for props and variables
- Event handlers prefixed with 'handle' (handleClick, handleSubmit)

### File Structure
```
components/
  ComponentName/
    index.tsx          # Component implementation
    ComponentName.test.tsx  # Tests
    types.ts           # Type definitions (if complex)
```

## Code Patterns

### Basic Component Template
```typescript
interface ComponentNameProps {
  id: string;
  onAction?: () => void;
}

export function ComponentName({ id, onAction }: ComponentNameProps) {
  const handleClick = () => {
    onAction?.();
  };

  return (
    <div>
      {/* Component JSX */}
    </div>
  );
}
```

### Event Handlers
- Always prefix with 'handle'
- Keep handlers pure and testable
- Extract complex logic to hooks or utilities

```typescript
const handleSubmit = async (event: FormEvent) => {
  event.preventDefault();
  // Handle submission
};

const handleChange = (value: string) => {
  // Handle change
};
```

## Testing Standards

### Test Structure
```typescript
describe('ComponentName', () => {
  it('should render correctly', () => {
    // Test implementation
  });

  it('should handle user interaction', () => {
    // Test implementation
  });
});
```

### Testing Guidelines
- Test critical business logic
- Use descriptive test names
- Mock external dependencies
- Test error states

## Style Guidelines

### Indentation
- 2 spaces
- No tabs

### Line Length
- 100 character maximum
- Break long lines logically

### Comments
- Comment complex logic
- Document non-obvious decisions
- Keep comments up-to-date

## Component Registry

### Existing Components
TBD - Components will be documented here as they are created

## Notes
- All components should be accessible
- Consider mobile responsiveness
- Follow project-wide code standards from root CLAUDE.md
