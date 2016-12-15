import { Component, OnInit, Input } from '@angular/core';

import {directory} from '../../shared/models/directory';
import {Article} from '../../shared/models/article.model';


import {TitleCasePipe} from '../../shared/title-case.pipe';
import {TruncatePipe} from '../../shared/truncate.pipe';

import {ReviewService} from '../shared/review.service';


@Component({
    selector: 'law-tree',
    templateUrl: './law-tree.component.html',
    styleUrls: ['./law-tree.component.scss'],
})
export class LawTreeComponent implements OnInit {
    
    @Input()
    directories: Array<directory>

    constructor(private reviewService:ReviewService) { }

    ngOnInit() {
    }

    toggle(dir:directory){
        dir.expanded = !dir.expanded;
        console.log(dir)
    }

    check(dir:directory){
        // let newState = !dir.reviewed;
        dir.reviewed = !dir.reviewed;
        // //this.checkRecursive(newState);
        console.log("change tree")
        this.itemSelected(dir)

    }
    
    getIcon(dir:directory){

        if(dir.expanded){
            return '-';
        }

        return '+';
    }

    itemSelected(dir:directory){
      this.reviewService.announceSelected(dir);      
    }

    checkClass(dir:directory):boolean{
        //console.log(dir)
        if(!dir.articles && !dir.chapters)
        return false
        else
        return true
    }
}