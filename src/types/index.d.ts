declare namespace weui {
    export interface ActionSheetActionTap {
        value: number | string;
        groupindex: number;
        index: number
    }

    export interface DialogButton {
        text: string
        className: string
        extClass: string
        [index: string]: any
    }

    export interface DialogButtonTap {
        index: number,
        item: DialogButton
    }

    export interface EmojiInsertEmoji {
        detail: {
            emotionName: string
        }
    }
}

