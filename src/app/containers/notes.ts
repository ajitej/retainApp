import {Component} from '@angular/core';

@Component({
	selector: 'notes-container',
	styles: [`
	    .notes {
	      padding-top: 50px;
	    }
	    .creator {
	      margin-bottom: 40px;
	    }
	  `],
    template: `
	    <div class="row center-xs notes">
	      <div class="col-xs-6 creator">
	        note creator here
	      </div>
	      <div class="notes col-xs-8">
	        <div class="row between-xs">
	          <note-card
	            class="col-xs-4"
	            [note]="note"
	            *ngFor="let note of notes; let i = index"
	            (checked)="onNoteChecked(i)"
	          >
	          </note-card>
	        </div>
	      </div>
	    </div>
    `
})

export class NotesContainer{
	notes = [
		{title: 'This is a note 1', value: 'it has a great value.', color: 'lightblue'},
		{title: 'This is a note 2', value: 'it had a great value.', color: 'yellow'},
		{title: 'This is a note 3', value: 'it doesnt a great value.', color: 'red'}
	]

	onNoteChecked(i: number){
		this.notes.splice(i, 1);
	}
}