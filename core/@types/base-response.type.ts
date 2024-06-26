export type BaseResponse<T = unknown> = {
  data?: T;
  message: string;
  error?: string | null;
  statusCode: number;
};

type PaginationMeta = {
  itemCount: number;
  totalItems?: number;
  itemsPerPage: number;
  totalPages: number;
  currentPage: number;
};

type PaginationLinks = {
  first?: string;
  previous?: string;
  next?: string;
  last?: string;
};

export type Pagination<T> = {
  items: T[];
  meta: PaginationMeta;
  links?: PaginationLinks;
};