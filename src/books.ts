import { kbt } from 'koob';

type Ok = { ok: true };
type MPromise<A> = Promise<A | undefined>;

export type GetBook = (_: kbt.BookId) => MPromise<kbt.Book>;
export type GetChapter = (_: kbt.ChapterId) => MPromise<kbt.Chapter>;
export type GetSection = (_: kbt.SectionId) => MPromise<kbt.Section>;
export type GetContent = (_: kbt.ContentId) => MPromise<kbt.Content>;
export type GetBooks = () => MPromise<Array<kbt.Book>>;
export type GetChapters = (_: kbt.BookId) => MPromise<Array<kbt.Chapter>>;
export type GetSections = (_: kbt.ChapterId) => MPromise<Array<kbt.Section>>;
export type GetContents = (_: kbt.SourceId) => MPromise<Array<kbt.Content>>;
export type NewBook = (name: string) => MPromise<kbt.Book>;
export type NewChapter = (id: kbt.BookId, name: string) => MPromise<kbt.Chapter>;
export type NewSection = (id: kbt.ChapterId, name: string) => MPromise<kbt.Section>;
export type NewContent = (id: kbt.SourceId, name: string, content: string) => MPromise<kbt.Content>;
export type UpdateContent = (id: kbt.ContentId, content: string) => MPromise<kbt.Content>;
export type DeleteBook = (id: kbt.BookId) => MPromise<Ok>
  
export interface GetApi {
  book: GetBook,
  chapter: GetChapter,
  section: GetSection,
  content: GetContent,
  books: GetBooks,
  chapters: GetChapters,
  sections: GetSections,
  contents: GetContents,
  newBook: NewBook,
  newChapter: NewChapter,
  newSection: NewSection,
  newContent: NewContent,
  updateContent: UpdateContent
}
