System.register(["@angular/core", "../index"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, index_1, ModalRemoveBook;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (index_1_1) {
                index_1 = index_1_1;
            }
        ],
        execute: function () {
            ModalRemoveBook = (function () {
                function ModalRemoveBook() {
                    this.removeBook = new core_1.EventEmitter();
                    this.closeModal = new core_1.EventEmitter();
                }
                ModalRemoveBook.prototype.close = function () {
                    this.closeModal.emit(true);
                };
                ModalRemoveBook.prototype.remove = function () {
                    this.removeBook.emit(this.book);
                };
                __decorate([
                    core_1.Input(),
                    __metadata("design:type", index_1.Book)
                ], ModalRemoveBook.prototype, "book", void 0);
                __decorate([
                    core_1.Output(),
                    __metadata("design:type", Object)
                ], ModalRemoveBook.prototype, "removeBook", void 0);
                __decorate([
                    core_1.Output(),
                    __metadata("design:type", Object)
                ], ModalRemoveBook.prototype, "closeModal", void 0);
                ModalRemoveBook = __decorate([
                    core_1.Component({
                        moduleId: __moduleName,
                        templateUrl: './modalRemoveBook.component.html',
                        selector: 'modal-remove-book-component'
                    }),
                    __metadata("design:paramtypes", [])
                ], ModalRemoveBook);
                return ModalRemoveBook;
            }());
            exports_1("ModalRemoveBook", ModalRemoveBook);
        }
    };
});
//# sourceMappingURL=modalRemoveBook.component.js.map