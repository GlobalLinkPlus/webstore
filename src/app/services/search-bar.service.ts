import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchBarService {
    public onSearch: EventEmitter<string> = new EventEmitter<string>();

    public search(query: string) {
        this.onSearch.emit(query);
    }
}