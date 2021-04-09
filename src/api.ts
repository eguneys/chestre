import { kbt } from 'koob';
import { Xhr } from './xhr';
import { GetApi } from './books';

export class BooksApi implements GetApi {

  xhr: Xhr
  
  constructor(xhr: Xhr) {
    this.xhr = xhr;
  }

  book(id: kbt.BookId) {
    return this.xhr.json<kbt.Book>(`/book/${id}`);
  }

  chapter(id: kbt.ChapterId) {
    return this.xhr.json<kbt.Chapter>(`/chapter/${id}`);
  }
  
  section(id: kbt.SectionId) {
    return this.xhr.json<kbt.Section>(`/section/${id}`);
  }

  content(id: kbt.ContentId) {
    return this.xhr.json<kbt.Content>(`/content/${id}`);
  }
  
  books() {
    return this.xhr.json<Array<kbt.Book>>('/books');
  }

  chapters(id: kbt.BookId) {
    return this.xhr.json<Array<kbt.Chapter>>(`/chapters/${id}`);
  }
  
  sections(id: kbt.ChapterId) {
    return this.xhr.json<Array<kbt.Section>>(`/sections/${id}`);
  }

  contents(id: kbt.SourceId) {
    return this.xhr.json<Array<kbt.Content>>(`/contents/${id}`)
  }

  newBook(name: string) {
    return this.xhr.json<kbt.Content>('/books', {
      method: 'POST',
      body: this.xhr.form({
        name
      })
    });
  }

  newChapter(bookId: kbt.BookId, name: string) {
    return this.xhr.json<kbt.Chapter>('/chapters', {
      method: 'POST',
      body: this.xhr.form({
        bookId,
        name
      })
    });
  }

  newSection(chapterId: kbt.ChapterId, name: string) {
    return this.xhr.json<kbt.Section>('/sections', {
      method: 'POST',
      body: this.xhr.form({
        chapterId,
        name
      })
    });
  }


  newContent(sourceId: kbt.SourceId, name: string, content: string) {
    return this.xhr.json<kbt.Content>('/contents', {
      method: 'POST',
      body: this.xhr.form({
        sourceId,
        name,
        content
      })
    });
  }

  updateContent(contentId: kbt.ContentId, content: string) {
    return this.xhr.json<kbt.Content>(`/contents/${contentId}`, {
      method: 'POST',
      body: this.xhr.form({
        content
      })
    });
  }

  deleteBook(bookId: kbt.BookId) {
    return this.xhr.json<void>(`/books`, {
      method: 'DELETE',
      body: this.xhr.form({
        id: bookId
      })
    });
  }
}
