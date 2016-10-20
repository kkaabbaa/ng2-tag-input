import { EventEmitter, Renderer } from '@angular/core';
import { FormGroup, ValidatorFn, AbstractControl } from '@angular/forms';
export declare class TagInputForm {
    private renderer;
    onSubmit: EventEmitter<any>;
    onBlur: EventEmitter<Event>;
    onFocus: EventEmitter<Event>;
    onKeyup: EventEmitter<Event>;
    onKeydown: EventEmitter<Event>;
    placeholder: string;
    validators: ValidatorFn[];
    input: any;
    form: FormGroup;
    constructor(renderer: Renderer);
    ngOnInit(): void;
    readonly value: AbstractControl;
    isInputFocused(): boolean;
    getErrorMessages(messages: any): string[];
    hasErrors(): boolean;
    focus(): void;
    getElementPosition(): ClientRect;
    private onKeyDown($event);
}
