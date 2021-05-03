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
        detail: {
            index: number,
            item: DialogButton
        }
    }

    export interface EmojiInsertEmoji {
        detail: {
            emotionName: string
        }
    }

    export interface CheckboxGroupChange<V> {
        detail: {
            value: V
        }
    }

    export interface GalleryChange {
        detail: {
            current: number
        }
    }

    export interface GalleryDelete {
        detail: {
            url: string
            index: number
        }
    }

    export interface SlideViewButtonTap {
        detail: {
            index: number
            data: any
        }
    }

    export interface UploaderUploadCallbackResult {
        tempFilePaths: string[]
        tempFiles: WechatMiniprogram.ImageFile[]
        contents: ArrayBuffer[]
    }

    export interface UploaderFail {
        detail: {
            type: number
            errMsg: string
        }
    }

    export interface TabbarChange<V> {
        detail: {
            index: number
            item: V
        }
    }

    export interface SearchbarSelectResult<V> {
        detail: {
            index: number
            item: V
        }
    }

    export interface StickyScroll {
        detail: {
            scrollTop: number
            isFixed: boolean
        }
    }

    export interface TabsTabClick {
        detail: {
            index: number
        }
    }

    export interface TabsChange {
        detail: {
            index: number
        }
    }
}

