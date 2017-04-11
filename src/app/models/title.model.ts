import { Chapter } from './chapter.model';
import { directory } from './directory';

export class Title implements directory {

    static fromJson(json: string) {
        let data = JSON.parse(json);
        return new Chapter(
            data.id, data.name, data.chapters, data.lawid
        );
    }
    constructor(
        public id: number,
        public name: string,
        public chapters: Chapter[],
        public lawid: number,
        public reviewed: boolean,
        public expanded: boolean = false,
        public type: string = 'title'
    ) { }
}
