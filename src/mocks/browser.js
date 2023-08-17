import { setupWorker } from 'msw';
import { handlers } from './handlers';

// We use the spread operator because the handlers in the handlers array 
// need to be passed in as separate arguments (i.e. multiple arguments).
export const worker = setupWorker(...handlers);
