import { QueryParams } from './QueryParams';

export const RequestSigner = Symbol('RequestSigner');
export interface RequestSigner {
    getSignedURL: (signalingEndpoint: string, queryParams: QueryParams, date?: Date) => Promise<string>;
}
