import {Component, OnInit} from '@angular/core';
import {ModalDialogParams} from 'nativescript-angular/modal-dialog';
import {Validators, FormBuilder, FormGroup} from '@angular/forms';
import {Comment} from '../shared/comment';


@Component({
    moduleId: module.id,
    templateUrl: './comment.component.html'
})
export class CommentComponent implements OnInit {
    commentForm: FormGroup;
    userComment: Comment;

    constructor(private params: ModalDialogParams, private formBuilder: FormBuilder) {
        this.commentForm = this.formBuilder.group({
            author: '',
            rating: 5,
            comment: ['', Validators.required],
            date: ''
        });
    }

    ngOnInit() {
    }

    public submit() {
        this.userComment = this.commentForm.value;
        this.userComment.date = new Date().toISOString();
        this.params.closeCallback(this.userComment);
    }

    // onChangeComment(args){
    //     let textField = <TextField>args.object;
    //     this.form.patchValue({ comment: textField.text});
    // }
    //
    // onChangeAuthor(args){
    //     let textField = <TextField>args.object;
    //     this.form.patchValue({ author: textField.text});
    // }
    //
    // public onSubmit(){
    //     let date = new Date();
    //     this.form.patchValue({date : date.toISOString()});
    //
    //
    //     console.log(JSON.stringify(this.form.value));
    //     this.params.closeCallback(this.form.value);
    // }
}