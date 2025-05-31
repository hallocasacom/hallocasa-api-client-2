# Hallocasa API Client

A TypeScript client for the Hallocasa API, auto-generated from OpenAPI specification using [Orval](https://orval.dev).

## Installation

```bash
npm install hallocasa-api-client-2
```

## Setup

This client is generated from the OpenAPI specification using Orval. The generated code provides:

- Type-safe API methods for all endpoints
- TypeScript interfaces for all request/response models
- Built-in authentication handling
- Mock data generation for testing
- **React Query hooks for data fetching**

## Usage

### Basic Usage with React Query Hooks

```typescript
import { useGetChatsUser_summaryUserId } from 'hallocasa-api-client-2';

// In your React component
function ChatSummary({ userId }: { userId: number }) {
  const { data, isLoading, error } = useGetChatsUser_summaryUserId(
    userId,
    { limit: 10 },
    {
      query: {
        refetchInterval: 30000, // Refetch every 30 seconds
        staleTime: 10000, // Consider data stale after 10 seconds
      }
    }
  );

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading chats</div>;
  
  return (
    <div>
      {data?.map(chat => (
        <div key={chat.id}>{chat.title}</div>
      ))}
    </div>
  );
}
```

### Using Mutations

```typescript
import { useCreateAttachment1 } from 'hallocasa-api-client-2';

function AttachmentUploader() {
  const { mutate, isLoading } = useCreateAttachment1();

  const handleUpload = (file: File) => {
    mutate(
      {
        data: {
          fileName: file.name,
          fileSize: file.size,
          mimeType: file.type,
        },
      },
      {
        onSuccess: (data) => {
          console.log('Attachment created:', data);
        },
        onError: (error) => {
          console.error('Upload failed:', error);
        },
      }
    );
  };

  return (
    <button onClick={() => handleUpload(file)} disabled={isLoading}>
      {isLoading ? 'Uploading...' : 'Upload'}
    </button>
  );
}
```

### Direct API Calls (without React Query)

You can still use the API methods directly if you prefer:

```typescript
import { getChatsUser_summaryUserId } from 'hallocasa-api-client-2';

// Get chat summaries for a user
const chatSummaries = await getChatsUser_summaryUserId({
  userId: 1001,
  limit: 10
});
```

### Authentication

The client automatically handles authentication by reading the auth token from localStorage:

```typescript
// Set the auth token
localStorage.setItem('authToken', 'your-jwt-token');

// All subsequent API calls will include the token
```

### Custom Configuration

You can configure the base URL using environment variables:

```bash
NEXT_PUBLIC_API_URL=https://api.hallocasa.com
```

### React Query Provider Setup

Make sure to wrap your app with the React Query provider:

```typescript
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 3,
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <YourApp />
    </QueryClientProvider>
  );
}
```

### Available APIs

The client provides methods for all API endpoints organized by tags:

- **Chat**: Chat tickets, messages, allowances, attachments
- **Properties**: Property management, bulk uploads/downloads, filters
- **Users**: User management, favorites, skills, endorsements
- **Locations**: Geo-location services, languages, locales
- **Security**: Authentication and password recovery
- **And more...**

## Development

### Regenerate the Client

To regenerate the client after OpenAPI spec changes:

```bash
npm run generate
```

### Build

```bash
npm run build
```

### Watch Mode

For development, you can run in watch mode to automatically regenerate when the OpenAPI spec changes:

```bash
npm run dev
```

### Clean Generated Files

```bash
npm run clean
```

## Project Structure

```
├── src/
│   ├── api/
│   │   ├── endpoints/
│   │   │   └── hallocasaAPI.ts   # Generated API methods & React Query hooks
│   │   ├── model/                 # Generated TypeScript interfaces
│   │   └── custom-instance.ts     # Axios configuration
│   └── index.ts                   # Main export file
├── openapi.json                   # OpenAPI specification
├── orval.config.ts                # Orval configuration
└── package.json
```

## Contributing

1. Update the `openapi.json` file with the latest API specification
2. Run `npm run generate` to regenerate the client
3. Test the changes
4. Submit a pull request

## License

ISC 